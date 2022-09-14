import './styles.css'

import instagramLogo from '../../assets/instagram-logo.png'


export const Dashboard = () => {
    return (
        <div className="container">
            <div className='container-left'>
                <img src={instagramLogo} alt="Logo do instagram" />
            </div>
            <div className='container-center'>centro</div>
            <div className='container-rigth'>lado direito</div>
        </div>
    )
}