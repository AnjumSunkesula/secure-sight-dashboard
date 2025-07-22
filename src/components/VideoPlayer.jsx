"use client";

import { useIncident } from "@/context/IncidentContext";

export default function VideoPlayer() {
  const { videoRef, selectedIncident } = useIncident();

  return (
    <video
      ref={videoRef}
      controls
      className="rounded-md w-full"
      src={`/${selectedIncident.videoUrl}`}
    />
  );
}
