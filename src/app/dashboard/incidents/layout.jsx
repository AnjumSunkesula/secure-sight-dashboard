import { IncidentProvider } from "@/context/IncidentContext";

export default function Layout({ children }) {
  return (
    <IncidentProvider>
      {children}
    </IncidentProvider>
  );
}
