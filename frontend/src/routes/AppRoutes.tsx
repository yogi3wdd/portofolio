import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Merge from '../pages/Merge'
import Projects from '../pages/Projects'
import ProjectList from '../pages/ProjectList'
import About from '../pages/About'
import Skill from '../pages/Skill'
import Certificate from '../pages/Certificate'
import Contact from '../pages/Contact'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Merge />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/all" element={<ProjectList />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skill />} />
        <Route path="certificates" element={<Certificate />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}