import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

export default function Resume() {
  return (
    <div className="text-center">
      <h1>Download Resume</h1>
      <div className="my-10 hover:animate-bounce inline-block">
        <a href="/Assets/resume.pdf" download>
          <FontAwesomeIcon size="3x" icon={faDownload} />
        </a>
      </div>
    </div>
  );
}
