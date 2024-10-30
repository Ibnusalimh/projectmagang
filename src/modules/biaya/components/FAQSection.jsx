// FAQSection.jsx
import React from 'react';
import FAQItem from './FAQItem';
import Button from './Button'; // Imported Button component

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
];

function FAQSection() {
  const handleChatWithTeam = () => {
    // Logic to open chat modal or navigate to contact page
    window.location.href = "/hubungikami";
  };

  return (
    <section className="flex flex-col items-center py-24 w-full bg-white">
      {/* Header */}
      <div className="flex flex-col px-8 w-full max-w-7xl md:px-5">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col w-full md:w-[768px]">
            <h2 className="text-4xl font-semibold tracking-tight leading-tight text-gray-900">
              FAQs
            </h2>
            <p className="mt-5 text-xl leading-8 text-slate-600">
              Semua hal yang perlu Anda ketahui tentang produk dan biaya. Tidak menemukan yang Anda cari? Silakan{" "}
              <button
                onClick={handleChatWithTeam}
                className="underline text-slate-600 focus:outline-none"
              >
                chat dengan tim kami
              </button>
              .
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col px-8 mt-16 w-full max-w-7xl md:px-5 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col px-8 mt-16 w-full max-w-7xl md:px-5 md:mt-10">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center p-8 w-full bg-gray-50 rounded-2xl">
          {/* Text Container */}
          <div className="flex flex-col w-full md:w-2/3">
            <h3 className="text-xl font-medium text-gray-900">Masih ada pertanyaan?</h3>
            <p className="mt-2 text-lg leading-loose text-slate-600">
              Ada pertanyaan yang belum terjawab? Hubungi tim kami yang siap membantu.
            </p>
          </div>
          {/* Button Container */}
          <div>
            <Button
              variant="primary"
              text="Hubungi Kami"
              onClick={handleChatWithTeam}
              className="text-base font-semibold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
