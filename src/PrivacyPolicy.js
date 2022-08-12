import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'; 
import Menu from './Menu.js';
import './Policy.css';

function PrivacyPolicy ()  {

    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:"Главная", href: './main'}, {value:"Услуги", href: './service'},  {value:"Магазин", href: './shop'},]

    return (
        <Row className="terms-row">

                    <Navbar  id="header" className="fixed-top"> 
                        <Container>
                        <nav className="burger-main">
                            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                                <span/>
                            </div>	
                        </nav>
                        <Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={items}/>
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  id="basic-navbar-nav" className="d-flex justify-content-between">
                        <nav className="me-auto">
                            <h1 className="logo">
                            <a className="logo-text text-decoration-none" href="/">
                                <img className="logo-N" alt="logo-N" src="./a/logo_N.svg" />
                                <img className="logo-i" alt="logo-i" src="./a/logo.svg" />NADA</a>
                                
                            
                            </h1>	  
                        </nav>
                            <nav  className="nav-link d-flex justify-content-between">
                                <Nav.Link href="/">Features</Nav.Link>
                                {/*
                                <Nav.Link href="#link">NFT Collection</Nav.Link>
                                */}
                                <LinkContainer to="/road-map">
                                <Nav.Link >Road Map</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/who-we-are">
                                <Nav.Link >Who We Are</Nav.Link>
                                </LinkContainer>   
                                <Nav.Link href="https://discord.gg/q4b4CBWT" target="blank">Join Discord</Nav.Link>
                                
                        
                        <Col sm={2} className="sociala-section p-0">
                            <a target="blank" href="https://www.instagram.com/not.another.dating.app/" className="sociala">	
                                <img className="sociala-img" alt="sociala-img" src="./a/instagram.svg"></img>
                            </a>
                            <a target="blank" href="https://www.facebook.com/NotAnotherDatingApp/" className="sociala">	
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

            <Row className="terms-wrapper">
                <Col sm={10} className="terms-content">
                    <h2>PRIVACY POLICY</h2>
                    <div>Welcome to the NADA Privacy Policy! 
                        Please read this in conjunction with our Terms and Conditions of
                        Use. 
                        This Privacy Policy applies to websites, apps, 
                        events and all other services we operate under NADA
                        brand
                    </div>
                    <h2>INFORMATION WE COLLECT</h2>
                    <div className="information-text1">In order for us to help you develop meaningful connections, 
                        we need to learn some “basic information”
                        about you and the types of people you’d like to meet.
                         You will choose what “basic information” to
                        provide to us when you create an account and complete your profile.
                         Such information may include:
                    </div>
                    <li>Name, phone number, e-mail address, employment information, gender information, and date
                        of birth
                    </li>
                    <li>Biography information, interests and details about you;</li>
                    <li className="information-text4">Content such as photographs and videos.</li>
                    <div className="information-text5">You may also choose to subscribe or participate in promotional activities, 
                        focus groups, market studies,
                        or contests. 
                        Such information obtained from your participation may include:
                    </div>
                    <li>Insights into our products and services;</li>
                    <li>Responses to questions;</li>
                    <li>Testimonials;</li>
                    <li>Registration information;</li>
                    <li>Credit card information.</li>
                    <h2 >INFORMATION WE RECEIVE FROM OTHERS</h2>
                    
                    <div className="information2-text1">
                        In addition to the information we receive directly from you,
                         we may receive information about you from
                        others. Such information may include:
                    </div>
                    <li>Information provided by other members as they use our services;</li>
                    <li>Reports submitted by other members;</li>
                    <li>Information obtained by Affiliates or Partners.</li>
                    <h2>INFORMATION GENERATED BY USE</h2>
                    <p> 
                        When members use NADA services, technical data is generated that allows us to determine which
                        services and features are favored. This information allows us to continue providing top notch services.
                        Such technical data information may include:
                    </p>
                    <li>Usage information;</li>
                    <li>Device information;</li>
                    <li>Geolocation (latitude and longitude) with your consent</li>

                    <h2>COOKIES AND OTHER TECHNOLOGIES</h2>

                    <div>
                        When members use NADA, we may collect personal data from you automatically
                         by using cookies or
                        similar technologies.
                         A cookie is a small file that can be placed on your device or browser
                         that allows us
                        to recognize and remember you.
                        Some web browsers (including Safari, Internet Explorer, Firefox and Chrome) have a “Do Not Track”
                        (“<b>DNT</b>”) feature that tells a website that a user does not want to have his or her online activity
                        tracked. You are in control while using NADA and are free to refuse to accept Cookies at any time by
                        managing your preferences in the “Manage Cookies” Section or by altering the settings on your internet
                        browser. If you’d like to learn more about cookies, check out <span className="cookies-link">www.allaboutcookies.org.</span>
                    </div>

                    <h2>DISCLOSURE OF INFORMATION</h2>
                    <p className="discloure-text1">
                        Our policy is to not disclose your Registration Information or personal data, except in the limited
                        circumstances described here:
                    </p>
                    <Col sm={12} className="term-disclosure">
                        <Col sm={6}>
                            <h3 className="term-disclosure-title">Circumstances where data may be disclosed</h3>
                            <div className="line1"></div>
                            <div className="term-disclosure-text1">
                            <b>Service Providers</b> – We engage certain trusted third
                                parties to perform functions and provide services to
                                us. We may share your Registration Information or
                                personal data with these third parties, but only for
                                the purposes of performing these functions and
                                providing such services. More information about this
                                is available directly below.
                            </div>
                            <div className="line2"></div>
                            <p><b>Moderators</b> – To monitor activity on the App and
                                approve content
                            </p>
                            <div className="line3"></div>
                            <p>
                                <b>Payment Processing and Telecommunications
                                Companies</b> – To facilitate payments for our premium
                                services.
                            </p>
                            <div className="line3"></div>
                            <div className="term-disclosure-text5">
                                <b>Law and Harm</b> – As we mentioned In the Terms &
                                Conditions, we think it is very important that all
                                Users behave whilst using NADA Services. We will
                                cooperate with third parties to enforce their
                                intellectual property or other rights, and with law
                                enforcement inquiries from within or outside your
                                country of residence where we are required to by
                                law, where there is an investigation into alleged
                                criminal behavior or to protect the vital interests of a
                                person.
                            </div>
                            <div className="line4"></div>
                            <div className="term-disclosure-text6">
                                <b>Business Transfers</b> – In the event that a NADA entity
                                or any of its affiliates undergoes a business transition
                                or change of ownership, such as a merger, acquisition
                                by another company, re-organization, or sale of all or
                                a portion of its assets, or in the event of insolvency or
                                administration, we may be required to disclose your
                                personal data
                            </div>
                            <div className="line3"></div>
                            <div className="term-disclosure-text7">
                               <b>Marketing Services Providers</b> – To help us serve
                                marketing and advertising on third party websites
                                and applications and measure the effectiveness of
                                our advertising campaigns. More information on this
                                is available below
                            </div>
                            <div className="line5"></div>
                            <div className="term-disclosure-text8">
                                <b>Anti-Spam and Anti-Fraud</b> – Your data may be shared
                                with other NADA, for example, to block accounts and
                                suspected fraudulent payment transactions as part of
                                our anti-spam and anti-fraud procedures.
                            </div>
                        </Col>
                        <Col sm={6}>
                            <h3 className="term-disclosure-title2">Disclosed data</h3>
                            <p className="term-disclosure-text9">This could include all data</p>
                            <p className="term-disclosure-text10">
                                Name and user registration details,
                                profile information, content of
                                messages and photographs
                            </p>
                            <p className="term-disclosure-text11">
                                Cardholder name, cardholder address,
                                card number, payment amount,
                                transaction date/time
                            </p>
                            <p className="term-disclosure-text12">
                                This could include any personal data
                                that NADA holds about you, depending
                                on the nature of the request or the
                                issue that we are dealing with.
                            </p>
                            <p>This could include all personal data that NADA holds about you.</p>
                            <div className="term-disclosure-text14">
                                Advertising identifier associated with
                                your device (Device ID), estimated
                                location (based on your IP address), age,
                                gender and data about your visit to our
                                Sites or App and action taken on those
                                (for example if you downloaded our App
                                or created an account with our App),
                                hashed email address.
                            </div>
                            <div>
                                Email address, phone number, IP
                                address and IP session information,
                                social network ID, username, user agent
                                string, and transaction and payment
                                data
                            </div>
                        </Col>
                    </Col>
                    <div>
                        <b>Aggregated Information</b> – We may share aggregated information with third parties that includes your
                        personal data (but which doesn’t identify you directly) together with other information including log
                        data for industry analysis and demographic profiling.
                    </div>
                    <h2>CHILDREN</h2>
                    <div>
                        Our services are restricted to individuals who are 18 years of age or older. We do not permit individuals
                        under the age of 18 on our platform. If you suspect that a member is under the age of 18, please use the
                        reporting mechanism available on the app.
                    </div>
                    <h2>LINKING OTHER ACCOUNTS TO NADA</h2>
                    <div className="linking-text1">
                        You may link your NADA account with your Instagram, Facebook or Spotify accounts. This allows you to
                        share some information from those accounts directly to your NADA account (for example, Instagram
                        photos, or your top Spotify artists).
                    </div>
                    <div className="linking-text2">
                        We only receive the limited information that Instagram or Spotify permits to be transferred (as detailed
                        by Instagram/Facebook/Spotify and agreed by you when you first connect your account from such
                        platforms with your NADA account).
                    </div>
                    <div>
                        If you no longer want to link your NADA account to your Instagram, Facebook or Spotify account, please
                        visit the settings in your Instagram, Facebook or Spotify account and follow the instructions to remove
                        the NADA app access permissions. Please note that any information already added to your NADA
                        account from those platforms will not be deleted unless you delete it within your NADA account as well.
                    </div>
                    <h2>YOUR RIGHTS</h2>
                    <div className="your-text1">
                        We want our users to be in control of their information.
                         As such, here’s a quick reminder of options and
                        tools available to you:
                    </div>
                    <li>
                        Access/Update tools in the service – you can access, delete,
                        or edit information that you
                        provided to us by accessing Tools and account settings on your device
                    </li>
                    <li>
                        Device Permissions – mobile platforms have permission systems for notifications, phone
                        contacts, photos, location services, push notifications and advertising identifiers;
                    </li>
                    <li>
                        Uninstall – you can stop all information collection by an app by uninstalling it. Remember that
                        uninstalling an app does NOT close your account. To close your account, please use the
                        corresponding functionality of the service;
                    </li>
                    <p className="howlong-title">HOW LONG WE KEEP YOUR INFORMATION</p>
                    <div>
                        We keep your personal information only as long as we need it for legitimate business purposes and as
                        permitted by applicable law. If you decide to stop using our services, you can close your account and
                        your profile will stop being visible to other users. After your account is closed, we will delete your
                        personal information but may maintain limited information on the basis of our legitimate interest where
                        (1) we keep customer care records; (2) ensure the safety and vital interests of our users; and (3) there is
                        an outstanding or potential issue, claim or dispute that requires us to keep information.
                    </div>
                    <p className="howto-title">HOW TO CONTACT US</p>
                    <p className="last-text">
                        If you have any questions about this Privacy Policy, 
                        please contact us at: <span className="nada-mail">hello@nadaverse.com</span>
                    </p>
                </Col>
            </Row>

        </Row>
    )
}


export default PrivacyPolicy;