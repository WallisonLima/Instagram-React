import { FaHome, FaSearch, FaFacebookMessenger, FaHeart, FaRegPlusSquare, FaRegUserCircle } from 'react-icons/fa';
import './styles.css'

type PropsIcons = {
    icone: string;
}

export const Icones = (props: PropsIcons) => {
    return (
        <button className="button" >
            <i>
                {props.icone == "Home" ? <FaHome className="icon" size={25} /> : 
                 props.icone == "Explore" ? <FaSearch className="icon" size={25} /> :
                 props.icone == "Messages" ? <FaFacebookMessenger className="icon" size={25} /> :
                 props.icone == "Notifications" ? <FaHeart className="icon" size={25} /> :
                 props.icone == "Create" ? <FaRegPlusSquare className="icon" size={25} /> :
                 props.icone == "Profile" ? <FaRegUserCircle className="icon" size={25} /> : ""}
            </i>
            <div className="text">{props.icone}</div>
        </button>
    )
}