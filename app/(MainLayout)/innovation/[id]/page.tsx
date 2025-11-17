"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

// ================= Mock Data =================
const mockData = [
  { id: 1, title: "AI Assistant", desc: "AI-based automation system.", category: "Technology", image: "/images/Acer1.jpg" },
  { id: 2, title: "Smart Farming", desc: "IoT-based precision farming.", category: "Agriculture", image: "/images/Acer2.jpg" },
  { id: 3, title: "Solar Energy Grid", desc: "Solar renewable system.", category: "Energy", image: "/images/Acer1.jpg" },
   { id: 4, title: "FinTech Analytics", desc: "Analitik keuangan untuk UMKM.", category: "Finance", image: "/images/Acer2.jpg" },
  { id: 5, title: "Urban Mobility", desc: "Transportasi ramah lingkungan di perkotaan.", category: "Transportation", image: "/images/Acer1.jpg" },
  { id: 6, title: "Healthcare IoT", desc: "Pemantauan kesehatan jarak jauh.", category: "Health", image: "/images/Acer2.jpg" },
  { id: 7, title: "Eco Packaging", desc: "Kemasan biodegradable ramah lingkungan.", category: "Environment", image: "/images/Acer1.jpg" },
  { id: 8, title: "Neural Computing", desc: "Pemrosesan data besar dengan jaringan saraf.", category: "Technology", image: "/images/Acer2.jpg" },
];

export default function InnovationDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const item = mockData.find((x) => x.id === Number(id));

  if (!item) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Innovation not found.</p>
      </main>
    );
  }

  // Innovation Related: kecuali item yang sedang dibuka
  const relatedInnovations = mockData.filter((x) => x.id !== item.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-80 sm:h-[420px]">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* ============ TITLE ============ */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">{item.title}</h1>

        {/* ============ PHOTO + SIDEBAR GRID ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {/* LEFT PHOTO CARD */}
          <div className="lg:col-span-2">
            <div className="w-full h-[350px] relative rounded-xl overflow-hidden shadow">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
          </div>

          {/* RIGHT SIDEBAR (STICKY) */}
          <aside className="md:sticky md:top-24 space-y-5">
            <h3 className="text-xl font-semibold mb-4 text-cyan-800">Key Information</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Category:</strong> <br /> {item.category}</p>
              <p><strong>ID Number:</strong> INNOV-{item.id}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-semibold">Approved Innovation</span>
              </p>
            </div>
            <button className="mt-6 w-full bg-cyan-700 text-white py-3 rounded-lg font-semibold hover:bg-cyan-800 transition">
              Make an Enquiry
            </button>
          </aside>
        </div>

        {/* ================= LARGE CONTENT SECTIONS ================= */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 uppercase border-l-4 border-cyan-700 pl-4 mb-5">Technology Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{item.desc}</p>
          <p className="text-gray-700 leading-relaxed">
            This innovation enhances efficiency, reduces maintenance costs, and supports operational readiness across various industries.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold uppercase border-l-4 border-cyan-700 pl-4 mb-5">Technology Features & Specifications</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>High efficiency performance</li>
            <li>Modular architecture for scalability</li>
            <li>Easy integration with existing systems</li>
            <li>Low carbon footprint</li>
            <li>Certified and field-tested</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold uppercase border-l-4 border-cyan-700 pl-4 mb-5">Potential Application</h2>
          <p className="text-gray-700 leading-relaxed">
            Applicable across smart cities, agriculture, manufacturing, healthcare, and renewable energy systems.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold uppercase border-l-4 border-cyan-700 pl-4 mb-5">Unique Value Proposition</h2>
          <p className="text-gray-700 leading-relaxed">
            Provides measurable impact by improving efficiency, lowering operational costs, and enabling intelligent decision-making.
          </p>
        </section>

        {/* ================= SHARE BUTTONS ================= */}
        <section className="mb-16 text-left">
          <h3 className="text-xl font-semibold mb-4 text-cyan-800">Share this Innovation</h3>
          <div className="flex justify-left gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Facebook</button>
            <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition">Twitter</button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">LinkedIn</button>
          </div>
        </section>

        {/* ================= INNOVATION RELATED ================= */}
        <section className="mb-20">
  <h3 className="text-2xl font-bold mb-8 text-gray-900 tracking-tight">
    Related Innovations
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {relatedInnovations.map((rel) => (
      <div
        key={rel.id}
        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border cursor-pointer"
        onClick={() => router.push(`/innovation/${rel.id}`)}
      >
        {/* IMAGE */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={rel.image}
            alt={rel.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h4 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-cyan-700 transition-colors">
            {rel.title}
          </h4>

          <p className="text-gray-600 text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-700"></span>
            {rel.category}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


      </div>
    </main>
  );
}
