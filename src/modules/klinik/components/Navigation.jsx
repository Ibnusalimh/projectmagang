import React from "react";

function Navigation() {
  const navItems = [
    "Tentang Agendakota",
    "Fitur",
    "Untuk Klinik",
    "Biaya",
    "Hubungi Kami",
  ];

  return (
    <nav className="flex flex-wrap gap-8 items-center self-stretch my-auto text-base font-semibold min-w-[240px] text-slate-600 max-md:max-w-full">
      {navItems.map((item, index) => (
        <div key={index} className="flex items-start self-stretch my-auto">
          <div className="gap-2 self-stretch">{item}</div>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
