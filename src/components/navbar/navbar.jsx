import "./navbar.scss";


const Navbar = () => {
    return <div className="navbar">
        <div className="wrapper">
            <span className="span">Belmin Husanovic</span>
            <div className="socials">
                <a href="#"><img className="img" src="/src/assets/LinkedIN.svg" alt="Linkedin logo"/></a>
                <a href="#"><img className="img" src="/src/assets/Github.png" alt="Github logo"/></a>
            </div>
        </div>
    </div>
}

export default Navbar