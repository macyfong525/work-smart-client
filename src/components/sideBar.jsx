
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./sidebar.module.css";
import { SiWorkplace } from "react-icons/si"; 
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { navData } from "../utils/navData";

export default function SideBar() {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open ? styles.sidebar : styles.sidebarClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? (<AiOutlineDoubleLeft />): (<AiOutlineDoubleRight />)}
        </button>
    
		{navData.map((item) => {
			return (
			<NavLink key={item.id} className={styles.sideitem} to={item.link}>
				{item.icon}
				<span className={styles.linkText}>{item.text}</span>
			</NavLink>
			);
		})}
    </div>
  )
}