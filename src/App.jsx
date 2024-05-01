import "./app.scss"
import Navbar from "./components/navbar/navbar.jsx";
import Test from "../test.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";

const App = () => {
    return <div>
        <Sidebar/>
        <section>
            <Navbar/>
        </section>
        <section>Parllax-Effect</section>
        <section>Skills</section>
        <section>Parllax-Effect</section>
        <section>Personal-Projects1</section>
        <section>Personal-Projects2</section>
        <section>Contact</section>
{/*        <Test/>*/}
    </div>;
};

export default App;