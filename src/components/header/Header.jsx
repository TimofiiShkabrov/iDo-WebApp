import logo from './../../img/logo/logo.svg'
import account from './../../img/account.svg'
import './header.css'

function Header () {
    return (
        <header className="header">
             <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logo} alt="iDo" />
                        <span>iDo</span>
                    </div>
                    <nav className="header_nav">
                        <ul>
                        <li><a href="#!">FAQ</a></li>
                        <li><a href="#!">Documents</a></li>
                        <li><a href="#!">Contacts</a></li>
                        <li><a href="#!"><img src={account} alt="Account" /></a></li>
                        </ul>
                    </nav>
                </div>
             </div>
        </header>
    )
}

export default Header;