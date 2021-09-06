import React from 'react'
import akshay from '../images/akshay.jpg';
import bhushan from '../images/bhushan.jpg';
import pratik from '../images/pratik.jpg';
import vikrant from '../images/vikrant.jpg';
function About() {
    return (
        <div>
          <h1><center>About Us</center></h1>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
	
	<ol className="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   

	<div className="carousel-inner">		
		<div className="carousel-item active">
			<div className="img-box"><img src={akshay} alt=""/></div>
			<p className="testimonial">Department of Scientific Computing, Modeling and Simulation</p>
			<p className="overview"><b>Aksay Borole</b>Student at <a href="http://www.unipune.ac.in/">Savitribai Phule Pune University</a></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={pratik} alt=""/></div>
			<p className="testimonial">Department of Scientific Computing, Modeling and Simulation</p>
			<p className="overview"><b>Pratik Kushire</b>Student at <a href="http://www.unipune.ac.in/">Savitribai Phule Pune University</a></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={vikrant} alt=""/></div>
			<p className="testimonial">Department of Scientific Computing, Modeling and Simulation</p>
			<p className="overview"><b>Vikrant Ninave</b>Student at  <a href="http://www.unipune.ac.in/">Savitribai Phule Pune University</a></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={bhushan} alt=""/></div>
			<p className="testimonial">Department of Scientific Computing, Modeling and Simulation</p>
			<p className="overview"><b>Bhushan Kirve</b>Student at <a href="http://www.unipune.ac.in/">Savitribai Phule University</a></p>
			<div className="star-rating">
				<ul className="list-inline">
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star"></i></li>
					<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>

	<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i className="fa fa-angle-left"></i>
	</a>
	<a className="carousel-control-next" href="#myCarousel" data-slide="next">
		<i className="fa fa-angle-right"></i>
	</a>
</div>
        </div>
    )
}

export default About
