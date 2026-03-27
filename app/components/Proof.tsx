export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Temukan Saham yang Sedang Dikumpulkan Bandar
          </h1>

          <p className="mt-4 text-gray-400">
            Sistem berbasis smart money untuk membaca pergerakan institusi IHSG.
          </p>

          <a
            href="https://t.me/username"
            target="_blank"
            className="inline-block mt-6 bg-green-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Gabung Telegram
          </a>
        </div>

        <div>
          <img
            src="/chart.png"
            alt="chart"
            className="rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}