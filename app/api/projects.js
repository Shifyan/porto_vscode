import data from "./projects.json";

export const getProjects = () => {
  return data;
};

const getMyProject = (req, res) => {
  const projects = getProjects();
  res.json(projects);
};

export default getMyProject;
