import { NavLink } from 'react-router-dom';
import {
	CDBSidebar,
	CDBSidebarHeader,
	CDBSidebarMenuItem,
	CDBSidebarContent,
	CDBSidebarMenu,
	CDBSidebarFooter,
  } from 'cdbreact';
import { SiWorkplace } from "react-icons/si"; 
import { useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";


const SideNav = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return ( 
		<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
		  <CDBSidebar textColor="#fff" backgroundColor="#333">
			<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
			  <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
				<SiWorkplace />orkSmart
			  </a>
			</CDBSidebarHeader>
	
	
			<CDBSidebarContent className="sidebar-content">
			  <CDBSidebarMenu>
				<NavLink exact to="/" activeClassName="activeClicked">
				  <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
				</NavLink>


				<div>
					<NavLink exact to="/about" activeClassName="hoverLink" onClick={showSidebar} className="hoverLink">
					<CDBSidebarMenuItem icon="info">About {sidebar?<RiArrowUpSFill /> :<RiArrowDownSFill />}</CDBSidebarMenuItem>
					</NavLink> 

					
						{sidebar && (<div style={{background:"black"}}>
						<NavLink style={{fontSize: "14px"}} exact to="/about/us" activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="grin-hearts">About Us</CDBSidebarMenuItem>
						</NavLink> 
						<NavLink style={{fontSize: "14px"}} exact to="/about/project" activeClassName="activeClicked">
						<CDBSidebarMenuItem icon="grin-hearts">About project</CDBSidebarMenuItem>
						</NavLink> 
						</div>) }
					
				</div>

				<NavLink exact to="/addtask" activeClassName="activeClicked">
				  <CDBSidebarMenuItem icon="tasks">Add Task</CDBSidebarMenuItem>
				</NavLink>
				<NavLink exact to="/profile" activeClassName="activeClicked">
				  <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
				</NavLink>
				<NavLink exact to="/schedule" activeClassName="activeClicked">
				  <CDBSidebarMenuItem icon="calendar-alt">Schedule</CDBSidebarMenuItem>
				</NavLink>
				<NavLink exact to="/jobs" activeClassName="activeClicked">
				  <CDBSidebarMenuItem icon="info">Jobs</CDBSidebarMenuItem>
				</NavLink>

			  </CDBSidebarMenu>

			</CDBSidebarContent>
	
	
			<CDBSidebarFooter style={{ textAlign: 'center' }}>
			  <div
				style={{
				  padding: '20px 5px',
				}}
			  >
				
				<small className="text-center mt-5">WorkSmart &copy; Akshay & Macy, 2022</small>
			  </div>
			</CDBSidebarFooter>
		  </CDBSidebar>
		</div>
	  );
	};
 
export default SideNav;