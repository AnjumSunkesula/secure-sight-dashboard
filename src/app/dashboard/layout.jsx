import DashboardLayout from "@/components/DashboardLayout";
import { IncidentProvider } from "@/context/IncidentContext";

export default function Layout({ children }) {
  return (
    <IncidentProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </IncidentProvider>
  );
}
