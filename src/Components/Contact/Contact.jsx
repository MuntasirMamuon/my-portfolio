import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ofcvjif', 'template_v3yaldf', form.current, 'eOo1aqeBXKdgNTlnS')
        .then((result) => {
          toast("Thank You !");;
          form.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mdmuntasirmamun63@gamil.com</h5>
            <a href="mailto:mdmuntasirmamun63@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine  className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>MD Muntasir Mamun</h5>
            <a href="https://m.me/mdmuntasir.mamun.589" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+8801838355239</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801838355239" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="" id="" placeholder="Your Email" required />
          <textarea name="message" id=""  rows="7" placeholder="Your Message" required></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
        <ToastContainer/>
      </div>
    </section>
  );
};

export default Contact;
