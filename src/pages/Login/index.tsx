
import './styles.css'

import instagramPhone from '../../assets/instagram-phone.png'
import instagramLogo from '../../assets/instagram-logo.png'
import instagramPerfil from '../../assets/instagram-perfil.jpg'


export function Login() {
    return (
        <div className="instagram-wrapper">
            <div className="instagram-phone">
                <img src={instagramPhone} alt="celular" />
            </div>
            <div className="instagram-continue">
                <div className="group">
                    <img src={instagramLogo} className="instagram-logo" alt="instagram logo" />
                    <div className="profile-photo">
                        <img src={instagramPerfil} alt="foto do perfil" />
                    </div>
                    <a href="/pagina-inicial" className="instagram-login">Continue como walllima</a>
                    <a href="#" className="instagram-logout">Remover conta</a>
                </div>
                <div className="group">
                    <p className="not-account">não é walllima?</p>
                    <p className="not-account">
                        <span className="link-blue">Altenar contas</span>
                        ou
                        <span className="link-blue">Inscreva-se</span>
                    </p>
                </div>
                <div className="get-the-app">
                    <p className="get-app">Baixe o aplicativo</p>
                    <div className="download">
                        <a href="#" className="app-download"></a>
                        <a href="#" className="app-download"></a>
                    </div>
                </div>
            </div>

        </div>
    )
}