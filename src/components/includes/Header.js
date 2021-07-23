import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/kuumal.png'
import {Link} from "react-router-dom";
import '../../styles/Header.css';
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const Header = () => {

    const location = useLocation();  
    const history = useHistory();

    if(location.pathname !== '/') {
        return (
            <>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
    
                <a style={{cursor: 'pointer'}} onClick={() => history.goBack()} className="px-1 back">
                    <FontAwesomeIcon icon={ faArrowLeft }/>
                </a>
    
            </>
        );
    }

    return (
        <>
            <div>
                <img src={logo} alt="" />
            </div>

        </>
    );
}

export default Header;