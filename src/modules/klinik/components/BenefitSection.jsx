// BenefitSection.js
import React from "react";
import SectionHeader from "./SectionHeader";
import BenefitCard from "./BenefitCard";

function BenefitSection() {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/53efa844390389431df10665f225369a41188568589163faf05936c7fdd0e71b?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a",
      title: "Reservation Management",
      description:
        "Kelola reservasi dan tingkatkan optimalkan kepuasan pelanggan Anda dengan sistem pembayaran beragam.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b8743661e9556ea4bd31400bc5504d122bc20f70ce5905ebd3d50b2f80c2db2?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a",
      title: "Marketing Analytics",
      description:
        "Sistem analisis data yang lengkap untuk tracking ROI bisnis Anda, sehingga mudah menentukan strategi bisnis.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a9d6224c1a59ee7d90cddc72e18fa37f17986f3bf8d9a8080f9207e5e740b1e?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a",
      title: "AI Marketing Generator",
      description:
        "Buat strategi marketing dan konten marketing untuk meningkatkan penjualan layanan bisnis Anda.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/938c41707db0d91560b2c4489b1fef8e5e755c2ed1319e71530b2ceaba158848?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a",
      title: "Marketing Tools",
      description:
        "Fitur marketing untuk meningkatkan promosi event maupun bisnis Anda, seperti email marketing, WA marketing, media coverage dsb.",
    },
  ];

  return (
    <section className="py-24 w-full bg-white">
      {/* Container for Section Header */}
      <div className="container mx-auto px-8 text-center md:px-5">
        {/* Section Header */}
        <SectionHeader
          subtitle="Benefit"
          title="Online Booking untuk Klinik Anda"
          description="Permudah manajemen reservasi, minimalkan pembatalan mendadak dan optimalkan pengalaman pelanggan Anda."
        />
      </div>
      
      {/* Container for Benefit Cards */}
      <div className="container mx-auto px-8 mt-16 md:px-5 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
