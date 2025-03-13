import { NavLink } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  const linkData = [
    { href: "https://github.com/ikealmighty", title: "Github", icon: faGithub },
    { href: "https://www.linkedin.com/in/ike-yates-572441116/", title: "LinkedIn", icon: faLinkedin },
    { href: "https://www.instagram.com/scones.ike.coffee/", title: "IG", icon: faInstagram }
  ]

  return (
    <div className="w-full bg-jasmine h-[2rem] fixed left-0 bottom-0 p-1 flex justify-evenly border-t-2 border-black">
      {linkData.map((link, index) => (
        <span key={index}>
          <NavLink to={link.href} target="_blank">
            {link.title}
            <FontAwesomeIcon className="mx-1" icon={link.icon} />
          </NavLink>
        </span>
      ))}
    </div>
  );
}
