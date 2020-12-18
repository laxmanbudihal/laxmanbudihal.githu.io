import React from 'react'
import { Row,Col} from 'react-bootstrap';
import { FaInstagram,FaLinkedinIn,FaGithub } from "react-icons/fa";

function Home() {
    return (
        <div className="container-fluid bg-dark"> 
         <Row>
            <Col>
                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://avatars3.githubusercontent.com/u/43513285?s=400&u=65582fa5cd5648ab13092839f6e0bb86bd40e527&v=4" alt="photo" className="m-5 shadow-lg" style={{borderRadius:"100%"}} />
                </div>
            </Col>
            
            <Col className="d-flex justify-content-center align-items-start flex-column">
            <h1 style={{fontsize:"72px",color:"#919191"}}>Laxman Budihal</h1>
            <h3 style={{color:"#ff12ff"}}>React Developer</h3>
            <div>
                <a className="m-2" href="https://www.instagram.com/laxman.budihal/">
                <FaInstagram color="#efefef" fontSize="32px"/>
                </a>
                <a className="m-2" href="https://www.linkedin.com/in/laxman-budihal-7a4071183/" target="_blank">
                <FaLinkedinIn color="#efefef" fontSize="32px" />
                </a>
                <a className="m-2" href="https://github.com/laxmanbudihal" target="_blank">
                <FaGithub color="#efefef" fontSize="32px"/>
                </a>
                
            </div>
            </Col>
         </Row>
        </div>

    );
}
export default Home
