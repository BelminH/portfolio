const Togglebtn = ({setIsOpen}) => {
    return <button onClick={() => setIsOpen((prev) => !prev)} className="toggle-btn">Button</button>

}

export default Togglebtn