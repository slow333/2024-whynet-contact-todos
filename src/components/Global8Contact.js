import styles from "../module-css/Emp.module.css";
import {exData} from "../data";
import NavBar from "./NavBar2";

function Global8Contact() {
  const exEmp = exData.map((d) => {
    return {
      id: d.ID,
      email: d.메일주소,
      name: d.이름,
      department: d.부서,
      position: d.직위,
      empStatus: d.직원형태,
      cellPhone: d.휴대전화,
      role: d.담당업무,
      isoRole: d.인증,
    };
  });
  return (
       <div className={styles.contactContainer}>
         <NavBar/>
         <div className='title'><h1 className='title'>Global8 연락처.</h1></div>

         <table className={styles.empContainer}>
           <thead>
           <tr>
             <th>이름</th>
             <th>휴대폰</th>
             <th>이메일</th>
             <th>인증 역활</th>
           </tr>
           </thead>
           <tbody>
           {exEmp.map((em) => (
                <tr key={em.id}>
                  <td className={styles.emp}>
                    {em.name} {em.position}
                  </td>
                  <td className={styles.emp}>{em.cellPhone}</td>
                  <td className={styles.emp}>{em.email}</td>
                  <td className={styles.emp}>{em.isoRole}</td>
                </tr>
           ))}
           </tbody>
         </table>
       </div>
  );
}

export default Global8Contact;
