export default function Hero() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <div className="mb-4">
            <span className="text-green-400 text-sm font-medium">
              ● Smart Money Detection System
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Deteksi Akumulasi Bandar
            <br />
            <span className="text-green-400">
              Sebelum Harga Meledak
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Sistem berbasis broker flow & volume untuk membaca pergerakan institusi di IHSG secara real-time.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://t.me/username"
              target="_blank"
              className="bg-green-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Gabung Telegram
            </a>

            <button className="border border-gray-700 px-6 py-3 rounded-xl text-gray-300 hover:bg-gray-800 transition">
              Lihat Contoh
            </button>
          </div>

          {/* Social Proof kecil */}
          <p className="mt-6 text-sm text-gray-500">
            Digunakan oleh trader untuk mendeteksi akumulasi lebih awal
          </p>

        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* Glow Card */}
          <div className="absolute -inset-2 bg-green-500/10 blur-2xl rounded-2xl"></div>

          <div className="relative bg-[#11161C] p-4 rounded-2xl border border-gray-800">

            <img
              src="/chart.png"
              alt="chart"
              className="rounded-xl"
            />

            {/* Overlay label */}
            <div className="absolute top-4 left-4 bg-green-400 text-black text-xs px-3 py-1 rounded-lg font-semibold">
              ACCUMULATION DETECTED
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}