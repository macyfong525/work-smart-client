

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiFillHome, AiOutlinePlus, AiOutlineUser, AiFillCalendar, AiTwotoneTool, AiFillContacts } from 'react-icons/ai';
import { BiSupport, BiCurrentLocation } from 'react-icons/bi';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import styles from "./sidebar.module.css";


export default function SideBar(props) {
    const [open, setopen] = useState(true)
    
	const [subnav, setSubnav] = useState(false);

	const showSidebar = () => setSubnav(!subnav);
    const toggleOpen = () => setopen(!open);

	if(props.hide)
		return ( <></>)

	return (
		<div className={open ? styles.sidebar : styles.sidebarClosed} style={{marginTop: '99px'}}>
		
		<button className={styles.menuBtn} onClick={toggleOpen}>
			{open? (<AiOutlineDoubleLeft />): (<AiOutlineDoubleRight />)}
		</button>
		<hr/>
		<div>
			<NavLink key={0} className={styles.sideitem} to="/">
				<span><AiFillHome /></span>
				<span className={styles.linkText}>Home</span>
			</NavLink>

			<NavLink key={1} className={styles.sideitem} to="/addtask">
				<span><AiOutlinePlus /></span>
				<span className={styles.linkText}>Task</span>
			</NavLink>

			<NavLink key={3} className={styles.sideitem} to="/jobs">
				<span><AiTwotoneTool /></span>
				<span className={styles.linkText}>Jobs</span>
			</NavLink>

			<NavLink key={2} className={styles.sideitem} to="/schedule">
				<span><AiFillCalendar /></span>
				<span className={styles.linkText}>Schedule</span>
			</NavLink>

			{/* <NavLink key={4} className={styles.sideitem} to="/profile">
				<span><AiOutlineUser /></span>
				<span className={styles.linkText}>Profile</span>
			</NavLink> */}

			<NavLink key={5} className={styles.sideitem} onClick={showSidebar} >
				<span><BiSupport /></span>
				<span className={styles.linkText}>Support {subnav?<RiArrowUpSFill /> :<RiArrowDownSFill />}</span>
			</NavLink>
				
			{subnav && (<div style={{background:"black"}}>
				<NavLink key={6} className={styles.sideitem} to="/about/us">
					<span><AiFillContacts /></span>
					<span className={styles.linkText}>About Us</span>
				</NavLink> 

				<NavLink key={7} className={styles.sideitem}  to="/about/location">
					<span><BiCurrentLocation /></span>
					<span className={styles.linkText}>Location</span>
				</NavLink> 
				</div>) }
		</div>
	</div>
  )
}