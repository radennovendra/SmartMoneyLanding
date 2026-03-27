export default function Proof() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">
        Track Record Signal
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-card p-6 rounded-xl">
          <p className="text-green-400 text-2xl font-bold">+47%</p>
          <p className="text-gray-400">ELSA</p>
          <p className="text-sm text-gray-500 mt-2">
            Entry sebelum breakout
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl">
          <p className="text-green-400 text-2xl font-bold">+25%</p>
          <p className="text-gray-400">BRIS</p>
        </div>

      </div>
    </section>
  );
}