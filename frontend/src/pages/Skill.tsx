import React from 'react';

const Skill = () => {
  const skills = ["React", "Tailwind CSS", "TypeScript", "Node.js", "UI/UX Design"];
  
  return (
    <div className="min-h-[50vh] w-full bg-[#1a1a1a] flex flex-col items-center justify-center py-20 text-white border-t border-white/5">
      <h2 className="text-4xl font-bold mb-10 font-poppins">MY SKILLS</h2>
      <div className="flex flex-wrap justify-center gap-4 px-10">
        {skills.map((skill) => (
          <span key={skill} className="px-6 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;