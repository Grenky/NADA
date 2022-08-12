import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container'; 
import Menu from './Menu.js';
import './who-we-are.css';

function Who () {

	const [menuActive, setMenuActive] = useState(false)
	const items = [{value:"Главная", href: './main'}, {value:"Услуги", href: './service'},  {value:"Магазин", href: './shop'},]

	return (
		

	<Row className="who-wrapper">
			<Navbar  id="header" className="fixed-top"> 
			<nav className="burger-main">
					<div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
						<span/>
					</div>	
				</nav>
				<Menu active={menuActive} setActive={setMenuActive} header={"Бургер меню"} items={items}/>
				<Container>
			<Navbar.Toggle  aria-controls="basic-navbar-nav" />
				<Navbar.Collapse  id="basic-navbar-nav" className="d-flex justify-content-between">
				  <nav className="me-auto">
					<h1 className="logo">
					  <a className="logo-text text-decoration-none" href="/">
						<img className="logo-N" alt="logo-N"  src="./a/logo_N.svg" />
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
					<a target="blank" href="https://www.instagram.com/not.another.dating.app/https://www.instagram.com/not.another.dating.app/" className="sociala">	
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



	
				<Col sm={12}>
					<h1 className="who-title">who we are</h1>
				</Col>	
			<Row sm={12} className="who-text">
				<Col sm={4}>
					<p className="who-text-title">Our Mission</p>
					<p className="who-text-main">NADA’s mission is to intentionally bring people together ‘offline’. 
					We aim to skip the small talk and get straight to the experience.</p>
				</Col>
				<Col  sm={4}>
					<p  className="who-text-title">Our Team</p>
					<p className="who-text-main">Our team is a diverse pool of perspectives from all over the world.
					We’ve chosen key players from all walks of life adding something integral to create an experience that will change new age relationships.</p>
				</Col>
			</Row>
			<Col>
				<Col sm={12} className="who-img-box">
					<div className="earl-card">
						<img className="Eral-img" alt="Erl-img-img" src="./a/Earl.png"></img>
						<img className="earl-bio" alt="Erl-img-img" src="./a/Earl-bio.png"></img>	
					</div>
					<div className="ali-card">
						<img className="Ali-img" alt="Erl-img-img" src="./a/Ali.png"></img>
						<img className="ali-bio" alt="Erl-img-img" src="./a/Ali-bio.png"></img>
					</div>
					<div className="artem-card">
						<img className="Artem-img" alt="Erl-img-img" src="./a/Artem.png"></img>
						<img className="artem-bio" alt="Erl-img-img" src="./a/Artem-bio.png"></img>
					</div>
					<div className="serheii-card">
						<img className="Serheii-img" alt="Erl-img-img" src="./a/Serhii.png"></img>
						<img className="serheii-bio" alt="Erl-img-img" src="./a/Serhii-bio.png"></img>
					</div>
					<div className="abi-card">
						<img className="Abi-img" alt="Erl-img-img" src="./a/Abi.png"></img>
						<img className="abi-bio" alt="Erl-img-img" src="./a/Abi-bio.png"></img>
					</div>
					
					<div className="angela-card">
						<img className="Angela-img" alt="Erl-img-img" src="./a/Angela.png"></img>
						<img className="angela-bio" alt="Erl-img-img" src="./a/Angela-bio.png"></img>
					</div>
					
					
					<div className="asia-card">
						<img className="Asia-img" alt="Erl-img-img" src="./a/Asia.png"></img>
						<img className="asia-bio" alt="Erl-img-img" src="./a/Asia-bio.png"></img>
					</div>
					<div className="veronica-card">
						<img className="Veronica-img" alt="Erl-img-img" src="./a/Veronica.png"></img>
						<img className="veronica-bio" alt="Erl-img-img" src="./a/Veronica-bio.png"></img>
					</div>
					<div className="irina-card">
						<img className="Irina-img" alt="Erl-img-img" src="./a/Irina.png"></img>
						<img className="irina-bio" alt="Erl-img-img" src="./a/Irina-bio.png"></img>
					</div>
					<div className="dmitry-card">
						<img className="Dmitry-img" alt="Erl-img-img" src="./a/Dmitry.png"></img>
						<img className="dmitry-bio" alt="Erl-img-img" src="./a/Dmitry-bio.png"></img>
					</div>
				</Col>
			</Col>
			<Col sm={12} className="who-joind-box">
				<Col sm={12}>
					<h1 className="joind-title">Join Our Discord</h1>
				</Col>
				<Col sm={12} className="joind-text-box d-flex justify-content-center">
					<Col sm={6} className="">
						<p  className="joind-text">Get news and development updates as soon as they drop!
						Chat with other users on the NADAverse to stay in the know.
						Become a member of the NADAverse community!</p>
					</Col>
				</Col>
				<Col sm={12} className="joined-btn-box d-flex justify-content-center">
					<form action="https://discord.gg/q4b4CBWT" target="_blank">
						<button className="joind-btn">Join the Conversation</button>
					</form>
				</Col>   
			</Col>
		</Row>
	)
}
export default Who;