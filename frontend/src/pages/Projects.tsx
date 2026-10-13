import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { getProjects } from '../services/projects';
import type { Project } from '../types/project';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailsModal from '../components/ProjectDetailsModal';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Tambah state error agar user tahu jika gagal
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        getProjects()
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError('projects.error');
                setLoading(false);
            });
    }, []);

    return (
                <>
                <section className="projects-page">
                    <div className="projects-monitor">
                        <div className="projects-screen">
                            <div className="projects-toolbar" role="group" aria-label="Desktop status">
                                <span className="projects-window-dots" aria-hidden="true"><i /><i /><i /></span>
                                <span className="projects-toolbar-label">{t('projects.directory')}</span>
                                <span className="projects-toolbar-status"><i /> ONLINE</span>
                            </div>

                            <header className="projects-heading">
                                <p className="projects-eyebrow">{t('projects.kicker')}</p>
                                <h1>{t('projects.title')}</h1>
                                <p className="projects-intro">{t('projects.description')}</p>
                            </header>

                            {loading ? (
                                <p className="projects-message" role="status">{t('projects.loading')}</p>
                            ) : error ? (
                                <p className="projects-message projects-message-error" role="alert">{t(error)}</p>
                            ) : projects.length === 0 ? (
                                <p className="projects-message">{t('projects.empty')}</p>
                            ) : (
                                <div className="projects-grid">
                                    {projects.map((project) => (
                                        <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
                                    ))}
                                    <Link className="projects-more-link" to="/projects/all">
                                        <span className="projects-more-icon" aria-hidden="true">
                                            <FaArrowRight />
                                        </span>
                                        <span className="projects-more-kicker">{t('projects.index')}</span>
                                        <span>{t('projects.follow')}</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                            {selectedProject && (
                                <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                            )}
                    </>
    );
};

export default Projects;