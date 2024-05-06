import "./sidebar.scss";
import Togglebtn from "./toggleButton/togglebtn.jsx";
import Links from "./links/links.jsx";
import {useState} from "react";
import {motion} from "framer-motion";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(150% at 40px 40px)",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(30px at 40px 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <Togglebtn isOpen={isOpen} setIsOpen={setIsOpen}/>
        </motion.div>
    );
}

export default Sidebar;
