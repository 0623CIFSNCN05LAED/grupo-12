import logo from "../assets/logo.png";


function Menu (){

return(
    <header className="menu-wrap">
    <figure className="user">
        <div className="user-avatar">
    <img src={logo} alt= "Logo Bike World" />
  </div>

  <figcaption>Bike World</figcaption>

  </figure>
  </header>
  )

}
export default Menu;