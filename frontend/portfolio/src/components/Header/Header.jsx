import './Header.css';
import LogoNsf from '../../assets/LogoNsf.png';
function Header() {
    return (
        <div id="header">
           
               <div className='logoName'> <img src={LogoNsf} className="App-logo" alt="logo" /><h2 className="contacto">Aun no se que poner aqui</h2></div>
               <div> <ul className="lista">
                    <li><a href="tel:+543815160008">Telefono</a></li>
                    <li><a href="https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/">Linkedin</a></li>
                    <li><a href="https://github.com/MayradelvGonzalez">Github</a></li>
                    <li><a href="mailto:mayradelvallegonzalez@gmail.com">Email</a>
                    <span className="border border-left"></span></li>
                </ul></div>
            </div>


    )
}

export default Header;