import {Link} from 'react-router-dom';
function Header() {
    return (
        <div>
          <h1>React Rouger Tutorial</h1>  
        <ul className="nav"> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>

        </div>
    )
}

export default Header
