"use client";
import { useIncident } from "@/context/IncidentContext";
import incidents from "@/data/incidents";

export default function IncidentList() {
  const { setSelectedIncident } = useIncident();


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Incidents</h2>
      <div className="space-y-2">
        {incidents.map((incident) => (
          <button
            key={incident.id}
            onClick={() => setSelectedIncident(incident)}
            className="w-full bg-gray-100 dark:bg-gray-800 p-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-left transition"
          >
            <div className="font-semibold">{incident.label}</div>
            <div className="text-sm text-gray-500">{new Date(incident.timestamp).toLocaleString()}</div>
          </button>
        ))}
      </div>
    </div>
  );
}


