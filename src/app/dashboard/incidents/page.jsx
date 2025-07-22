import VideoPlayer from "@/components/VideoPlayer";
import IncidentList from "@/components/IncidentList";
import IncidentDetails from "@/components/IncidentDetails";
import Navbar from "@/components/navbar";

export default function IncidentsPage() {
  return (
      <div className="flex flex-col h-screen">
        <Navbar />

        {/* Main section */}
        <div className="flex flex-1 overflow-hidden bg-[#0D223D] text-white">
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
