import React from 'react';
import Chip from './Chip'
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
    <section className="py-24 w-full bg-white">
      <div className="container mx-auto px-8 text-center md:px-5">
        {/* Section Header */}
        <div className="flex flex-col items-center w-full">
          <div className="max-w-2xl w-full">
            {/* Label */}
            <div className="w-fit p-4 text-primary mx-auto">
                        <Chip text='Biaya' background='#fff4f9' ring='primary'/>
                    </div>
            {/* Title */}
            <h3 className="mt-3 text-5xl tracking-tighter leading-none text-gray-900 text-center md:text-4xl">
              Simple & Transparan
            </h3>
            {/* Description */}
            <p className="mt-6 text-xl text-slate-600 text-center">
              Biaya layanan yang murah dan fix untuk mengembangkan bisnis
            </p>
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="container mx-auto px-8 mt-16 max-w-7xl md:px-5 md:mt-10">
        <div className="flex flex-wrap gap-8 justify-center items-start w-full">
          {pricingData.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;