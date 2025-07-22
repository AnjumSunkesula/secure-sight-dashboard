"use client";

export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6  text-white shadow">
      <div className="flex items-center gap-4">
        <span className="font-bold text-lg">MANDLACX</span>
      </div>
      <div>
        <nav className="flex gap-6 ml-6 text-sm text-gray-300">
          <a href="#">Dashboard</a>
          <a href="#">Cameras</a>
          <a href="#">Scenes</a>
          <a href="#" className="font-bold text-white">Incidents</a>
          <a href="#">Users</a>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Mohammed Ajhas</span>
        <img
          src="/user.jpg"
          alt="User"
          className="w-8 h-8 rounded-full border border-white"
        />
      </div>
    </header>
  );
}
