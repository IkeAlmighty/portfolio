import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

export default function NavBar() {
  const [page, setPage] = useState();
  const location = useLocation();

  const classNames = {
    NavLink: "lg:text-2xl px-3 py-1 text-nowrap",
  };

  const links = [
    { pathname: "/about", text: "About Me" },
    { pathname: "/portfolio", text: "Portfolio" },
    { pathname: "/contact", text: "Contact" },
    { pathname: "/resume", text: "Resume" },
  ];

  useEffect(() => {
    setPage(location.pathname);
  }, [location])

  return (
    <div className="text-center mb-5">
      <div className="text-2xl mb-3">ike Yates</div>
      <nav>
        <ul>
          <li>
            {links.map((linkData, index) => {
              return (
                <NavLink
                  key={index}
                  to={linkData.pathname}
                  onClick={() => setPage(linkData.pathname)}
                  className={`${classNames.NavLink} ${page === linkData.pathname ? "bg-jasmine rounded border-b-2" : ""}`}
                >
                  {linkData.text}
                </NavLink>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  );
}
