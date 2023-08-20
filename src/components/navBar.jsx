import image from "../images/ALMS Logo.jpeg"

const NavBar = () => {
    return (
        <header>
            <div className="main-navContainer">
                    <div className="alms-logo">
                        <img src={image} alt="ALMS"/>
                        <div className="alms-logoname">
                            <h1><span className="alms">ALMS </span>FOUNDATION</h1>
                            <p>Together we can build a better place</p>
                        </div>
                    </div>
                <div className="nav-links">
                    <li title="contact us"><a href="">Contact Us</a></li>
                    {/* <li title="support"><a href="">Support</a></li> */}
                    <li title="mail"><a href="">Mail us@  ilmsfoundation@gmail.com</a></li>
                </div>
            </div>
        </header>
    )
}

export default NavBar;