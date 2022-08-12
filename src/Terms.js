import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'; 
import Menu from './Menu.js';
import './Terms.css';


function Terms () {

    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:"Главная", href: './main'}, {value:"Услуги", href: './service'},  {value:"Магазин", href: './shop'},]

    return (
        <Row sm={12} className="terms-row">
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
            <Row sm={12} className="terms-wrapper">
                <Col sm={10} className="terms-content">
                <h2>Terms and Conditions of Use</h2>
                <div>
                Welcome to NADA’s Terms and Conditions of Use (these “Terms”). This is a contract between you
                    and the Society Apps (as defined further below) and we want you to know yours and our rights before
                    you use the NADA website or application (“NADA” or the “App”). Please take a few moments to read
                    these Terms before enjoying the App, because once you access, view or use the App, you are going to
                    be legally bound by these Terms (so please read them!).
                </div>
                <h2>1. RULES</h2>
                <p>
                Before you can use the App, you will need to register for an account (“Account”). In order to create an
                Account you must:
                </p>
                <ol>
                    <li>be at least 18 years old or the age of majority to legally enter into a contract under the laws of
                        your home country; and
                    </li>
                    <li>
                        be legally permitted to use the App by the laws of your home country.
                    </li>
                </ol>
                    <div>
                        Please be advised that you can delete your Account at any time (PROCESS TO DELETE see below).
                        Your Account will be deleted immediately but it may take a little longer for Your Content (defined
                        below) to be completely removed from the App. Your profile information will be treated in
                        accordance with our Privacy Policy
                    </div>
                    <p><br></br>HOW TO DELETE YOUR ACCOUNT?</p>
                    <ol>
                        <li>LOGIN TO THE APP</li>
                        <li>GO TO SETTINGS</li>
                        <li>TAP DELETE ACCOUNT</li>
                        <li>TAP CONFIRM</li>
                    </ol>
                <div>
                    We reserve the right at our sole discretion to terminate or suspend any Account, restrict access to the
                    App, or make use of any operational, technological, legal or other means available to enforce the
                    Terms (including without limitation blocking specific IP addresses), at any time without liability and
                    without the need to give you prior notice.
                </div>
                <p>
                    You may not access, tamper with, or use non-public areas of the App or our systems. Certain portions
                    of the App may not be accessible if you have not registered for an Account.
                </p>
                <h2>2. CONTENT</h2>
                <p>There are three types of content that you will be able to access on the App:</p>
                <ol>
                    <li>content that you upload and provide (“Your Content”);</li>
                    <li>content that members provide (“Member Content”); and</li>
                    <li>
                        content that the Society Apps provides 
                        (including, without limitation, database(s) and/orsoftware) (“Our Content”).
                    </li>
                </ol>
               <b>There is certain content we can’t allow on NADA:</b>
                <li>
                    contains language or imagery which could be deemed offensive or is likely to harass, upset,
                    embarrass, alarm or annoy any other person (including for example and without limitation,
                    language that could be deemed discriminatory towards an individual’s race, colour, ethnicity,
                    national origin, religion, disability, sexual orientation, gender expression, gender identity or
                    physical appearance);
                </li><br></br>
                <li>
                    is obscene, pornographic, violent or otherwise may offend human dignity (including for
                    example and without limitation, language that could be deemed discriminatory towards an
                    individual’s race, colour, ethnicity, national origin, religion, disability, sexual orientation,
                    gender expression, gender identity or physical appearance);
                </li><br></br>
                <li>
                    is abusive, insulting or threatening, discriminatory or which promotes or encourages racism,
                    sexism, hatred or bigotry (including for example and without limitation, language that could
                    be deemed discriminatory towards an individual’s race, colour, ethnicity, national origin,
                    religion, disability, sexual orientation, gender expression, gender identity or physical
                    appearance);
                </li><br></br>
                <li>
                    encourages any illegal activity including, without limitation, terrorism, inciting racial hatred
                    or the submission of which in itself constitutes committing a criminal offence;
                </li><br></br>
                <li>is defamatory or libellous;</li><br></br>
                <li>
                    relates to commercial activities (including, without limitation, sales, competitions and
                    advertising, links to other websites or premium line telephone numbers);
                </li><br></br>
                <li>involves the transmission of “junk” mail or “spam”;</li><br></br>
                <li>
                    contains any spyware, adware, viruses, corrupt files, worm programmes or other malicious
                    code designed to interrupt, damage or limit the functionality of or disrupt any software,
                    hardware, telecommunications, networks, servers or other equipment, Trojan horse or any
                    other material designed to damage, interfere with, wrongly intercept or expropriate any data
                    or personal information whether from NADA or otherwise;
                </li><br></br>
                <li>
                    itself, or the posting of which, infringes any third party’s rights (including, without limitation,
                    intellectual property rights and privacy rights);
                </li><br></br>
                <li>shows another person which was created or distributed without that person’s consent;</li><br></br>
                <li>is harmful to minors; or</li><br></br>
                <li>impersonates any other person, including falsely stating your name.</li><br></br>
                <p>Society Apps operates a zero-tolerance policy for this kind of content.</p>
                <h2>Your Content</h2>
                <div>
                    You agree that Your Content must comply with our Guidelines (Guidelines will be posted on our site
                    at www.nadaverse.com), as updated from time to time. As Your Content is unique, you are
                    responsible and liable for Your Content and will indemnify, defend, release, and hold us harmless
                    from any claims made in connection with Your Content. Sorry that was a bit of a mouthful, but you
                    are what you post!
                </div>
                <div><br></br>
                    You may not display any personal contact or banking information on your individual profile page
                    whether in relation to you or any other person (for example, names, home addresses or postcodes,
                    telephone numbers, email addresses, URLs, credit/debit card or other banking details). If you do
                    choose to reveal any personal information about yourself to other users, whether via email or
                    otherwise, it is at your own risk. We encourage you to use the same caution in disclosing details
                    about yourself to third parties online as you would under any other circumstances.
                    As NADA is a public community, Your Content will be visible to other users of the App all around the
                    world instantly - so make sure you are comfortable sharing Your Content before you post.
                </div>
                <div><br></br>
                    We will try our best to restrict unconsented use of Your Content by other members or third parties
                    outside of NADA. As such, you authorize us to act on your behalf with respect to such infringing
                    and/or unauthorized uses. This expressly includes the authority, but not the obligation, for us to
                    send takedown notices on your behalf if Your Content is taken and used by third parties outside of
                    NADA.
                </div>
                <h2>Member Content</h2>
                <p>
                    Member Content is subject to the terms and conditions of Sections 512(c) and/or 512(d) of the
                    Digital Millennium Copyright Act 1998. If you have a complaint about Member Content, please see
                    the Digital Millennium Copyright Act section below for more information.
                </p>
                <h2>Our Content</h2>
                <div>
                    Any other text, content, graphics, user interfaces, trademarks, logos, sounds, artwork, and other
                    intellectual property appearing on NADA, as well as the NADA software and database(s), are owned,
                    controlled or licensed by us and are protected by copyright, trademark, data, database rights and/or
                    other intellectual property law rights. All right, title and interest in and to Our Content remains with
                    us at all times.
                </div><br></br>
                <p>
                    We grant you a non-exclusive, limited, personal, non-transferable, revocable, license to access and
                    use Our Content, without the right to sublicense, under the following conditions:
                </p>
                <ol>
                    <li>
                        you shall not use, sell, modify, or distribute Our Content except as permitted by the
                        functionality of the App;
                    </li><br></br>
                    <li>you shall not use our name in metatags, keywords and/or hidden text;</li><br></br>
                    <li>
                        you shall not create derivative works from Our Content or scrape, disable, decompile, analyze
                        or in any way commercially exploit Our Content, in whole or in part, in any way; and
                    </li><br></br>
                    <li>you shall use Our Content for lawful purposes only.</li><br></br>
                </ol>
                <p>We reserve all other rights.</p>
                <b>No Obligation to Pre-Screen Content.</b>
                <div>
                    Since NADA is an online community, we generally try to avoid getting in the way and therefore don’t
                    assume any obligation to pre-screen any of Your Content or any Member Content. However, there
                    may be times where we need to step in, and we reserve the right to review, pre-screen, refuse and/or
                    remove any Member Content and Your Content, including content exchanged between users in
                    direct messages.
                </div>
                <h2>3. RESTRICTIONS ON THE APP</h2>
                <p>You agree to:</p>
                
                    <li>
                    comply with all applicable laws, including without limitation, privacy laws, intellectual
                    property laws, anti-spam laws, equal opportunity laws and regulatory requirements;
                    </li>
                    <li>use your real name and real age in creating your NADA account and on your profile; and</li>
                    <li>use the services in a professional manner.</li><br></br>
                
                <p>You agree that you will not:</p>
                
                    <li>
                        act in an unlawful or unprofessional manner including being dishonest, abusive or
                        discriminatory;
                    </li><br></br>
                    <li>
                        misrepresent your identity, your age, your current or previous positions, qualifications or
                        affiliations with a person or entity;
                    </li><br></br>
                    <li>disclose information that you do not have the consent to disclose;</li><br></br>
                    <li>stalk or harass any other user of the App;</li><br></br>
                    <li>create or operate a pyramid scheme, fraud or other similar practice, or;</li><br></br>
                    <li>
                        develop, support or use software, devices, scripts, robots, other types of mobile code or any
                        other means or processes (including crawlers, browser plugins and add-on or other
                        technology) to scrape or otherwise exfiltrate from NAME or its services, or otherwise copy
                        profiles and other data from the services.
                    </li><br></br>
                
                <div>
                We don’t like users misbehaving in the NADA community. You can report any abuse or complain
                about Member Content by contacting us at <span className="nada-mail">hello@nadaverse.com</span> or using the reporting function
                inside the app. We reserve the right to investigate any possible violations of these Terms, any NADA
                user’s rights, or any third party rights and we may, in our sole discretion, immediately terminate any
                user’s right to use of the App without prior notice.
                </div><br></br>
                <p>
                    We don’t control any of the things our users say or do, so you are solely responsible for your
                    interactions with other users of the App.
                </p>
                <b>
                    YOU UNDERSTAND THAT NADA DOES NOT CURRENTLY CONDUCT CRIMINAL
                    BACKGROUND CHECKS ON ITS USERS. NADA ALSO DOES NOT INQUIRE INTO THE
                    BACKGROUNDS OF ITS USERS OR ATTEMPT TO VERIFY THE STATEMENTS OF ITS
                    USERS. NADA MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE
                    CONDUCT OF ANY USERS OR THEIR COMPATIBILITY WITH ANY CURRENT OR
                    FUTURE USERS. NADA RESERVES THE RIGHT TO CONDUCT ANY CRIMINAL
                    BACKGROUND CHECK OR OTHER SCREENINGS (SUCH AS SEX OFFENDER
                    REGISTRATION SEARCHES) AT ANY TIME AND TO USE AVAILABLE PUBLIC
                    RECORDS FOR ANY PURPOSE.
                </b>
                <p className="warn1">
                    You agree to, and hereby do, release NADA and its successors from any claims, demands, losses,
                    damages, rights, and actions of any kind, including personal injuries, death and property damage,
                    that either directly or indirectly arises from your interactions with or conduct of other users of the
                    App.
                </p>
                <h2>4. PRIVACY</h2>
                <p>
                    For information about how the NADA collects, uses, and shares your personal data, please check out
                    our Privacy Policy. By using NADA, you acknowledge that we may use such data in accordance with
                    our Privacy Policy.
                </p>
                
                    <h2 className="payment-title">5. PAYMENT TERMS</h2>
                    <b>Generally.</b>
                
                <p className="nada-offer">
                    NADA may offer products and services for purchase on the App (“In-App Purchase”). If you choose
                    to make an In-App Purchase, you acknowledge and agree that additional terms, disclosed to you at
                    the point of purchase, may apply, and that such additional terms are incorporated herein by
                    reference.
                </p>
                <div>
                    You may make an In-App Purchase through the following payment methods (“Payment Method”):
                    (a) making a purchase through a third-party platform such as the Apple App Store and Google Play
                    Store (“Third Party Store”), or (b) paying with your credit card, debit card, or PayPal account, which
                    will be processed by a third-party processor. Once you have made an In-App Purchase, you authorise
                    us to charge your chosen Payment Method. If payment is not received by us from your chosen
                    Payment Method, you agree to promptly pay all amounts due upon demand by us.
                </div><br></br>
                <div>
                    <b>Subscriptions and Auto-Renewal:</b> NADA may offer some services as automatically-renewing
                    subscriptions, e.g., a one-week subscription, one-month subscription, or three-month subscription
                    (“Premium Services”).<b> IF YOU PURCHASE AN AUTOMATICALLY RENEWING
                    SUBSCRIPTION, YOUR SUBSCRIPTION WILL RENEW AT THE END OF THE PERIOD,
                    UNLESS YOU CANCEL, AT NADA ’S THEN-CURRENT PRICE FOR SUCH
                    SUBSCRIPTIONS.</b> To avoid charges for a new subscription period, you must cancel, as described
                    below, before the end of the then-current subscription period. Deleting your account or deleting the
                    application from your device does not cancel your subscription. You will be given notice of changes
                    in the pricing of the Premium Services to which you have subscribed and an opportunity to cancel. If
                    NADA changes these prices and you do not cancel your subscription, you agree that you will be
                    charged at NADA’s then-current pricing for subscription.
                </div><br></br>
                <div>
                    <b>Cancelling Subscriptions.</b> If you purchased a subscription directly from NADA, you may cancel
                    or change your Payment Method via the payment settings option under your profile. If you
                    purchased a subscription through a Third Party Store, such as the Apple App Store or the Google
                    Play Store, you will need to access your account with that Third Party Store and follow instructions to
                    change or cancel your subscription. If you cancel your subscription, you may use your subscription
                    until the end of the period you last paid for, but (i) you will not (except as set forth in the subsection
                    entitled “Refunds” below) be eligible for a prorated refund, (ii) your subscription will not be renewed
                    when that period expires and (iii) you will then no longer be able to use the Premium Services or
                    In-App Purchases enabled by your subscription.
                </div><br></br>
                <div>
                    <b>Free Trials.</b> If you sign up for a free trial and do not cancel, your trial may convert into a paid
                    subscription and your Payment Method will be charged at the then-current price for such
                    subscription. Once your free trial converts to a paid subscription, your paid subscription will
                    continue to automatically renew at the end of each period, and your Payment Method will be
                    charged, until you cancel. To avoid charges for a new subscription period, you must cancel before the
                    end of the then-current subscription period or free trial period as described above. Deleting your
                    account or deleting the application from your device does not cancel your free trial. If you have
                    signed up for a free trial on NADA through the Apple Store or Google Play Store previously, you will
                    not be eligible for another free trial and you will then be automatically signed up to a subscription
                    and charged as described in this paragraph.
                </div><br></br>
                <div><b>
                    Refunds. Generally, all charges for purchases are nonrefundable, and there are no
                    refunds or credits for partially used periods.</b><br></br><br></br>
                    For subscribers residing in Arizona, California, Connecticut, Illinois, Iowa, Minnesota, New York,
                    North Carolina, Ohio, Rhode Island, and Wisconsin, the terms below apply:
                    You may cancel your subscription, without penalty or obligation, at any time prior to midnight of the
                    third business day following the date you subscribed. In the event that you die before the end of your
                    subscription period, your estate shall be entitled to a refund of that portion of any payment you had
                    made for your subscription which is allocable to the period after your death. In the event that you
                    become disabled (such that you are unable to use NADA) before the end of your subscription period,
                    you shall be entitled to a refund of that portion of any payment you had made for your subscription
                    which is allocable to the period after your disability by providing the company notice in the same
                    manner as you request a refund as described below.<br></br><br></br>
                    To request a refund:
                    In addition to cancelling, you must request a refund to receive one. If you subscribed using your
                    Apple ID, refunds are handled by Apple, not NADA. To request a refund, go to iTunes, click on your
                    Apple ID, select “Purchase history,” find the transaction and hit “Report Problem”.
                </div><br></br>
                <b>Taxes.</b>
                <div className="payment">
                    The payments required under this Section 5 do not include any Sales Tax that may be due in
                    connection with the Premium Services provided under these Terms. If NADA determines it has a
                    legal obligation to collect a Sales Tax from you in connection with these Terms, NADA will collect
                    such Sales Tax in addition to the payments required under this Section 5. If any Premium Services,
                    or payments for any Premium Services, under these Terms are subject to any Sales Tax in any
                    jurisdiction and you have not remitted the applicable Sales Tax to NADA, you will be responsible for
                    the payment of such Sales Tax and any related penalties or interest to the relevant tax authority. As
                    used herein, “Sales Tax” means any sales or use tax and any other tax measured by sales proceeds
                    that is the functional equivalent of a sales tax where the applicable taxing jurisdiction does not
                    otherwise impose a sales or use tax.
                </div>
                <h2>6. PUSH NOTIFICATIONS;<br></br>LOCATION-BASED FEATURES</h2>
                <div>
                    We may provide you with emails, text messages, push notifications, alerts and other messages
                    related to the App and/or the NADA services, such as enhancements, offers, products, events, and
                    other promotions. After downloading the App, you will be asked to accept or deny push
                    notifications/alerts. If you deny, you will not receive any push notifications/alerts. If you accept,
                    push notifications/alerts will be automatically sent to you. If you no longer wish to receive push
                    notifications/alerts from the App, you may opt out by changing your notification settings on your
                    mobile device
                </div>
                <h2>7. DISCLAIMER</h2>
                <div>
                    THE APP, SITE, OUR CONTENT, AND MEMBER CONTENT ARE ALL PROVIDED TO YOU “AS IS”
                    AND “AS AVAILABLE” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                    INCLUDING BUT NOT LIMITED TO, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR
                    NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE DO NOT GUARANTEE
                    THE COMPATIBILITY OF ANY MATCHES.<br></br><br></br>
                    SHOULD APPLICABLE LAW NOT PERMIT THE FOREGOING EXCLUSION OF EXPRESS OR
                    IMPLIED WARRANTIES, THEN WE GRANT THE MINIMUM EXPRESS OR IMPLIED
                    WARRANTY REQUIRED BY APPLICABLE LAW. NO ADVICE OR INFORMATION, WHETHER
                    ORAL OR WRITTEN, SHALL CREATE ANY WARRANTY, REPRESENTATION OR GUARANTEE
                    NOT EXPRESSLY STATED IN THIS SECTION.<br></br><br></br>
                    ADDITIONALLY, WE DO NOT MAKE ANY WARRANTIES THAT THE APP OR SITE WILL BE
                    UNINTERRUPTED, SECURE OR ERROR FREE OR THAT YOUR USE OF THE APP OR SITE WILL
                    MEET YOUR EXPECTATIONS, OR THAT THE APP, SITE, OUR CONTENT, ANY MEMBER
                    CONTENT, OR ANY PORTION THEREOF, IS CORRECT, ACCURATE, OR RELIABLE. YOUR USE
                    OF THE APP OR SITE IS AT YOUR OWN RISK. YOU ARE SOLELY RESPONSIBLE FOR YOUR
                    INTERACTIONS WITH OTHER MEMBERS. SOCIETY APPS IS NOT RESPONSIBLE FOR THE
                    CONDUCT OF ANY USER. SOCIETY APPS DOES NOT CONDUCT CRIMINAL BACKGROUND
                    CHECKS ON ITS MEMBERS.
                </div>
                <h2>8. LIMITATION OF LIABILITY</h2>
                <div>
                    NEITHER US NOR ANY OWNER WILL BE LIABLE FOR ANY DAMAGES, DIRECT, INDIRECT,
                    INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE, INCLUDING, WITHOUT
                    LIMITATION, LOSS OF DATA, INCOME, PROFIT OR GOODWILL, LOSS OF OR DAMAGE TO
                    PROPERTY AND CLAIMS OF THIRD PARTIES ARISING OUT OF YOUR ACCESS TO OR USE OF
                    THE APP, SITE, OUR CONTENT, OR ANY MEMBER CONTENT, HOWEVER CAUSED, WHETHER
                    BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), PROPRIETARY
                    RIGHTS INFRINGEMENT, PRODUCT LIABILITY OR OTHERWISE.<br></br><br></br>
                    THE FOREGOING SHALL APPLY EVEN IF WE WERE ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES. IF YOU BECOME DISSATISFIED IN ANY WAY WITH THE APP OR SITE, YOUR SOLE
                    AND EXCLUSIVE REMEDY IS TO STOP YOUR USE OF THE APP AND SITE.<br></br><br></br>
                    YOU HEREBY WAIVE ANY AND ALL CLAIMS ARISING OUT OF YOUR USE OF THE APP OR
                    SITE. BECAUSE SOME STATES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES
                    OR THE EXCLUSION OR LIMITATION OF CERTAIN TYPES OF DAMAGES, THESE PROVISIONS
                    MAY NOT APPLY TO YOU. IF ANY PORTION OF THIS LIMITATION ON LIABILITY IS FOUND
                    TO BE INVALID OR UNENFORCEABLE FOR ANY REASON, THEN OUR AGGREGATE LIABILITY
                    SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).<br></br><br></br>
                    THE LIMITATION OF LIABILITY HEREIN IS A FUNDAMENTAL ELEMENT OF THE BASIS OF
                    THE BARGAIN AND REFLECTS A FAIR ALLOCATION OF RISK. THE APP AND SITE WOULD
                    NOT BE PROVIDED WITHOUT SUCH LIMITATIONS AND YOU AGREE THAT THE
                    LIMITATIONS AND EXCLUSIONS OF LIABILITY, DISCLAIMERS AND EXCLUSIVE REMEDIES
                    SPECIFIED HEREIN WILL SURVIVE EVEN IF FOUND TO HAVE FAILED IN THEIR ESSENTIAL
                    PURPOSE. THE FOREGOING DOES NOT APPLY TO LIABILITY ARISING FROM ANY FRAUD OR
                    FRAUDULENT MISREPRESENTATIONS, OR ANY OTHER LIABILITY THAT CANNOT BE
                    LIMITED BY APPLICABLE LAW.
                </div>
                <h2>9. INDEMNITY</h2>
                <div>
                    All the actions you make and information you post on NADA remain your responsibility. Therefore,
                    you agree to indemnify, defend, release, and hold us, and our partners, licensors, affiliates,
                    contractors, officers, directors, employees, representatives and agents, harmless, from and against
                    any third party claims, damages (actual and/or consequential), actions, proceedings, demands,
                    losses, liabilities, costs and expenses (including reasonable legal fees) suffered or reasonably
                    incurred by us arising as a result of, or in connection with:
                </div>
                <ol>
                    <li>any negligent acts, omissions or wilful misconduct by you;</li><br></br>
                    <li>your access to and use of the App;</li><br></br>
                    <li>the uploading or submission of Content to the App by you;</li><br></br>
                    <li>any breach of these Terms by you; and/or</li><br></br>
                    <li>your violation of any law or of any rights of any third party.</li>
                </ol>
                <div>
                    We retain the exclusive right to settle, compromise and pay any and all claims or causes of action
                    which are brought against us without your prior consent. If we ask, you will co-operate fully and
                    reasonably as required by us in the defence of any relevant claim.<br></br><br></br>
                    The foregoing provision does not require you to indemnify Society Apps for any unconscionable
                    commercial practice or any fraud, deception, false promise, misrepresentation or concealment,
                    suppression or omission of any material fact in connection with the App.
                </div>
                <h2>10. PROCEDURE FOR MAKING CLAIMS<br></br> OF COPYRIGHT INFRINGEMENT</h2>
                <p>
                    If you believe any content on NADA infringes the copyright in a work that you own, please submit a
                    notification alleging such infringement (“DMCA Takedown Notice”) to Society App’s Copyright
                    Agent. The Takedown Notice must include the following:
                </p>
                <ol>
                    <li>
                        A physical or electronic signature of a person authorised to act on behalf of the owner of an
                        exclusive right that is allegedly infringed;
                    </li><br></br>
                    <li>
                        Identification of the copyrighted work claimed to have been infringed, or, if multiple
                        copyrighted works at a single online site are covered by a single notification, a representative
                        list of such works;
                    </li><br></br>
                    <li>
                        Identification of the material claimed to be infringing or to be the subject of infringing
                        activity and that is to be removed or access disabled and information reasonably sufficient to
                        permit the service provider to locate the material;
                    </li><br></br>
                    <li>
                        Information reasonably sufficient to permit the service provider to contact you, such as an
                        address, telephone number, and, if available, an electronic mail;
                    </li>
                    <li>
                        A statement that you have a good faith belief that use of the material in the manner
                        complained of is not authorised by the copyright owner, its agent, or the law; and
                    </li><br></br>
                    <li>
                        A statement that, under penalty of perjury, the information in the notification is accurate and
                        you are authorised to act on behalf of the owner of the exclusive right that is allegedly
                        infringed.
                    </li><br></br>
                </ol>
                <p>Takedown Notices should be sent to: <span className="nada-mail">hello@nadaverse.com</span></p>
                <h2>11. TERMINATION AND REMEDIES</h2>
                <div>
                    These Terms commence on the date you accept them (as described in the preamble) and continue
                    until terminated in accordance with the terms herein.
                    If you want to terminate these Terms, you may do so by (a) notifying Society Apps at any time, and
                    (b) closing your Account. Your notice should be sent to Society Apps address below. Please note that
                    if you terminate these Terms, your subscription will continue until the end of the subscription period
                    for which applicable fees have been paid, and you will not be entitled to a refund except as stated in
                    Section 5.<br></br><br></br>
                    Society Apps may terminate or suspend these Terms, including your Account, if you breach these
                    Terms or if Society Apps is required to do so by applicable law. You agree that all terminations for
                    cause shall be made in Society App’s sole discretion and that Society Apps shall not be liable to you
                    or any third party for any termination of your Account.<br></br><br></br>
                    In the event that Society Apps determines, in its sole discretion, that you have breached any portion
                    of these Terms, or have otherwise demonstrated conducted inappropriate for the App, Society Apps
                    reserves the right to: (a) warn you via email (to any email addresses you have provided to Society
                    Apps) that you have violated the Terms; (b) delete your User Content; (c) discontinue your Account;
                    (d) discontinue your subscription(s); (e) notify and/or send your User Content to and/or fully
                    cooperate with the proper law enforcement authorities for further action; and/or (f) pursue to any
                    other action which Society Apps deems to be appropriate.<br></br><br></br>
                    Termination of these Terms or your Account includes the removal of access to your Account, and all
                    related information and content associated with or inside your Account.<br></br><br></br>
                    All provisions of these Terms, which by their nature should survive, shall survive termination of
                    these Terms, including, without limitation, the Arbitration Agreement, ownership provisions,
                    warranty disclaimers and limitation of liability.
                </div>
                <h2>12. MISC</h2>
                <div>
                    These Terms, which we may amend from time to time, constitute the entire agreement between you
                    and the Society Apps. The Terms supersede all previous agreements, representations and
                    arrangements between us (written or oral), excluding the Privacy Policy. Nothing in this clause shall
                    limit or exclude any liability for fraudulent misrepresentation.<br></br><br></br>
                    As NADA grows, we might have to make changes to these Terms so we reserve the right to modify,
                    amend or change the Terms at any time (a “Change”). If we do this then the Changes will be posted
                    on this page and we will indicate the Effective Date of the updates at the bottom of the Terms. In
                    certain circumstances, we may send an email to you notifying you of a Change. It’s also possible that
                    we might ask you to agree to our Changes, but we’ll let you know. You should regularly check this
                    page for notice of any Changes – we want our users to be as informed as possible.<br></br><br></br>
                    If, for any reason, any of the Terms are declared illegal, invalid or otherwise unenforceable by a court
                    of a competent jurisdiction, then to the extent that term is illegal, invalid or unenforceable, it shall be
                    severed and deleted from the Terms and the remainder of the Terms shall survive, remain in full
                    force and effect and continue to be binding and enforceable.
                </div>
                <h2>13. GOVERNING LAW AND FORUM</h2>
                <p>
                    Any claims arising from or related to your relationship with Society Apps, and these Terms are
                    governed and interpreted by the laws of Commonwealth of Pennsylvania (?).
                </p>
                <h2>14. NADA</h2>
                <p>
                    The Terms constitute a binding legal agreement between you as user (“you”) and the NADA (“we” or
                    “us”), a Delaware limited liability corporation (?).
                </p>
                <b>Effective date</b><br></br><br></br>
                <p>The Terms were last updated on: (6/22/22)</p>
                </Col>
            </Row>
        </Row>
    )
}

export default Terms;