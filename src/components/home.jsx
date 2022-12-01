import logo from "../images/logo.png";
import Profile from './profile'

const Home = ({users=[]}) => {
  return <Profile users={users}/>;
};

export default Home;
