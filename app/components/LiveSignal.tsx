// /app/components/LiveSignal.tsx
export default function LiveSignal() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Live Market Signal
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-[#11161C] p-6 rounded-2xl border border-gray-800">
            <p className="text-green-400 font-bold">ELSA</p>
            <p className="text-gray-400 text-sm mt-2">Accumulation Detected</p>
            <p className="mt-2 text-lg">Confidence: 72%</p>
          </div>

          <div className="bg-[#11161C] p-6 rounded-2xl border border-gray-800">
            <p className="text-yellow-400 font-bold">BBRI</p>
            <p className="text-gray-400 text-sm mt-2">Neutral Phase</p>
            <p className="mt-2 text-lg">Confidence: 51%</p>
          </div>

          <div className="bg-[#11161C] p-6 rounded-2xl border border-gray-800">
            <p className="text-red-400 font-bold">ADRO</p>
            <p className="text-gray-400 text-sm mt-2">Distribution</p>
            <p className="mt-2 text-lg">Confidence: 63%</p>
          </div>

        </div>

      </div>
    </section>
  );
}