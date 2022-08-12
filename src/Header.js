import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Menu from './Menu.js';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import classnames from "classnames";

AOS.init();

const api = {
    validator: async ( phoneNumber ) => {
        return await axios.post(
            "https://nada-backend.us-east-1.elasticbeanstalk.com/site/Marketing/SendVerificationSms",
            { phoneNumber }
        )
    },
    save: async ( phoneNumber ) => {
        return await axios.post(
            "https://nada-backend.us-east-1.elasticbeanstalk.com/site/Marketing/SaveNumber",
            { phoneNumber }
        )
    }
}



function ModalForm({ visible = false, verifycator, onClose, onSuccess, code, phoneNumber }) {


    const [ success, setSuccess] = useState( false ) ;
    const [ codetest, setCodeTest ] = useState("") ;
    const [ error, setError ] = useState("") ;
    

    const onVerifyHandler = () => {
        code !== Number(codetest)
        ? setError("invalid code entered")
        : onSaveNumber(  ) ;
    }
    const onSaveNumber = () => {
        api.save(phoneNumber);
        setSuccess(true);
    }
    const onCodeHandler = ({ target:{ value } }) => {
        setCodeTest( value ) ;
        setError("") ;
    }

    return (
        <Modal show={ visible } onHide={ onClose } backdrop="static" keyboard={ false } size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-context">

                {
                    ! success
                    ? (
                        <>
                            <p className="text-center">Please enter the code from SMS</p>
                            <input onChange={ onCodeHandler } value={ codetest } className="codeInput p-4" placeholder="code" />
                            { error && <p className="error-message-secondary">{ error }</p> }
                        </>
                    )
                    : (
                        <>
                            <p className="text-center">Thanks for your interest in NADA! We’ll review your request and get back with you soon.</p>
                        </>
                    )
                }

            </Modal.Body>
            <Modal.Footer>
                {
                    ! success
                    ? <button onClick={ onVerifyHandler }>Verify</button>
                    : <button onClick={ onSuccess }>Close</button>
                }
            </Modal.Footer>
        </Modal>
    )
}

