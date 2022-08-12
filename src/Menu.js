import React from 'react';
import './Menu.css';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'; 
import Col from 'react-bootstrap/Col';


const Menu = ({header, items, active, setActive}) => {
	/*
	document.getElementByclassName('burger-btn').onclick = function() {
		document.getElementByclassName('midline').hidden = true;
	  }
	  */
	return (
		<div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}> 
			<div className="menu__content" onClick={e => e.stopPropagation()}>
			<div className="modile-gradient1"></div>
			<div className="modile-gradient2"></div>
			<div className="modile-gradient3"></div>
				<div className="menu__header">
					<h1 className="logo">
						<a className="logo-text text-decoration-none" href="/">
						<img className="logo-N" alt="logo-N" src="./a/logo_N.svg" />
						<img className="logo-i" alt="logo-i" src="./a/logo.svg" />NADA</a>   
					</h1>
				</div>
				<ul href="/" className="menu__links">
					 <nav  className="burger-links">
					<Nav.Link href="/">Features</Nav.Link>
					{/*
					<Nav.Link href="#nft">NFT Collection</Nav.Link>
					*/}
					<LinkContainer to="/road-map">
					<Nav.Link >Road Map</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/who-we-are">
					<Nav.Link >Who We Are</Nav.Link>
					</LinkContainer>   
					<Nav.Link target="blank" href="https://discord.gg/q4b4CBWTы">Join Discord</Nav.Link>				
			  </nav>
				</ul>
				
				<Col sm={2} className="mobile-sociala-section p-0">
				<a target="blank" href="https://www.instagram.com/not.another.dating.app/" className="mobile-sociala">	
					<img className="sociala-img" alt="sociala-img" src="./a/instagram.svg"></img>
				</a>
				<a target="blank" href="https://www.facebook.com/NotAnotherDatingApp/" className="mobile-sociala">	
					<img className="sociala-img" alt="sociala-img" src="./a/facebook.svg"></img>	
				</a>
				<a target="blank" href="https://twitter.com/dating_another" className="mobile-sociala">	
					<img className="sociala-img" alt="sociala-img" src="./a/twitter.svg"></img>	
				</a>
			</Col>
			</div>
			
			
		</div>
	
	);
	
}

export default Menu;