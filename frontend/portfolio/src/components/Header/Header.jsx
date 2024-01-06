import './Header.css';
import LogoB from '../../assets/LogoB.jpg';
function Header() {
    return (
        <div id="header">
           
               <div className='logoName'> <img src={LogoB} className="App-logo" alt="logo" /><h2 className="contacto">Hola soy el header de contacto</h2></div>
               <div> <ul className="lista">
                    <li>Telefono</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                    <li>Email</li>
                </ul></div>
            </div>


    )
}

export default Header;