import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'; 
import Menu from './Menu.js';
import './road-map.css';

function Roadmap () {

	const [menuActive, setMenuActive] = useState(false)
   const items = [{value:"Главная", href: './main'}, {value:"Услуги", href: './service'},  {value:"Магазин", href: './shop'},]
  

	return (
	<Row className="road-row">
	
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
		
		<Row className="road-wrapper">
			<Col sm={12}>
				<h1 className="road-titile">Roadmap</h1>
			</Col>
			<Col sm={12} className="road-content d-flex justify-content-center">
				<Col sm={2} className="date-box">
					<p className="road-date1">APRIL 2022</p>
					<p className="road-date2">MAY 2022</p>
					<p className="road-date3">MAY 2022</p>
					<p className="road-date4">JULY 2022</p>
					<p className="road-date5">AUGUST 2022</p>
					<p className="road-date6">NOVEMBER 2022</p>
					<p className="road-date7">FEBRUARY 2023</p>
					<p className="road-date8">FEBRUARY 2023</p>
				</Col>
				<Col sm={1} className="road-line-box"> 
					<div className="road-line1"></div>
					<div className="road-line2"></div>
					<div className="point1"></div>
					<div className="point2"></div>
					<div className="point3"></div>
					<div className="point4"></div>
					<div className="point5"></div>
					<div className="point6"></div>
					<div className="point7"></div>
					<div className="point8"></div>
					<div className="point9"></div>
				</Col>
				<Col sm={5} className="road-main-cotent" >
					<Col sm={12} className="road-main-cotent-box1">
							<p className="road-date1-modile">April 2022</p>
						<Col className="road-content-title-box">
							<p className="road-content-title">Milestone 1</p>
							<img className="road-content-img" alt="road-content-img" src="./a/done.png"/>				
						</Col>
						<h2 className="road-content-title2">Launch Website </h2>
						<p className="road-content-text">NADA introduces access to our exclusive dating community, elevated features, and NFT collection.</p>
					</Col>
					<Col sm={12} className="road-main-cotent-box2">
							<p className="road-date2-modile">may 2022</p>
						<Col className="road-content-title-box2">
							<p className="road-content-title">Milestone 2</p>
							<img className="road-content-img" alt="road-content-img" src="./a/done.png"/>				
						</Col>
						<h2 className="road-content-title2">Launch NADA NFT Collection </h2>
						<p className="road-content-text">Become an official NADA NFT holder where you become a part of an exclusive dating community. 
						NFT holders are celebrated by providing them access to premium features and select events. 
						Join our discord to be a part of the community conversation!</p>
					</Col>
					<Col sm={12} className="road-main-cotent-box3">
							<p className="road-date2-modile">may 2022</p>
						<Col className="road-content-title-box3">
							<p className="road-content-title">Milestone 3</p>
							<img className="road-content-img" alt="road-content-img" src="./a/done.png"/>				
						</Col>
						<h2 className="road-content-title2">NADA Beta-launch in Philly and LA </h2>
						<p className="road-content-text">Qualified users get hands-on exposure to the NADA app where they can begin their first-class dating experience before it expands to the masses!</p>
					</Col>
					<Col sm={12} className="road-main-cotent-box4">
							<p className="road-date4-modile">JULY 2022</p>
						<Col className="road-content-title-box4">	
							<p className="road-content-title">Milestone 4</p>			
						</Col>
						<h2 className="road-content-title2">NADA Pre-Launch in Tri-State Area</h2>
						<p className="road-content-text">Welcome Tri-State area to NADA!</p>
					</Col>
					<Col sm={12} className="road-main-cotent-box5">
							<p className="road-date5-modile">AUGUST 2022</p>
						<Col className="road-content-title-box5">	
							<p className="road-content-title">Milestone 5</p>			
						</Col>
						<h2 className="road-content-title2">NADA Pre-Launch in Miami</h2>
						<p className="road-content-text">Welcome Miami to NADA!</p>
					</Col>
					<Col sm={12} className="road-main-cotent-box6">
							<p className="road-date6-modile">NOVEMBER 2022</p>
						<Col className="road-content-title-box6">
							<p className="road-content-title">Milestone 6</p>			
						</Col>
						<h2 className="road-content-title2">Development Begins on the NADAverse </h2>
						<p className="road-content-text">We start development on the first virtual reality dating universe (NADAverse) meant to bring users closer together online and in real life.
						Our goal is to connect our NFT characters to the NADAverse.
						When this will be available, our holders will be able to transfer the features of their NFTs to this online world!</p>
					</Col>
					<Col sm={12} className="road-main-cotent-box7">
							<p className="road-date7-modile">FEBRUARY 2023</p>
						<Col className="road-content-title-box7">			
							<p className="road-content-title">Milestone 7</p>			
						</Col>
						<h2 className="road-content-title2">Official Launch of NADA</h2>
						<p className="road-content-text">Access to NADA is granted to ALL qualified users across the country!</p>
					</Col>
					<Col sm={12} className="road-main-cotent-box8">
							<p className="road-date8-modile">FEBRUARY 2023</p>
						<Col className="road-content-title-box8">				
							<p className="road-content-title">Milestone 8</p>			
						</Col>
						<h2 className="road-content-title2">NADAverse Dating Beta-Launch</h2>
						<p className="road-content-text">The NADAverse is a dating universe created for users to connect even if they were across the world.
						Have dinner in paris on the eiffel tower, go skiing on the swiss alps, get in the ring and go for a few rounds. 
						Any date idea can be imagined in the Nadaverse!</p>
					</Col>
				</Col>
			</Col>
		</Row>
	</Row>
	
	)
}
export default Roadmap;