import { NavLink } from "react-router";
import GridItem from "../components/GridItem";
import GridLayout from "../components/GridLayout";

export default function Portfolio() {
  const projectData = [
    { githubLink: "", deploymentLink: "", imgSrc: "", title: "This Portfolio" },
    { githubLink: "", deploymentLink: "", imgSrc: "", title: "PolySched" },
    {
      githubLink: "",
      deploymentLink: "",
      imgSrc: "",
      title: "TODO (PEAN Stack)",
    },
    {
      githubLink: "",
      deploymentLink: "",
      imgSrc: "",
      title: "scones.ike.coffee",
    },
    { githubLink: "", deploymentLink: "", imgSrc: "", title: "Sorcerer Soup" },
    { githubLink: "", deploymentLink: "", imgSrc: "", title: "SSSLang" },
  ];
  return (
    <div>
      <div className="p-2 text-center">
        <h2>Projects</h2>
        <div className="mt-2 text-sm italic text-zinc-600">
          Click on project card for more details
        </div>
      </div>
      <GridLayout>
        {projectData.map((project) => (
          <NavLink to={project.deploymentLink}>
            <GridItem>{project.title}</GridItem>
          </NavLink>
        ))}
      </GridLayout>
    </div>
  );
}
