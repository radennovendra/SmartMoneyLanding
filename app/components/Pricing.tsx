export default function Pricing() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">
        Akses Premium Signal
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-card p-8 rounded-xl">
          <h3>Basic</h3>
          <p className="text-3xl font-bold">Rp199k</p>
        </div>

        <div className="bg-card p-8 rounded-xl border border-green-400">
          <h3>Pro</h3>
          <p className="text-3xl font-bold">Rp399k</p>
        </div>

      </div>
    </section>
  );
}