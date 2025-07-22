import Header from "./Header";
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1  p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
