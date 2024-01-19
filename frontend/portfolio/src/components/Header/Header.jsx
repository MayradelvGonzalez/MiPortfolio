import './Header.css';
import LogoNsf from '../../assets/LogoNsf.png';
function Header() {
    return (
        <div id="header">

            <div className='logoName'> <img src={LogoNsf} className="App-logo" alt="logo" /><h2 className="contacto"></h2></div>
            <div> <ul className="lista">
                <li><a href="tel:+543815160008" target='_BLANK'  rel="noopener noreferrer">Telefono</a></li>
                <li><a href="https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/" target='_BLANK'  rel="noopener noreferrer">Linkedin</a></li>
                <li><a href="https://github.com/MayradelvGonzalez" target='_BLANK'  rel="noopener noreferrer">Github</a></li>
                <li><a href="mailto:mayradelvallegonzalez@gmail.com" target='_BLANK'  rel="noopener noreferrer">Email</a>
                    <span class="border border-top"></span>
                    <span class="border border-right"></span>
                    <span class="border border-bottom"></span>
                    <span className="border border-left"></span></li>
            </ul></div>
        </div>


    )
}

export default Header;