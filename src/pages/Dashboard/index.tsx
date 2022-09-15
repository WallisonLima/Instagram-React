import './styles.css'

import instagramLogo from '../../assets/instagram-logo.png'
import { Icones } from '../../shared/components/Icones'



export const Dashboard = () => {
    return (
        <div className="container">
            <div className='container-left'>
                <img src={instagramLogo} alt="Logo do instagram" />
                <div className='container-icons'>
                    <Icones icone="Home" />
                    <Icones icone="Explore" />
                    <Icones icone="Messages" />
                    <Icones icone="Notifications" />
                    <Icones icone="Create" />
                    <Icones icone="Profile" />
                </div>
            </div>
            <div className='container-center'>centro</div>
            <div className='container-rigth'>lado direito</div>
        </div>
    )
}