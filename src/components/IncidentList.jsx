"use client";
import { useState, useEffect } from "react";
import { useIncident } from "@/context/IncidentContext";
// import InitialIncidents from "@/data/incidents";
import { DoorOpen, Clock, Cctv } from "lucide-react";

export default function IncidentList() {
  const { setSelectedIncident } = useIncident();
  const [incidents, setIncidents ] = useState([]);
  const [loading,setLoading ] = useState(true);

  useEffect(() => {
    async function fetchIncidents() {
      const res = await fetch("/api/incidents?resolved=false");
      const data = await res.json();
      setIncidents(data);
      setLoading(false);
    }

    fetchIncidents();
  }, []);

  const handleResolve = async (id) => {
    console.log("Resolving incident with ID:", id); 
    // Optimistically remove from UI
    setIncidents((prev) => prev.filter((incident) => incident.id !== id));

    // API call to mark resolved
    await fetch(`/api/incidents/${id}/resolve`, { method: "PATCH" });
  };

  if (loading) return <div className="text-sm text-gray-400">Loading incidents...</div>;

  return (
    <div className="space-y-5">
      {incidents.map((incident) => (
        <div key={incident.id}  className="flex justify-between items-center pr-5">
          <div className="flex space-x-3">
            <div 
              onClick={() => setSelectedIncident(incident)}
              className="rounded cursor-pointer"
            >
              <img 
                src={incident.thumbnailUrl} 
                alt="" 
                className="w-full h-[80px] object-cover rounded"
              />
            </div>

            {/* Incident Info */}
            <div className=" flex flex-col justify-between">
              <div className="text-sm font-semibold flex gap-1">
                <DoorOpen className="w-4 h-4 text-red-400"/>
                {incident.type}
              </div>

              {/* Incident Location */}
              <div className="text-xs text-gray-400">
                <div className="flex flex-row gap-1">
                  <Cctv className="w-3.5 h-3.5"/>
                  {incident.camera?.location || "Unknown"}
                </div>

                {/* Timestamp */}
                <div className="flex gap-1">
                  <Clock className="w-3.5 h-3.5"/>
                  {(() => {
                    const start = new Date(incident.tsStart);
                    const end = new Date(incident.tsEnd);

                    const formatTime = (date) =>
                      `${String(date.getHours()).padStart(2, "0")}:${String(
                        date.getMinutes()
                      ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

                    const formatDate = (date) =>
                      `${date.getDate()} ${date.toLocaleString("en-US", {
                        month: "short",
                      })} ${date.getFullYear()}`;

                    return `${formatTime(start)} to ${formatTime(end)} on ${formatDate(start)}`;
                  })()}
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => handleResolve(incident.id)} className="text-xs text-yellow-400 hover:underline cursor-pointer">
            Resolve&nbsp;&nbsp;&nbsp;&gt;
          </button>
        </div>
      ))}
    </div>
  );
}


