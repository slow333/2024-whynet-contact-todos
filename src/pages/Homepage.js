import NavBar from "../components/NavBar2";
import styles from '../module-css/Homepage.module.css'
import {Outlet} from "react-router-dom";

function Homepage() {

  return (
     <div className='container'>
       <NavBar/>
       <ol>
         <li>할일을 정리</li>
         <li>회사 연락처</li>
         <li>컨설팅 업체 연락처</li>
       </ol>
       <Outlet/>
     </div>
  );
}

export default Homepage;