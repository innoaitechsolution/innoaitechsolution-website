import Navbar from "./components/Navbar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import PrivacyPolicy from "./privacypolicy/PrivacyPolicy";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Works />           
            <Contact />
            <Footer />
            <PrivacyPolicy />           
        </div>
    );
}

export default App;
