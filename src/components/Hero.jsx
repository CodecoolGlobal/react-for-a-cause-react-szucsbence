import React from 'react';
import { useEffect, useRef } from 'react';


function Hero(props) {
	const heroRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	
	const HandleClickAbout = () => {
		const memberId = document.getElementById("member")
		const offset = memberId.getBoundingClientRect()
		window.scrollTo({top: offset.top, behavior: "smooth"})
		}

	const HandleClickContact = () => {
			const memberId = document.getElementById("contact")
			const offset = memberId.getBoundingClientRect()
			window.scrollTo({top: offset.top, behavior: "smooth"})
			}

	useEffect(() => {
	let timeOut = setTimeout(() => {
	  ShowHero()
	}, 12000);

	return () => clearInterval(timeOut.current);
	});

	function ShowHero(){
		let hero = heroRef.current;
		let about = aboutRef.current;
		let contact = contactRef.current;
		
		hero.classList.add("trans")
		about.classList.add("trans")
		contact.classList.add("trans")

		document.getElementsByTagName("body")[0].classList.remove("overflow-hidden")
	}


	let content = 
	    <div className="row m-0 p-0 hero" ref={heroRef}>

	    	<div className="col-12 d-flex align-items-end justify-content-end flex-column ">
	    		<div className="programmer">
	    			<img src="/programmer.png" alt="programmer"/>
	    		</div>
	    		<h1 className="text-center">
	    			For a Good Cause
	    		</h1>
	    	</div>
	    	<div className="col-12">
	    		<div className="row m-0 p-0">
	    			<div className="col-6 about_bbox position-relative">
						<div className="big_button about_button" ref={aboutRef} onClick={HandleClickAbout}>About</div>
					</div>
					<div className="col-6 contact_bbox position-relative">
						<div className="big_button contact_button" ref={contactRef} onClick={HandleClickContact}>Contact</div>
					</div>
	    		</div>
	    	</div>
	    </div>;

	return content;
}

export default Hero;