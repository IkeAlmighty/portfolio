import { NavLink } from "react-router";
import GridItem from "../components/GridItem";
import GridLayout from "../components/GridLayout";

export default function Portfolio() {
  const projectData = [
    {
      githubLink: "https://github.com/ikealmighty/portfolio.git",
      deploymentLink: "",
      imgSrc: "",
      title: "This Portfolio",
      description: "This portfolio website. Written with Vite + React.",
    },
    {
      githubLink: "https://github.com/ikealmighty/poly-sched.git",
      deploymentLink: "",
      imgSrc: "",
      title: "PolySched",
      description:
        "A Calendar app and event aggregator. Written in ExpressJS, MongoDB, and Vite + React",
    },
    {
      githubLink: "https://github.com/ikealmighty/todo-pean.git",
      deploymentLink: "",
      imgSrc: "",
      title: "TODO (PEAN Stack)",
      description: "A simple TODO app written in angular.",
    },
    {
      githubLink: "https://github.com/ikealmighty/scones-ike-coffee.git",
      deploymentLink: "https://scones.ike.coffee",
      imgSrc: "",
      title: "scones.ike.coffee",
      description:
        "A microbakery order fulfillment website. Written in Sveltekit, uses Stripe Payment API for payment processing.",
    },
    {
      githubLink: "https://github.com/ikealmighty/sorcerersoup.git",
      deploymentLink: "https://sorcerersoup.com",
      imgSrc: "",
      title: "Sorcerer Soup",
      description:
        "A Computer Assisted TTRPG. Written in Sveltekit, with Mongodb. ",
    },
    {
      githubLink: "https://github.com/ikealmighty/ssslang.git",
      deploymentLink: "",
      imgSrc: "",
      title: "SSSLang",
      description:
        "A small compiler for a templating language I created. Written in nodejs.",
    },
  ];
  return (
    <div>
      <div className="p-2 text-center">
        <h2>Projects</h2>
        <div className="mt-2 text-sm italic text-zinc-600">
          Click on project card to go to github repository, or click on
          deployment link to see a project live.
        </div>
      </div>
      <GridLayout>
        {projectData.map((project) => (
          <NavLink to={project.githubLink}>
            <GridItem>
              <div className="p-5">
                <div className="text-2xl">{project.title}</div>
                <div className="text-xs">{project.description}</div>
                <div className="text-sm">
                  {project.deploymentLink && (
                    <span>
                      Deployment:{" "}
                      <NavLink
                        to={project.deploymentLink}
                        className="text-blue-600"
                      >
                        {project.deploymentLink}
                      </NavLink>
                    </span>
                  )}
                </div>
              </div>
            </GridItem>
          </NavLink>
        ))}
      </GridLayout>
    </div>
  );
}
