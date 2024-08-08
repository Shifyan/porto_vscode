import data from "./projects.json";

export const getProjects = function () {
  return data;
};

const getMyProject = function (req, res) {
  const projects = getProjects();
  res.json(projects);
};

export default getMyProject;
