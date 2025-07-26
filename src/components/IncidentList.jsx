"use client";
import { useState, useEffect } from "react";
import { useIncident } from "@/context/IncidentContext";
import { TriangleAlert, CheckCheck, DoorOpen, Clock, Cctv, AlertCircle, ShieldOff, Package, HandCoins, Handshake, Bomb, UserSearch, Plus } from "lucide-react";

export default function IncidentList() {
  const { setSelectedIncident } = useIncident();
  const [incidents, setIncidents ] = useState([]);
  const [loading,setLoading ] = useState(true);
  const [filter, setFilter] = useState("unresolved");

  useEffect(() => {
    async function fetchIncidents() {
      try {
        const res = await fetch("/api/incidents?resolved=false");

        if (!res.ok) {
          // If status is 500 or anything else, log and exit
          const errorText = await res.text(); // read raw error response
          console.error("Failed to fetch incidents:", res.status, errorText);
          setLoading(false);
          return;
        }

        const data = await res.json();
        setIncidents(data);
      } catch (err) {
        console.error("Network or parsing error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchIncidents();
  }, []);


  const handleResolve = async (id) => {
    console.log("Resolving incident with ID:", id); 
    // API call to mark resolved
    await fetch(`/api/incidents/${id}/resolve`, { method: "PATCH" });

    setIncidents((prev) => 
      prev.map((incident) => incident.id === id ? { ...incident, resolved: true } : incident)
    );
  };

  if (loading) return <div className="text-sm text-gray-400">Loading incidents...</div>;

  const filteredIncidents = incidents.filter((incident) =>
    filter === "unresolved" ? !incident.resolved : incident.resolved
  );

  const resolvedCount = incidents.filter(i => i.resolved).length;

  const typeIconMap = {
    "Unauthorized Access": DoorOpen,
    "Suspicious Activity": AlertCircle,
    "Forced Entry": ShieldOff,
    "Package Left": Package,
    "Robbery": HandCoins,
    "Scam": Handshake,
    "Gun Threat": Bomb,
  };

  const getIconByType = (type) => {
    const Icon = typeIconMap[type] || AlertCircle;
    return <Icon className="w-4 h-4 text-red-400" />;
  };


  return (
    <div>
      {/* Header with toggle */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold flex gap-2">
            <TriangleAlert className="text-red-600" />
            {filteredIncidents.length} {filter === "unresolved" ? "Unresolved" : "Resolved"} Incidents
          </h2>
        </div>

        {filter === "unresolved" ? (
          <>
            <div className="flex gap-1">
              <div className="relative flex items-center">
                <DoorOpen
                  className=" w-5 h-5 text-orange-500  cursor-not-allowed  rounded-full p-1 bg-yellow-950 relative z-10"
                  title="Access"
                />

                <Plus
                  className="-ml-1 w-5 h-5 text-red-500  cursor-not-allowed  rounded-full p-1 bg-red-950 relative z-20"
                  title="Add"
                />

                <UserSearch
                  className="-ml-1 w-5 h-5 text-blue-500  cursor-not-allowed rounded-full p-1 bg-indigo-950 relative z-30"
                  title="Search User"
                />

                
              </div>

              <div className="flex gap-1 border-1 border-gray-500 rounded-2xl cursor-pointer py-0.5 px-2 items-center bg-black text-white">
                <div className="text-green-400"><CheckCheck size={18}/></div>
                <div className="text-xs">
                  <button
                    onClick={() => setFilter("resolved")}
                    className="hover:text-green-400 cursor-pointer"
                  >
                    {resolvedCount} resolved incidents
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={() => setFilter("unresolved")}
            className="text-sm text-yellow-300 hover:underline"
          >
            View Unresolved
          </button>
        )}
      </div>

      <div className="space-y-5">
        {filteredIncidents.map((incident) => (
          <div key={incident.id}  className="flex justify-between items-center pr-5 lists">
            <div className="flex space-x-3">
              <div 
                onClick={() => setSelectedIncident(incident)}
                className="rounded cursor-pointer"
              >
                <img 
                  src={incident.thumbnailUrl} 
                  alt="Incident Thumbnail" 
                  className="w-full h-[80px] object-cover rounded"
                />
              </div>

              {/* Incident Info */}
              <div className=" flex flex-col justify-between">
                <div className="text-sm font-semibold flex gap-1">
                  {getIconByType(incident.type)}
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

           {filter === "unresolved" && (
              <button
                onClick={() => handleResolve(incident.id)}
                className="text-xs text-yellow-300 font-bold hover:underline cursor-pointer"
              >
                Resolve&nbsp;&nbsp;&nbsp;&gt;
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}