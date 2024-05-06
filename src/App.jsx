import "./app.scss"
import Navbar from "./components/navbar/navbar.jsx";
import Test from "../test.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";

const App = () => {
    return <div>
        <section id="Homepage">
            <Navbar/>
        </section>

        <section id="Skills">Parllax-Effect</section>
        <section>Skills</section>
        <section id="Portfolio">Parllax-Effect</section>
        <section>Personal-Projects1</section>
        <section>Personal-Projects2</section>
        <section id="Contact">Parllax-Effect</section>
        <section>Contact</section>
    </div>
        ;
};

export default App;