import React from "react";
import Button from "./Button";

const CallToAction = () => (
  <section className="flex flex-col justify-center items-center pb-24 w-full bg-white">
    <div className="flex flex-col px-8 w-full max-w-7xl md:px-5">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center p-16 bg-pink-50 rounded-2xl w-full">
        <div className="flex flex-col max-w-full">
          <h2 className="text-3xl font-semibold leading-none text-pink-700">
            Scale Up Bisnismu Sekarang
          </h2>
          <p className="mt-4 text-xl text-pink-500">
            Join dengan 150+ Bisnis yang telah Bertumbuh.
          </p>
          </div>
  <Button
    variant="primary"
    text="Registrasi Sekarang"
    className="text-base font-semibold"
    onClick={() => { window.location.href = 'https://agendakota.id/register-user'; }}
  />
</div>

    </div>
  </section>
);

export default CallToAction;
