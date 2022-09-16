import './styles.css'

import instagramLogo from '../../assets/instagram-logo.png'
import instagramPerfil from '../../assets/instagram-perfil.jpg'

import { Icones } from '../../shared/components/Icones'
import { StatusCarrocel } from '../../shared/components/StatusCarrocel'
import ReactElasticCarousel from 'react-elastic-carousel'


let icones = ['Home', 'Explore', 'Messages', 'Notifications', 'Create', 'Profile']
let statusCarrossel = [instagramLogo, instagramPerfil]


export const Dashboard = () => {
    return (
        <div className="container">
            <div className='container-left'>
                <img src={instagramLogo} alt="Logo do instagram" />
                <div className='container-icons'>
                    {icones.map((icone) => <Icones key={icone} icone={icone} />)}
                </div>
            </div>

            <div className='container-center'>
                <ReactElasticCarousel>
                    <div className='container-carrocel'>
                        {statusCarrossel.map((s, index) => <StatusCarrocel key={index} foto={s} />)}
                    </div>
                </ReactElasticCarousel>
            </div>


            <div className='container-rigth'>lado direito</div>
        </div>
    )
}