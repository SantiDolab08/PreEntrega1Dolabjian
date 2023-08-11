import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid"> 
            <a href="#" className="navbar-brand">SABRA</a>

            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">TEJIDO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">3D</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">CERAMICA</a>
                </li>
            </ul>

            
            <CartWidget />

           </div> 
        </nav>
    )
}

export default NavBar;