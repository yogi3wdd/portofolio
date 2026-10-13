import { useState, type KeyboardEvent } from "react";
import { useLanguage } from '../i18n/LanguageContext';

const Skill = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      id: "web-app",
      title: t('category.web'),
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Firebase", "Git", "GitHub", "Dart", "Flutter", "Supabase", "PostgreSQL"],
    },
    {
      id: "iot-electrical",
      title: t('category.electrical'),
      skills: ["ESP32", "IoT", "Arduino IDE", "C", "Python", "PLC", "Electrical Wiring", "PCB Design", "AI & ML", "Microcontroller Programming", "Sensors & Actuators"],
    },
    {
      id: "design",
      title: t('category.design'),
      skills: ["Figma", "UI/UX Design", "Canva", "Graphic & Logo Design", "Affinity by Canva", "Inkscape"],
    },
  ];
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const selectedCategory = skillCategories.find(({ id }) => id === activeCategory)!;

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % skillCategories.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + skillCategories.length) % skillCategories.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = skillCategories.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveCategory(skillCategories[nextIndex].id);
    document.getElementById(`skill-tab-${skillCategories[nextIndex].id}`)?.focus();
  };

  return (
    <section className="skill-section w-full overflow-hidden text-white">
      <div className="skill-board">
        <div className="mb-12 px-6 text-center">
          <p className="mb-3 font-junge text-sm uppercase tracking-[0.25em] text-white/55">{t('skills.kicker')}</p>
          <h2 className="font-permanent-marker text-4xl font-bold">{t('skills.title')}</h2>
        </div>

        <div className="skill-tabs" role="tablist" aria-label="Skill categories">
          {skillCategories.map(({ id, title }, index) => (
            <button
              className="skill-tab"
              id={`skill-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={activeCategory === id}
              aria-controls="skill-panel"
              tabIndex={activeCategory === id ? 0 : -1}
              key={id}
              onClick={() => setActiveCategory(id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {title}
            </button>
          ))}
        </div>

        <div
          className="skill-grid"
          id="skill-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${selectedCategory.id}`}
          tabIndex={0}
        >
          {selectedCategory.skills.map((skill) => (
            <div className="skill-paper" key={skill}>
              <span className="skill-pin" aria-hidden="true" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;