function Header() {

    const [ phone, setPhone ] = useState( null ) ;
    const [ exception, setException ] = useState( "" )
    const [ formValid, setFormValid ] = useState( false )
    const [ code, setCode ] = useState()
    const [ show, setShow ] = useState( false );
    const [ menuActive, setMenuActive ] = useState( false )
    const [ success, setSuccess ] = useState( false )

    const onPhoneHandler = ( value ) => {
        const isValid = Boolean( value ) ;
        setPhone( value ) ;
        setException( isValid ? "" : "Phone number is incorrect" ) ;
    }
    const onBlurHandler = ( e ) => {}
    const onModalCloseHandler = () => setShow( false );
    const onVerifyCodeHandler = ( value ) /* Boolean */ => {
        let is = false ;
        try { is = +value === +code }
        catch ( e ) { return false }

        return is ;
    }
    const onVerifySuccessHandler = async () => {
        try { await api.save( phone ) }
        catch ({ message }) { return setException( message || "Oops! Something went wrong!" ) }

        setShow(false);
        setCode(null) ;
        setSuccess(true) ;
    }
    const onSMSSendHandler = async ( e ) => {
        e.preventDefault();

        let validator ;
        try { validator = await api.validator() }
        catch ({ message }) { return setException( message || "Failed to validate the entered number" ) }

        const code = validator.data ;
        if( ! code ) {
            return setException( "Verification failed" ) ;
        }

        setCode( code ) ;
        setShow( true );
    };
    const changeActiveMenuState = () => {
        setMenuActive( !menuActive );
    };

    const items = [ { value: "Главная", href: './main' }, { value: "Услуги", href: './service' }, { value: "Магазин", href: './shop' }, ]

    useEffect( () => {
        if ( exception ) {
            setFormValid( false )
        } else {
            setFormValid( true )
        }
    }, [ exception ] )

   
   

    return (
        <header className="header block" name="#header">
            <Navbar id="header" className="fixed-top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">

                        <nav className="burger-main">
                            <div onClick={ changeActiveMenuState }
                                 className={ menuActive ? 'burger-btn cross' : 'burger-btn' }>
                                <span className="midline"></span>
                            </div>
                        </nav>


                        <Menu active={ menuActive } setActive={ setMenuActive } header={ "Бургер меню" }
                              items={ items }/>
                        <nav className="me-auto">
                            <h1 className="logo">
                                <a className="logo-text text-decoration-none" href="/">
                                    <img className="logo-N" alt="logo-N" src="./a/logo_N.svg"/>
                                    <img className="logo-i" alt="logo-i" src="./a/logo.svg"/>NADA</a>
                            </h1>
                        </nav>
                        <nav className="nav-link d-flex justify-content-between">
                            <Nav.Link href="/">Features</Nav.Link>
                            {/*
					<Nav.Link href="#nft">NFT Collection</Nav.Link>
					*/ }
                            <LinkContainer to="/road-map">
                                <Nav.Link>Road Map</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/who-we-are">
                                <Nav.Link>Who We Are</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href="https://discord.gg/q4b4CBWT" target="blank">Join Discord</Nav.Link>


                            <Col sm={ 2 } className="sociala-section p-0">
                                <a target="blank" href="https://www.instagram.com/not.another.dating.app/"
                                   className="sociala">
                                    <img className="sociala-img" alt="sociala-img" src="./a/instagram.svg"></img>
                                </a>
                                <a target="blank" href="https://www.facebook.com/NotAnotherDatingApp/"
                                   className="sociala">
                                    <img className="sociala-img" alt="sociala-img" src="./a/facebook.svg"></img>
                                </a>
                                <a target="blank" href="https://twitter.com/dating_another" className="sociala">
                                    <img className="sociala-img" alt="sociala-img" src="./a/twitter.svg"></img>
                                </a>
                            </Col>

                        </nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Row>
                <Col sm={ 12 } className="p-0">
                    <div className="hero-section">
                        <Container id="hero" className="container-head" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <Row className="hero-section-content align-items-center">
                                <Col sm={ 4 } className="hero-text-image">
                                    <Row className="input_content justify-content-center">
                                        <Col sm={ 9 } className="N-box align-items-center d-flex justify-content-center text-center text-lg-start">
                                            <h1 className="N m-2">
                                                <img className="N" alt="N" src="./a/N.svg"/>
                                            </h1>
                                            <p className="hero-section-line m-1"></p>
                                            <p className="hero-section-line-text m-2 text-left">Not<br/> Another<br/> Dating<br/> App
                                            </p>
                                        </Col>
                                        <Col sm={ 8 } className="d-flex justify-content-center text-center text-lg-start">
                                            <Form className={ classnames("input-form", "phone-number", ( show || success ) && "disabled") }>
                                                { exception && <div className="error-message">{ exception } </div> }
                                                <Form.Group className="input-box mb-3" controlId="formBasicEmail">
                                                    <PhoneInput
                                                        country={'us'}
                                                        containerClass="input-phone"
                                                        placeholder="Enter your phone"
                                                        prefix="+"
                                                        value={ phone }
                                                        inputProps={{
                                                            type: "tel",
                                                            className: "emailInput p-4",
                                                            required: true,
                                                            autoFocus: true,
                                                        }}
                                                        onBlur={ onBlurHandler }
                                                        onChange={ onPhoneHandler }
                                                       
                                                    />
                                                </Form.Group>
                                                <button className="form-btn" type="submit" disabled={   !formValid || !phone } onClick={ onSMSSendHandler }>Request Access</button>
                                            </Form>
                                        </Col>
                                        <Col sm={ 12 } className="hero-btn-text text-center text-lg-start">
                                            <p className="hero-section-main-text mt-5 fz-20px">Leave the ghosting and
                                                catfishes behind and join NADA today! We offer a new experiential take
                                                on dating. Enter your phone number to get in the know.</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Row className="hand-wrapper">
                                    <Col sm={ 12 } className="head-phones">
                                        <img className="header-hand_2" alt="header-hand_2" src="./a/hand_2.png"/>
                                        <img className="header-hand_1" alt="header-hand_1" src="./a/hand_1.png"/>
                                    </Col>
                                </Row>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
            <ModalForm code={ code } phoneNumber={ "+" + phone } visible={ show } onClose={ onModalCloseHandler } verifycator={ onVerifyCodeHandler } onSuccess={ onVerifySuccessHandler }/>
        </header>
    )
}

export default Header;