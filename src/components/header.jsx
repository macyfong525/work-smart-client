import logo from "../images/logo.png";
const Header = () => {
    return (<div style={{ background: "rgb(10,25,41)", height: '100px',position:'absolute',width:'100%' }}>
        <img src={logo} style={{ height: 'inherit', padding: '15px' }} />
    </div>);
}

export default Header;