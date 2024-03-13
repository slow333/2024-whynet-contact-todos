import styles from "../module-css/Emp.module.css";
import {data} from "../data";
import NavBar from "./NavBar2";

const WhynetContact = () => {
  const whynetEmp = data.map((d) => {
    return {
      id: d.ID,
      email: d.메일주소,
      name: d.이름,
      department: d.부서,
      position: d.직위,
      empStatus: d.직원형태,
      exEmail: d.외부메일주소,
      cellPhone: d.휴대전화,
      internalPhone: d.회사전화,
      role: d.담당업무,
      isoRole: d.인증,
      linked: d.global8담당,
    };
  });
  return (
     <div className='container'>
       <NavBar/>
       <h3>회사 연락처</h3>
       <table className={styles.empContainer}>
         <thead>
         <tr>
           <th>이름</th>
           <th>부서</th>
           <th>휴대폰</th>
           <th>이메일</th>
           <th>외부이메일</th>
           <th>역활</th>
           <th>인증 역활</th>
           <th>G담당</th>
         </tr>
         </thead>
         <tbody>
         {whynetEmp.map((em) => (
              <tr key={em.id}>
                <td className={styles.emp}>
                  {em.name} {em.position}
                </td>
                <td className={styles.emp}>{em.department}</td>
                <td className={styles.emp}>{em.cellPhone}</td>
                <td className={styles.emp}>{em.email}</td>
                <td className={styles.emp}>{em.exEmail}</td>
                <td className={styles.emp}>{em.role}</td>
                <td className={styles.emp}>{em.isoRole}</td>
                <td className={styles.emp}>{em.linked}</td>
              </tr>
         ))}
         </tbody>
       </table>
     </div>
  );
};

export default WhynetContact;
