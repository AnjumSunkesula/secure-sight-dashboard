"use client";
import { useIncident } from "@/context/IncidentContext";
import incidents from "@/data/incidents";

export default function IncidentList() {
  const { setSelectedIncident } = useIncident();


  return (
    <div className="space-y-3">
      {incidents.map((incident) => (
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <div 
              key={incident.id}
              onClick={() => setSelectedIncident(incident)}
              className="rounded cursor-pointer"
            >
              <img src={`/thumbnails/thumb-${incident.id}.png`} alt="" className="w-full h-28 object-cover rounded mb-2" />
            </div>
            <div className=" flex flex-col justify-between">
              <div className="text-sm font-semibold">{incident.label}</div>
              <div className="text-xs text-gray-400 mb-2">
                <div>{incident.location}</div>
                  <div>
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


          <div>
            <button className="mt-2 text-xs text-yellow-400 hover:underline">Resolve</button>
          </div>
        </div>
      ))}
    </div>
  );
}


