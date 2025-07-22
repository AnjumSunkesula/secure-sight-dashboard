import VideoPlayer from "@/components/VideoPlayer";
import IncidentList from "@/components/IncidentList";
import IncidentDetails from "@/components/IncidentDetails";
import Navbar from "@/components/navbar";

export default function IncidentsPage() {
  return (
    <div className="relative flex flex-col h-screen bg-gradient-to-b from-[#0D223D] to-[#060F1A] text-white">
    {/* Glow background behind Navbar */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-white opacity-10 rounded-full blur-2xl pointer-events-none z-0" />

    <Navbar />

    {/* Main section */}
    <div className="flex flex-1 overflow-hidden z-10">
      {/* Left Section: Video + Details */}
      <div className="w-3/4 p-4 space-y-4 overflow-y-auto">
        <VideoPlayer />
        <IncidentDetails />
      </div>

      {/* Right Section: Incident List */}
      <div className="w-1/4 border-l border-gray-700 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">15 Unresolved Incidents</h2>
        <IncidentList />
      </div>
    </div>
  </div>
  );
}
