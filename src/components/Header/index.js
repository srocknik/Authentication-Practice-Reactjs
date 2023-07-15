// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="home-link">
      Home
    </Link>
    <Link to="/about">About</Link>
  </div>
)

export default Header
