import React from 'react';

function FAQItem({ question, answer }) {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <div className="flex gap-6 items-start w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <h4 className="text-lg font-semibold leading-loose text-gray-900">{question}</h4>
          <p className="mt-2 text-base leading-6 text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;