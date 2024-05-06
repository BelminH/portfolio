const Togglebtn = ({ isOpen, setIsOpen }) => {
    return (
        <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="toggle-btn"
        >
            {isOpen ? "Close" : "Open"}
        </button>
    );
}

export default Togglebtn;
