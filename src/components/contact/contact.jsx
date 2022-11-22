import React from "react";
import emailjs from '@emailjs/browser';
import { useState,useRef } from "react";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { AiFillInstagram,AiOutlineTwitter,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import "./contact.css";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID =import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicApi = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicApi)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="contact__container">
      <div className="contact__info">
        <fieldset>
          <legend>
            <div className="contact__info_title">
              <h1>CONTACT INFORMATION</h1>
            </div>
          </legend>

          <div className="contact__details">
          <div className="contact__details-literal">
            <div className="contact__details_icons">
              <MdLocationPin size="20px" className="map" />
              <MdPhone size="20px" className="phone" />
              <MdEmail size="20px" className="email" />
            </div>
            <div className="contact__details-input">
              <span>Nigeria</span>
              <span>+2348142604385</span>
              <span>adiritega@gmail.com</span>
            </div>
          </div>
          
            <div className="contact__details-socials">
            <a href="https://instagram.com/thatcoderguy.inc?igshid=YmMyMTA2M2Y=" target="blank"><AiFillInstagram size="20px" className="insta" /></a>
            <a href="https://twitter.com/adiri_tega?t=tYACVBXxcjFscxCVd4dY5w&s=08" target="blank"><AiOutlineTwitter size="20px" className="twitter" /></a>
            <a href="https://www.linkedin.com/in/adiri-oghenetega-33459b1a1" target="blank"><AiFillLinkedin size="20px" className="linkedin" /></a>  
            <a href="https://github.com/AdiriOghenetega" target="blank"><AiFillGithub size="20px" className="github" /></a>  
            </div>
          </div>
        </fieldset>
      </div>
      <fieldset>
        <legend>CONTACT ME</legend>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact__form_first-lastname">
            <div className="contact__form_firstname">
              <label of="firstname">FIRSTNAME </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter Firstname"
                onChange={handleChange}
              />
            </div>
            <div className="contact__form_lastname">
              <label of="lastname">LASTNAME </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter Lastname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact__form_email">
            <label of="email">EMAIL</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_subject">
            <label of="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter Subject"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_message">
            <label of="message">MESSAGE</label>

            <textarea
              id="message"
              name="message"
              placeholder="Enter Message"
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            value="SEND MESSAGE"
            className="contact__form_submit"
          />
        </form>
      </fieldset>
    </div>
  );
};

export default Contact;
