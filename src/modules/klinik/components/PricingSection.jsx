import React from 'react';
import PricingCard from './PricingCard';

const pricingData = [
  {
    title: "0%",
    subtitle: "For Free Event/Activity",
    description: "Per Transaksi",
    features: [
      "Akses ke semua fitur basic",
      "Basic reporting dan analytics",
      "Unlimited invite tim ke dalam Organizer",
      "Unlimited create Organizer",
      "Unlimited create event/activity"
    ],
    tag: "Free Forever"
  },
  {
    title: "3%",
    subtitle: "For Paid Event/Activity",
    description: "Per Transaksi",
    features: [
      "Event Creator akan dikenakan Agendakota Service Fee sebesar: 3% x total nominal transaksi",
      "Jika event dibatalkan, Agendakota memiliki kebijakan untuk tetap memberlakukan Service Fee sebesar 3% atas transaksi yang telah dilakukan kepada Event Creator.",
      "Contoh:",
      "Andi membuat event Workshop 'Strategy Marketing ' dengan harga tiket Rp100.000.",
      "Budi membeli 3 tiket, maka: Budi akan membayar sebesar Rp300.000 Andi akan dikenakan fee sebesar Rp9.000 Total Pendapatan Bersih: Rp. 300.000-Rp.9.000 = Rp. 291.000,-"
    ]
  }
];

function PricingSection() {
  return (
    <section className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
      <div className="flex flex-col justify-center items-center py-24 w-full bg-white max-md:max-w-full">
        <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
          <div className="flex flex-col items-start w-full max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[768px]">
              <div className="flex flex-col w-full font-semibold max-md:max-w-full">
                <h2 className="text-base text-pink-700 max-md:max-w-full">Biaya</h2>
                <h3 className="mt-3 text-5xl tracking-tighter leading-none text-gray-900 max-md:max-w-full max-md:text-4xl">Simple & Transparan</h3>
              </div>
              <p className="mt-6 text-xl text-slate-600 max-md:max-w-full">
                Biaya layanan yang murah dan fix untuk mengembangkan bisnis
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-24 w-full bg-white max-md:max-w-full">
        <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
          <div className="flex flex-wrap gap-8 justify-center items-start w-full max-md:max-w-full">
            {pricingData.map((card, index) => (
              <PricingCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;