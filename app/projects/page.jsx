import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../api/projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = async () => {
  const projects = await getProjects(); // Pastikan fungsi getProjects mengembalikan promise

  return (
    <>
      <h3>Things I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
