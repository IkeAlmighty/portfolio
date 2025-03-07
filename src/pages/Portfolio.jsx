import { NavLink } from "react-router";
import GridItem from "../components/GridItem";
import GridLayout from "../components/GridLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
      imgSrc: "sconelogo.png",
      title: "scones.ike.coffee",
      description:
        "A microbakery order fulfillment website. Written in Sveltekit, uses Stripe Payment API for payment processing.",
    },
    {
      githubLink: "https://github.com/ikealmighty/sorcerersoup.git",
      deploymentLink: "https://sorcerersoup.com",
      imgSrc: "sorcerersoup.png",
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
      </div>
      <GridLayout>
        {projectData.map((project, index) => (
          <div key={index}>
            <GridItem>
              <div className={`p-5`}>
                {project.imgSrc && <img className="rounded h-[150px] object-fit mx-auto mb-5" src={`src/assets/${project.imgSrc}`} alt="project-image" />}
                <div className="text-2xl">
                  {project.deploymentLink ?
                    <NavLink to={project.deploymentLink} target="_blank">
                      {project.title}
                      <FontAwesomeIcon className="mx-2" icon={faUpRightFromSquare} />
                    </NavLink>
                    :
                    <span>{project.title}</span>
                  }
                </div>
                <div className="text-xs">{project.description}</div>
                <div className="text-sm">
                  {project.githubLink && (
                    <NavLink
                      to={project.githubLink}
                      target="_blank"
                      className="text-blue-600"
                    >
                      GitHub Repository
                    </NavLink>
                  )}
                </div>
              </div>
            </GridItem>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}
