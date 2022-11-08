import {useLocation} from 'react-router-dom'

const NotFound = () => {
    const location = useLocation();
    return ( <div>
        <h1>404 page not found at {location.pathname}!</h1>
    </div> );
}
 
export default NotFound;