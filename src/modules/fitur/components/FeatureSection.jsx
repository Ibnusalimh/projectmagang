// FeatureSection.js
import React from "react";
import FeatureCard from "./FeatureCard";
import iconticket from "../images/fitur1ico.png";
import iconreservations from "../images/reservico.png";
import iconanalytics from "../images/analyticsicon.png";
import mockup from "../images/mockup.png";
import Chip from './Chip';

const FeatureSection = () => {
  const features = [
    {
      icon: iconticket,
      title: "Ticketing Management",
      description:
        "Kelola penjualan tiket event dengan kemudahan bukti QR code, refund, re-scheduling, sistem pembayaran beragam hingga voucher.",
      benefits: [
        "Permudah pengelolaan tiket dan tingkatkan penjualan",
        "Kemudahan pengelolaan tiket dengan QR code",
        "Kebebasan memilih cara pembayaran",
      ],
      image: mockup,
    },
    {
      icon: iconreservations,
      title: "Reservation Management",
      description:
        "Kelola reservasi dan tingkatkan optimalkan kepuasan pelanggan Anda dengan sistem pembayaran beragam.",
      benefits: [
        "Percepat proses booking dengan sistem otomatis",
        "Layani pelanggan dengan sentuhan personal",
        "Optimalkan reservasi dan tingkatkan kepuasan pelanggan",
      ],
      image: mockup,
    },
    {
      icon: iconanalytics,
      title: "Marketing Analytics",
      description:
        "Sistem analisis data yang lengkap untuk tracking ROI bisnis atau eventmu, sehingga mudah menentukan strategi bisnis.",
      benefits: [
        "Analisis data secara otomatis untuk hasil cepat",
        "Dapatkan wawasan mendalam tentang perilaku pelanggan",
        "Tingkatkan ROI dengan strategi berbasis data",
      ],
      image: mockup,
    },
  ];

  return (
    <section className="flex flex-col items-center py-24 w-full bg-white">
      <div className="container mx-auto px-8 text-center md:px-5">
        {/* Section Header */}
        <div className="flex flex-col items-center w-full">
          <div className="max-w-2xl w-full">
            {/* Label */}
            <div className="w-fit p-4 text-primary mx-auto">
                        <Chip text='Fitur' background='#fff4f9' ring='primary'/>
                    </div>
            {/* Title */}
            <h2 className="mt-3 text-4xl tracking-tighter leading-none text-gray-900 text-center md:text-5xl">
              Manajemen Tiket & Booking Layanan
            </h2>
            {/* Description */}
            <p className="mt-5 text-xl leading-8 text-slate-600 text-center">
              Solusi kami dirancang khusus untuk membuat Anda fokus bertumbuh,
              berinovasi dan memberikan pengalaman terbaik pada pelanggan.
            </p>
          </div>
        </div>
      </div>
      {/* Feature Cards */}
      <div className="container mx-auto px-8 mt-16 max-w-7xl md:px-5 md:mt-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
