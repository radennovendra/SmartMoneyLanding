export default function Testimonial() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">
        Apa Kata Member
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-6">

        <div className="bg-[#11161C] p-6 rounded-xl">
          <p className="text-gray-400">
            “Masuk sebelum naik, beda banget sama sebelumnya.”
          </p>
        </div>

        <div className="bg-[#11161C] p-6 rounded-xl">
          <p className="text-gray-400">
            “Signalnya bukan random, jelas ada logic.”
          </p>
        </div>

      </div>
    </section>
  );
}