import React from 'react';
import './About.css';
import about_left from '../../../assets/images/about-left-image.png';
import { Fade } from "react-awesome-reveal";
export default function AboutUs() {
  return (
    <div id="about" class="about about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
        <Fade left duration={1000}>
          {/* <div class="left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s"> */}
          <div class="left-image">
            <img src={about_left} alt=""/>
          </div>
        </Fade>
        </div>
        <div class="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
          <div class="section-heading">
            <h6>About Us</h6>
            <h2>Top <em>marketing</em> agency &amp; consult your website <span>with us</span></h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-4">
              <div class="about-item">
                <h4>750+</h4>
                <h6>projects finished</h6>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="about-item">
                <h4>340+</h4>
                <h6>happy clients</h6>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="about-item">
                <h4>128+</h4>
                <h6>awards</h6>
              </div>
            </div>
          </div>
          <p><a rel="nofollow" href="https://templatemo.com/tm-563-seo-dream" target="_parent">SEO Dream</a> is free digital marketing CSS template provided by TemplateMo website. You are allowed to use this template for your business websites. Please DO NOT redistribute this template ZIP file on any Free CSS collection websites. You may contact us for more information. Thank you.</p>
          <div class="main-green-button"><a href="/">Discover company</a></div>
        </div>
      </div>
    </div>
  </div>
  )
}
