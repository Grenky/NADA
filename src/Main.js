import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*
import Slider from 'react-slick';
*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*
import  { settings } from "./Slider.js";
*/
import Timer from "./Timer.js";
import "./Style.css";
import './Slider.css';


function Main () {
	
	return(
	
		<div className="row">
			 <div className="col-sm-12 main-head elevated-title">Elevated Features</div>
			<Row className="main-content1 w-100">	
				<Col sm={4} className="main-content1-img ">
					<img className="img-phone" alt="img-phone" src="./a/image7.png"/>
					<button className="main-content1-img-btn">Create a date</button>
				</Col>
				<Col sm={4} className="main-content1-text d-flex align-items-center">
					<Row className="main-content1-text-container mb-5">
						<Col sm={12} className="design_a_date-box">
							<p className="m-10 main-head-text text-left design_a_date">Design a date</p>
						</Col>
						<Col sm={12} className="make_it_a_vibe d-flex justify-content-flex-start">
							<img  className="main-content1-text-img" alt="main-content1-text-img" src="./a/make_it_a_vibe.svg"/>
						</Col>
						<Col sm={12}>
							<p className="m-10 main-desc-text text-left">Use photos and a description to design a date you’ve been feening for – simple or extravagant, YOU choose! </p>
						</Col>
					</Row>
				</Col>		
				 
				<img className="mobile-vector1" alt="mobile-vector1" src="./a/mobile-vector1.svg" />  	
			</Row>
			
			<Row className="main-content2 w-100">				
				<Col sm={6} className="main-content2-text-box d-flex align-items-center">
					<Row className="main-content2-text">
						<Col sm={8} className="descover_a_date-box">
							<p className="m-10 main-head-text text-left descover_a_date">Discover a date</p>
						</Col>
						<Col sm={8} className="make_it_a_vibe d-flex justify-content-flex-start">
							<img  className="main-content1-text-img" alt="main-content1-text-img" src="./a/check_the_ vibes.svg"/>
						</Col>
						<Col sm={8} className="main-content2-text-main-box">  
							<p className="main-content2-text m-10 main-desc-text text-left">Scroll the discover feed and find a dating experience that fits your vibe, then let the magic happen. </p>
						</Col>
					</Row>
				</Col>
				<Col sm={6} className="box-guy p-0 text-right">
					<img className="img-guy" alt="img-guy" src="./a/image18.png"/>
				</Col>
				<div className="content2-gradient"></div> 
			</Row>
			
			<Row className="main-content3 w-100">
				<Col sm={4} className="section-phone-box">
					<img className="main-content3-img-phone" alt="main-content3-img-phone" src="./a/phone2.png" />
				</Col>
				<Col sm={4} className="main-content3-text d-flex align-items-center">
					<Row className="main-content3-text">
						<Col sm={12} className="build_a_profile-box">
							<p className="build_a_profile m-10 main-head-text text-left">Build a Profile</p>
						</Col>
						<Col sm={12}>
							<img  className="main-content1-text-img" alt="main-content1-text-img" src="./a/show_them.svg"/>
						</Col>
						<Col sm={12}>
							<p className="m-10 main-desc-text text-left">Sport your best photos, reveal your top interests, and let daters know a little about who you are. </p>
						</Col>
					</Row> 
				</Col>
				<div className="content3-gradient"></div>  
				<div className="content3-gradient2"></div>
				<div className="content3-gradient3"></div>
				<div className="content3-gradient4"></div> 				
				<img className="mobile-vector2" alt="mobile-vector2" src="./a/mobile-vector2.svg" />
			</Row>
			
			<Row className="main-content4 w-100 ">
				<Col sm={4} className="main-content4-text d-flex align-items-center">
					<Row className="go-date"> 
						<Col sm={12}> 
							<p className="m-10 main-head-text text-center">Go on a date</p>
						</Col>
						<Col sm={12}> 
							<img  className="main-content1-text-img2" alt="main-content1-text-img2" src="./a/show_up.svg"/>
						</Col>
						<Col sm={12}>
							<p className="m-10 main-desc-text text-center">Confirm the date details, get your best outfit together, grab some Altoids, and experience a date to remember. </p>
						</Col>
					</Row>
				</Col>
				<Col sm={6} className="img-girl-guy-box p-0 text-right">  
						<img className="img-girl-guy" alt="img-girl-guy" src="./a/image30.png"/> 
				</Col>
				<div className="content4-gradient"></div>
				<div className="content4-gradient2"></div>
				<div className="content4-gradient3"></div>
				<div className="content4-gradient4"></div>  
			</Row>
			
			<Row className="main-content5  w-100">
				<Col sm={6}>
					<img className="main-content5-img-phone" alt="img-phone" src="./a/iPhone13.png"/>
					<div className="main-content5-img-phone-text-box">
						<p className="main-content5-img-phone-text-box-text col-sm-offset-1 col-sm-10">Let's get to dating!</p>
						<button className="main-content5-img-phone-text-box-btn1">I changed my mind</button>
						<button className="main-content5-img-phone-text-box-btn2">Confirm date</button>
					</div>
				</Col>
				<img className="mobile-vector3" alt="mobile-vector3" src="./a/mobile-vector3.svg" />
			</Row>
			
			<Row className="main-content6 w-100">
				<Col sm={5} className="main-content6-text d-flex align-items-center">
					<Row>
						<Col sm={12} className="safe-dating-box">
							<p className="safe-dating m-10 main-head-text text-left">Safe Dating</p>
						</Col>
						<Col sm={12}>
							<p className="last-phone-box-text m-10 main-desc-text text-left">We have made it a priority to keep our daters feeling safe and comfortable with an adept verification process and our unique emergency contact check-in system.</p>
						</Col>	
					</Row>
				</Col>
					<Col sm={3} className="last-phone-box p-0">
						<img className="main-content6-img-phone" alt="img-phone" src="./a/iPhone13.png"/>
					</Col>
				<img className="mobile-vector4" alt="mobile-vector4" src="./a/mobile-vector4.svg" />
			</Row>
			
			<Row className="footer-section mt-5">
					<Col className="footer-section-text d-flex align-items-center justify-content-center">
						<Row className="footer-section-text-box">
						<Col sm={12}>
							<p className="footer-section-text1 m-10">NADAverse Dating</p>
						</Col>
						<Col sm={12}>
							<p className="footer-section-text2 m-10">Coming soon...</p>
						</Col>
					</Row>			
					</Col>
			</Row>
			{/*<Row className="slider-main">
				<Col sm={12}> 
					<h1 id="nft" className="nft-collection-title">NFT COLLECTION</h1>
				</Col>
				<Col sm={12} className="slider-main-wrapper d-flex"> 
					<Col sm={6} className="slider-text-wrapper">
						<p className="slider-main-text">Get exclusive deals and access to features in the NADA app with a NADA NFT</p>
						<button className="slider-main-btn">Buy Our Exclusive NFT Collection</button>
					</Col>
					
					<Col sm={6} className="slider-wrapper">  
						
						<Slider {...settings}>
							<Row>
								<Col sm={12}>
									 <div className="slider-content">
										<Col sm={12}>
											<img className="slider-content-img" src="./a/slider-img.png" />
										</Col>
										<Col sm={12} className="p-0 ml-3">	
												<div className="slider-content-main justify-content-space-between">
													<Col sm={6} className="d-flex align-items-center h-100">
														<div  className="slider-content-text">
															<p>Icon Man in Glasses</p>
														</div>
													</Col>
													<Col sm={6} className="slider-content-like-main d-flex justify-content-flex-end align-items-center h-100">
														<div  className="slider-content-like">
															<img className="slider-like" src="./a/slider-like.png" />
															<p>79</p>
														</div>
													</Col>
												</div>
										</Col>	
										
									</div>
								</Col>  
							</Row>
							<Row>
								<Col sm={12}>
								  <div className="slider-content">
									<Col sm={12}>
										<img className="slider-content-img" src="//a/slider-img.png" />
									</Col>
									<Col sm={12} className="p-0 ml-3">
										<div className="slider-content-main">
											<Col sm={6} className="d-flex align-items-center h-100">
													<div  className="slider-content-text">
														<p>Icon Man in Glasses</p>
													</div>
												</Col>
												<Col sm={6} className="slider-content-like-main d-flex justify-content-flex-end align-items-center h-100">
													<div  className="slider-content-like">
														<img className="slider-like" src="//a/slider-like.png" />
														<p>79</p>
													</div>
												</Col>
										</div>
									</Col>
								   </div>
								 </Col>
							</Row>
							<Row>
								<Col sm={12}>
								  <div className="slider-content">
									<Col sm={12}>
										<img className="slider-content-img" src="//a/slider-img.png" />
									</Col>
									<Col sm={12} className="p-0 ml-3">
										<div className="slider-content-main">
											<Col sm={6} className="d-flex align-items-center h-100">
													<div  className="slider-content-text">
														<p>Icon Man in Glasses</p>
													</div>
												</Col>
												<Col sm={6} className="slider-content-like-main d-flex justify-content-flex-end align-items-center h-100">
													<div  className="slider-content-like">
														<img className="slider-like" src="//a/slider-like.png" />
														<p>79</p>
													</div>
												</Col>
										</div>
									</Col>
								   </div>
								 </Col>
							</Row>
						</Slider>
	  
					</Col>
				</Col>
			</Row>
			*/}
			<Row className="before-footer-section">	
				<Col sm={4}> 
				 <p className="before-footer-text">We put our values in action</p>
				</Col>  
				<Col sm={12}>
				<Timer/>
				</Col>					
			</Row>
			<div className="flash"></div>
			<div className="flash2"></div>
			<div className="flash3"></div>
			<div className="flash4"></div>
			<div className="flash5"></div>
			<div className="flash6"></div>
			<div className="flash7"></div>
			<div className="flash8"></div>
			<div className="flash9"></div>
			<div className="flash10"></div>
			<div className="flash11"></div>
			<div className="flash12"></div>
			<div className="flash13"></div>
			<div className="flash14"></div>
			<img className="main-vector" alt="main-vector" src="./a/main-vector.svg" />
		</div>
	
	)

}


export default Main;