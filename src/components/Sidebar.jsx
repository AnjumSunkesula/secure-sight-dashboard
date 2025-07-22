// src/components/Sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">SecureSight</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-gray-300">Dashboard</a>
        <a href="#" className="hover:text-gray-300">Logs</a>
        <a href="#" className="hover:text-gray-300">Settings</a>
      </nav>
    </aside>
  );
}
