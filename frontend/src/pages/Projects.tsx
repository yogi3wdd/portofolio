import { useEffect, useState } from 'react';
import { getProjects } from '../features/projects/api';
import type { Project } from '../types/project';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Tambah state error agar user tahu jika gagal

    useEffect(() => {
        getProjects()
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Gagal memuat data dari Supabase");
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="flex justify-center p-10">
            <p className="animate-pulse">Loading projects from Supabase...</p>
        </div>
    );

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            {projects.length === 0 ? (
                <p>Belum ada project yang ditambahkan.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;