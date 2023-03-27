import './App.css';
import image1 from './images/dalle-e/DALL-E_Img1.png'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <div data-aos="fade-up">
                    <img src={image1} alt={"first banana shoe image"}/>
                </div>
            </header>
        </div>
    );
}

export default App;
