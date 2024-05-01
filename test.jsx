import {motion} from "framer-motion";

const Test = () => {
    return <div className="testing">
        <motion.div className="box" animate={{opacity: 0}} transition={{duration: 2, delay: 0.4}}></motion.div>

    </div>;
}

export default Test;
