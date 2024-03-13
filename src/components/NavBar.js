function NavBar() {
  return (
       <nav className="navbar navbar-dark bg-primary ps-3
          d-flex flex-row justify-content-start gap-3 text-light fixed-top">
         <div className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">Notes | </a>
         </div>
         <div className="nav-item">
           <a className="nav-link" href="#">와이넷 연락처 | </a>
         </div>
         <div className="nav-item">
           <a className="nav-link" href="#">업체 연락처</a>
         </div>
       </nav>
  );
}

export default NavBar;