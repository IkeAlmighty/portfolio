import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

export default function Project({ project }) {
    return (
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
    );
}