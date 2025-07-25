import VideoPlayer from "@/components/VideoPlayer";
import IncidentList from "@/components/IncidentList";
import Navbar from "@/components/navbar";


export default function IncidentsPage() {
  return (
    <div className="relative flex flex-col h-screen bg-black text-white">

      {/* Glow background behind Navbar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[100px] bg-yellow-500 opacity-20 rounded-full blur-2xl pointer-events-none z-0" />

      <Navbar />

      {/* Main section */}
      <div className="flex flex-1 overflow-hidden z-10">
        {/* Left Section: Video player */}
        <div className="w-3/5 p-4 space-y-4 overflow-y-auto">
          <VideoPlayer />
        </div>

        {/* Right Section: Incident List */}
        <div className="w-2/5  bg-zinc-900 m-4 p-4 rounded-md overflow-y-auto">
          <IncidentList />
        </div>
      </div>
    </div>
  );
}