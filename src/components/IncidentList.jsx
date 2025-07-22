"use client";
import { useIncident } from "@/context/IncidentContext";
import incidents from "@/data/incidents";

export default function IncidentList() {
  const { setSelectedIncident } = useIncident();


  return (
    <div className="space-y-3">
      {incidents.map((incident) => (
        <div
          key={incident.id}
          onClick={() => setSelectedIncident(incident)}
          className="bg-[#112b4a] hover:bg-[#18365d] p-3 rounded cursor-pointer transition"
        >
          <img src={`/thumbnails/thumb-${incident.id}.jpg`} alt="" className="w-full h-28 object-cover rounded mb-2" />
          <div className="text-sm font-semibold">{incident.label}</div>
          <div className="text-xs text-gray-400">
            {incident.location} • {new Date(incident.timestamp).toLocaleString()}
          </div>
          <button className="mt-2 text-xs text-yellow-400 hover:underline">Resolve</button>
        </div>
      ))}
    </div>
  );
}


