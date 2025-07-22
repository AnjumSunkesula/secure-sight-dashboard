import { IncidentProvider } from "@/context/IncidentContext";
import VideoPlayer from "@/components/VideoPlayer";
import IncidentList from "@/components/IncidentList";
import IncidentDetails from "@/components/IncidentDetails";

export default function IncidentsPage() {
  return (
    <IncidentProvider>
      <div className="flex flex-col md:flex-row gap-4 h-full">
        <div className="w-full md:w-1/3 border-r overflow-y-auto">
          <IncidentList />
          <IncidentDetails/>
        </div>
        <div className="flex-1">
          <VideoPlayer />
        </div>
      </div>
    </IncidentProvider>
  );
}
