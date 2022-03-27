import { useNavigate } from "react-router-dom";
import styles from './Button_goBack.module.css'
 export default function Button () {
    let navigate = useNavigate();  
    return (
  <button className={styles.button_goBack}
    onClick={() => {
      navigate(-1);
    }}
  >
    Go back
  </button>
    )}
    