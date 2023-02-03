import { pageLinks, socialLinks } from '../Data';
import logo from '../images/logo.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li>
                <a href={link.href} className="nav-link"> {link.text} </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((soLink) => {
            return (
              <li>
                <a href={soLink.href} className={soLink.className} target={soLink.target}></a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
};
export default NavBar