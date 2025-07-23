"use client";
import { useIncident } from "@/context/IncidentContext";
import incidents from "@/data/incidents";
import { DoorOpen, Clock, Cctv } from "lucide-react";

export default function IncidentList() {
  const { setSelectedIncident } = useIncident();


  return (
    <div className="space-y-5">
      {incidents.map((incident) => (
        <div key={incident.id}  className="flex justify-between items-center pr-5">
          <div className="flex space-x-3">
            <div 
              onClick={() => setSelectedIncident(incident)}
              className="rounded cursor-pointer"
            >
              <img src={`/thumbnails/thumb-${incident.id}.png`} alt="" className="w-full h-[80px] object-cover rounded"/>
            </div>

            {/* Incident Info */}
            <div className=" flex flex-col justify-between">
              <div className="text-sm font-semibold flex gap-1">
                <DoorOpen className="w-4 h-4 text-red-400"/>
                {incident.label}
              </div>

              {/* Incident Location */}
              <div className="text-xs text-gray-400">
                <div className="flex flex-row gap-1">
                  <Cctv className="w-3.5 h-3.5"/>
                  {incident.location}
                </div>

                {/* Timestamp */}
                <div className="flex gap-1">
                  <Clock className="w-3.5 h-3.5"/>
                  {(() => {
                    const start = new Date(incident.timestamp);
                    const end = new Date(start.getTime() + (incident.duration || 0) * 1000);

                    const formatTime = (date) => {
                      const h = String(date.getHours()).padStart(2, '0');
                      const m = String(date.getMinutes()).padStart(2, '0');
                      const s = String(date.getSeconds()).padStart(2, '0');
                      return `${h}:${m}:${s}`;
                    };

                    const formatDate = (date) => {
                      const day = date.getDate();
                      const month = date.toLocaleString('en-US', { month: 'short' });
                      const year = date.getFullYear();
                      return `${day} ${month} ${year}`;
                    };

                    return `${formatTime(start)} to ${formatTime(end)} on ${formatDate(start)}`;
                  })()}
                </div>
              </div>
            </div>
          </div>

          <button className="text-xs text-yellow-400 hover:underline cursor-pointer">
            Resolve&nbsp;&nbsp;&nbsp;&gt;
          </button>

          


        </div>
      ))}
    </div>
  );
}


