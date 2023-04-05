import './App.css';
import gif1 from './images/dancingBanana.gif'
import svg1 from './images/banana.svg'
import image0 from './images/dancingBanana.png'
import image1 from './images/dalle-e/DALL-E_Img1.png'
import image2 from './images/dalle-e/DALL-E_Img2.png'
import image3 from './images/dalle-e/DALL-E_Img3.png'
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Typist from "react-typist-component";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [, setIsHovered] = useState(false);
    const [imageSrc, setImageSrc] = useState(image0);

    const handleMouseOver = () => {
        setIsHovered(true);
        setImageSrc(gif1);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
        setImageSrc(image0);
    }


    return (
        <div style={{backgroundColor: "lightgoldenrodyellow"}}>
            <header className={'fixed-top'}
                    style={{
                        backgroundColor: 'lightgoldenrodyellow',
                        borderBottom: '2px solid black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                <img src={svg1} alt={'banana shoes logo'} style={{width: '250px', height: '50px'}}/>
            </header>
            <Container>
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <h1 style={{fontSize: '500%', fontStyle: 'italic', fontWeight: 'bold'}} className="text-center">
                        <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}>
                            Banana shoes are simple, boring and lame.
                            <Typist.Delay ms={1000}/>
                            <Typist.Backspace count={24}/>
                            <Typist.Delay ms={1000}/>
                            <p style={{color: 'red'}}>UNSURPASSABLE, STYLISH AND SIMPLY THE BEST!!!</p>
                        </Typist>
                    </h1>
                </div>

                <div className="text-center vh-100">
                    <h2 data-aos='fade-up' className="fw-normal display-2"
                        style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                        BananaMax 97
                    </h2>
                    <br/>
                    <div className="text-center align-middle">

                        <Row>
                            <Col>
                                <div data-aos="fade-up">
                                    <img src={image1} alt={'shoe number one'}
                                         style={{height: '300px', borderRadius: '10px'}}/>
                                </div>
                            </Col>
                            <Col>
                                <p data-aos="fade-up" className="lead text-start">
                                    The BananaMax 97 shoes are a unique and eye-catching footwear option for those
                                    who
                                    want to make a statement. These shoes feature a bright yellow banana design on
                                    the
                                    exterior, complete with black spots to mimic the fruit's natural appearance. In
                                    addition, the shoes are infused with a sweet banana scent that will leave you
                                    feeling energized and refreshed all day long. The BananaMax 97 shoes are perfect
                                    for
                                    those who want to stand out in a crowd and add a touch of fun to their everyday
                                    look.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/*Shoe number 02*/}
                <div className="text-center vh-100">
                    <h2 data-aos='fade-down' className="fw-normal display-2">
                        Banana Force 01
                    </h2>
                    <br/>
                    <div className="text-center align-middle">
                        <Row>
                            <Col>
                                <p data-aos="fade-down" className="lead text-end">
                                    The "Banana Force 01" shoes are the perfect footwear for summer. These shoes are
                                    made by a wise orangutan who carefully selected the finest materials to ensure
                                    both
                                    comfort and style. The shoes are designed with breathable mesh fabric to keep
                                    your
                                    feet cool and dry on hot summer days. The outsole is made of durable rubber,
                                    providing excellent traction on any surface. The shoes are also decorated with
                                    intricate woven patterns, showcasing the orangutan's exquisite craftsmanship.
                                    Step
                                    into the "Banana Force 01" shoes and experience the perfect combination of
                                    comfort,
                                    style, and craftsmanship
                                </p>
                            </Col>
                            <Col>
                                <div data-aos="fade-down">
                                    <img src={image2} alt={'shoe number two'}
                                         style={{height: '300px', borderRadius: '10px'}}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>


                {/*Shoe number 03*/}
                <div className="text-center vh-100">
                    <h2 data-aos='flip-left' className="fw-normal display-2">
                        Air Banana
                    </h2>
                    <br/>
                    <div className="text-center align-middle">
                        <Row>
                            <Col>
                                <div data-aos="flip-left">
                                    <img src={image3} alt={'shoe number three'}
                                         style={{height: '300px', borderRadius: '10px'}}/>
                                </div>
                            </Col>
                            <Col>
                                <p data-aos="flip-left" className="lead text-start">
                                    The "Air Banana" shoes are a true wonder of nature. These shoes are crafted from
                                    a
                                    rare species of banana, which grows solely in the Brazilian rainforest. The
                                    fibers
                                    of the banana are meticulously woven into a soft and flexible material that is
                                    both
                                    lightweight and durable. The interior of the shoe is lined with a cozy and
                                    breathable material that keeps your feet warm and comfortable. With their unique
                                    "Air" technology, these shoes provide excellent airflow and keep your feet dry and
                                    fresh. The "Air Banana" shoes are perfect for anyone looking for an eco-friendly,
                                    sustainable and stylish option for the winter months.
                                </p>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container>
            <footer className={'fixed-bottom'}
                    style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <img
                    src={imageSrc}
                    alt="a dancing banana"
                    style={{maxWidth: "100px", maxHeight: "100px"}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
                <img
                    src={imageSrc}
                    alt="a dancing banana"
                    style={{maxWidth: "100px", maxHeight: "100px"}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </footer>
        </div>
    );
}

export default App;
