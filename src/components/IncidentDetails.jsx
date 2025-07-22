"use client"
import { useIncident } from "@/context/IncidentContext";

export default function IncidentDetails() {
  const { selectedIncident } = useIncident();

  if (!selectedIncident) return <p>Select an incident to view details</p>;
  console.log("Selected Incident:", selectedIncident);

  const { label, timestamp, location, severity, status, videoUrl } = selectedIncident;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">{label}</h2>
      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
        <li><strong>Time:</strong> {new Date(timestamp).toLocaleString()}</li>
        <li><strong>Location:</strong> {location}</li>
        <li><strong>Severity:</strong> {severity}</li>
        <li><strong>Status:</strong> {status}</li>
      </ul>
      <video controls className="w-full rounded shadow">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
