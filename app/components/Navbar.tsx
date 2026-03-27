// /app/components/Navbar.tsx
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-white">
          Smart Money
        </h1>

        <a
          href="https://t.me/username"
          className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Join
        </a>

      </div>
    </div>
  );
}