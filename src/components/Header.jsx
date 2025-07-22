// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Welcome, Admin</h2>
      <button className="bg-gray-800 text-white px-3 py-1 rounded">Logout</button>
    </header>
  );
}
