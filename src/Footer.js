import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';


function Footer () {

	return(
		<Container className="mt-5">		
		<Row className="top-footer-content">  
			<Col sm={4} className="legal-information-box text-left">
			<p className="head-footer legal-information mb-3">legal information</p>
			<ul className="legal-information-content list-unstyled text-small">
				<LinkContainer className="terms_link" to="/Terms">
                                <Nav.Link>Terms</Nav.Link>
                </LinkContainer>	
				<LinkContainer className="policy_link" to="/PrivacyPolicy">
                                <Nav.Link>Privacy Policy</Nav.Link>
                </LinkContainer>	
			  </ul>
			</Col>
			<Col sm={2} className="career-box text-left">
			<p className="head-footer career-title mb-3">Career</p>
			<ul className="career-content list-unstyled text-small">
				<li><a className="text-footer" href="https://www.societyapps.com/career/">Career</a></li>
				<li><a className="text-footer" href="https://www.societyapps.com/blog/">Blog</a></li>
			  </ul>
			</Col>
			<Col sm={3} className="sociala-footer text-left">
			<p className="head-footer sociala-footer-title mb-3">socials</p> 
			<div className="list-unstyled-sociala-footer text-small">
				<a target="blank" href="https://www.instagram.com/not.another.dating.app/" className="sociala-footer-bts">	
					<img className="sociala-img" alt="sociala-img" src="./a/instagram.svg"></img>
				</a>
				<a target="blank" href="https://www.facebook.com/NotAnotherDatingApp/" className="sociala-footer-bts">	
					<img className="sociala-img" alt="sociala-img" src="./a/facebook.svg"></img>	
				</a>
				<a target="blank" href="https://twitter.com/dating_another" className="sociala-footer-bts">	
					<img className="sociala-img" alt="sociala-img" src="./a/twitter.svg"></img>	
				</a>
			  </div> 
			</Col>
			<Col sm={3} className="faq-box text-left">
			<ul className="list-unstyled text-small text-center">	
				<li><a className="text-footer" href="https://www.societyapps.com/contact-us/">Contact us</a></li>		
			  </ul>
			</Col>
		</Row>
		<Row sm={12}>
			<Col sm={12}>
				<div className="footer-line"></div>
			</Col>
		</Row>
		<Row sm={12} className="download-section">
			<Col sm={4} className="download-app-box">
				<p className="download-app text-left">download the app</p>
			</Col>
			<Col className="app-store-box" sm={6}>
				<button className="btn-app-store">
					<img  alt="app-store" src="./a/Group225.svg"/>
				</button>
			</Col>
		</Row>
		<Row sm={12}>
			<Col sm={12}>
				<div className="footer-line"></div>
			</Col>
		</Row>
		<Row sm={12}>
			<Col sm={6}>
				<h1 className="logo-footer text-left d-flex">
				  <a className="logo-text  text-decoration-none" href="/">
					<img className="logo-N" alt="logo-N" src="./a/logo_N.svg" />
					<img className="logo-i" alt="logo-i" src="./a/logo.svg" />NADA</a>
				</h1>
			</Col>
			<Col sm={6} className="copyright-box">
				<p className="copyright text-right">&copy; 2022 NADA All rights reserved</p>
			</Col>
		</Row>
	  </Container>
	
	)

 }


export default Footer;