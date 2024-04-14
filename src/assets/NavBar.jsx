import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        {/* Logo section */}
        <div className="logo">
          <h2 className="name-tag">{"<Name />"}</h2>
          <h2>ShaneCurtis</h2>
        </div>
        <ul className="socials">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </>
  );
};
