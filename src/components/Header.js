import logo from '../images/Vector.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
    </header>
  )
}

export default Header;