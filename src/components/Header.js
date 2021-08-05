import {Link} from "react-router-dom"
import video from './vd1.mp4';

const Header = (props) => {
    return(
       <div className="nav">
        <img
        className="logo"
        src="https://res.cloudinary.com/dt5zbnwvr/image/upload/c_scale,h_92,w_92/v1627680034/512px-Art_Institute_of_Chicago_logo.svg_ar3xjd.png"
        alt="Aic-logo"
        />
        <Link to="/">Exhibitions</Link>
        <Link to="/mylist">My Favorites</Link>
        <video className='videoTag' autoPlay loop muted>
          <source src={video} type='video/mp4'/>
        </video>
       </div>
       )
}

export default Header