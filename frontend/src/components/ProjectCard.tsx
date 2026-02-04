import type { Project } from '../types/project';

interface Props {
    project: Project;
}

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-2 text-blue-500 text-sm">{project.tech_stack}</div>
        </div>
    );
};

export default ProjectCard;