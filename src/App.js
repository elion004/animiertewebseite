import './App.css';
import image1 from './images/DALL-E_Img1.png'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Card, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import LoremIpsum from "react-lorem-ipsum";
import Typist from "react-typist-component";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div style={{backgroundColor: "lightgoldenrodyellow"}}>
            <Container>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}>
                    <h1>
                        <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}>
                            Simple banana shoes
                            <br/>
                            <Typist.Backspace count={20}/>
                            <Typist.Delay ms={500}/>
                            Best banana shoes
                        </Typist>
                    </h1>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}>
                    <h2>
                        test
                    </h2>
                </div>
            </Container>
        </div>

    )
        ;
}

export default App;
