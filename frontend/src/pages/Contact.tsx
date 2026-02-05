import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[60vh] w-full bg-[#1a1a1a] flex flex-col items-center justify-center py-20 text-white border-t border-white/5">
      <h2 className="text-4xl font-bold mb-6 font-poppins">GET IN TOUCH</h2>
      <p className="text-gray-400 mb-10 text-center max-w-md px-10">
        Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan Anda melalui email di bawah ini.
      </p>
      <a 
        href="mailto:yogi@example.com" 
        className="px-10 py-4 bg-[#D9D9D9] text-[#2A2A2A] rounded-full font-bold hover:bg-white transition-all shadow-lg"
      >
        Send Email
      </a>
    </div>
  );
};

export default Contact;