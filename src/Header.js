import logo from "./img/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <header className="App-header">
        <li>
          <a href="/Solutions">Soutions</a>
        </li>
        <li>
          <a href="/Platforms">Platforms</a>
        </li>
        <li>
          <a href="/Customers">customers</a>
        </li>
        <li>
          <a href="/Company">company</a>
        </li>
        <li>
          <a href="/Resources">Resources</a>
        </li>
      </header>
      <div className="logs">
        <p className="login">Login</p>
        <button className="btn1">
          <a href=" Getstarted ">Get started</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
