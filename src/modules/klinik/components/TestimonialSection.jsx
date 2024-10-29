import React from "react";

function TestimonialSection() {
  return (
    <section className="py-24 w-full bg-gray-50">
      <div className="container mx-auto px-8 text-center md:px-5">
        {/* Company Logo */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66213a54154ddb2e0a7111b7f49eeee4a4d2b9dd49f340e4ed8398f704ac1831?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a"
          alt="Company Logo"
          className="object-contain mx-auto w-36" // w-36 = 144px
        />
        
        {/* Testimonial Quote */}
        <blockquote className="mt-8 text-5xl font-medium tracking-tighter text-gray-900 leading-tight md:text-4xl md:leading-tight">
          We've been using Untitled to kick start every new project and
          can't imagine working without it.
        </blockquote>
        
        {/* Avatar and Name */}
        <div className="flex flex-col items-center mt-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f102c4167b903cc7d2fab92ed19d10b80286150ee3ef171563cff3f17f1bb39b?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a"
            alt="Candice Wu"
            className="object-contain mx-auto w-16 h-16 rounded-full"
          />
          <div className="flex flex-col items-center mt-4">
            <div className="text-lg font-medium text-gray-900">
              Candice Wu
            </div>
            <div className="mt-1 text-base text-slate-600">
              Product Manager, Sisyphus
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default TestimonialSection;
