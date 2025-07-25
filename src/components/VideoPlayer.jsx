"use client";
import { useIncident } from "@/context/IncidentContext";

export default function VideoPlayer() {
  const { selectedIncident, videoRef } = useIncident();

  if (!selectedIncident) {
    return (
      <div className="text-sm text-gray-400">
        Select an incident to view its footage.
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-2">
      <h2 className="text-base font-semibold">{selectedIncident.type}</h2>
      <video
        ref={videoRef}
        src={selectedIncident.videoUrl}
        controls
        className="w-full max-h-[400px] rounded shadow"
      />
    </div>
  );
}
