import React from 'react';

const Certificate = () => {
  return (
    <div className="min-h-[50vh] w-full bg-[#1a1a1a] flex flex-col items-center justify-center py-20 text-white border-t border-white/5">
      <h2 className="text-4xl font-bold mb-10 font-poppins text-center">CERTIFICATES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl px-10 w-full">
        {[1, 2].map((i) => (
          <div key={i} className="aspect-video bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center text-gray-500 italic">
            Certificate Preview {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;