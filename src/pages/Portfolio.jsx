import GridItem from "../components/GridItem";
import GridLayout from "../components/GridLayout";
import Project from "../components/Project";

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
              <Project project={project} />
            </GridItem>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}
