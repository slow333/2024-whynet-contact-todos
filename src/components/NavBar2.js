import {NavLink} from "react-router-dom";
import styles from '../module-css/NavBar.module.css'
function NavBar() {
  return (
       <nav className="navbar navbar-dark bg-primary ps-3
          d-flex flex-row justify-content-start gap-3 text-light fixed-top">
         <NavLink to='/' className='nav-link'><img className={styles.img} src='logo.png' alt='logo'/></NavLink>
         <NavLink to='/todos' className='nav-link'>할일들</NavLink>
         <NavLink to='/whynet' className='nav-link'>회사연락처</NavLink>
         <NavLink to='/Global8' className='nav-link'>업체연락처</NavLink>
       </nav>
  );
}

export default NavBar;