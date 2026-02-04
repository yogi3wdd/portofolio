import axios from 'axios';
import type { Project } from '../../types/project';

const API_URL = 'http://localhost:8000/api'; // Sesuaikan dengan port Laravel kamu

export const getProjects = async (): Promise<Project[]> => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};