import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import arrowUp from '../assets/arrow-up.png';

import instagram from '../assets/image 17.png'
import facebook from '../assets/image 21.png'
import tiktok from '../assets/image 23.png'
import youtube from '../assets/image 24.png'
import x from '../assets/image 20.png'
import email from '../assets/email.png'
import phone from '../assets/phone.svg'

import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_7yvga0y',
        'template_l9amhec',
        {
          from_name: form.name,
          to_name: 'Ibrahim',
          from_email: form.email,
          to_email: 'ibrahiimnawzad@gmail.com',
          message: form.message,
        },
        '1SFRBOiY8DX12qYmk'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for your message 😃');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("I didn't receive your message 😢");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="left-side">
          <div className="left-text-container">
              <h3 className="head-text"> <span className='small-text'>Ready To</span><br /> <span className='large-text'>Partner With<br /> Us?</span> </h3>
              <p className="contact-subtext">
                Rage is always expanding and exploring new horizons. Reach out and become part of the story.
              </p>
          </div>
          <div className="socials-container">
            <a href="https://www.t1.gg/teams"><img src={instagram} alt="" className='socials-logo'  /></a>
            <a href="https://www.t1.gg/teams"><img src={facebook} alt="" className='socials-logo'  /></a>
            <a href="https://www.t1.gg/teams"><img src={youtube} alt="" className='socials-logo youtube'  /></a>
            <a href="https://www.t1.gg/teams"><img src={x} alt="" className='socials-logo'  /></a>
            <a href="https://www.t1.gg/teams"><img src={tiktok} alt="" className='socials-logo'  /></a>
          </div>
          <div className="email-and-phone-container">
            <div className="email-container">
              <img src={email} alt="" className='socials-logo email' />
              <p className='email-text'>rageesports8@gmail.com</p>
            </div>
            <div div className="phone-container">
              <img src={phone} alt="" className='socials-logo phone' />
              <p className='email-text'>+905316062250</p>
            </div >
          </div>
        </div>

            <div className="right-side">
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <label className="form-label">
                  <span className="field-label">Full name</span>
                  <div className="input-border-wrapper">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="field-input"
                      placeholder="ex., John Doe"
                    />

                  </div>
                </label>

                <label className="form-label">
                  <span className="field-label">Email address</span>
                  <div className="input-border-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="field-input"
                      placeholder="ex., johndoe@gmail.com"
                    />
                  </div>
                </label>

                <label className="form-label">
                  <span className="field-label">Your message</span>
                  <div className="textarea-border-wrapper">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="field-input"
                      placeholder="Share your thoughts or inquiries..."
                    />
                  </div>
                </label>

                <button className="field-btn" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  <img src={arrowUp} alt="arrow-up" className="field-btn_arrow" />
                </button>
              </form>
            </div>
            </div>
            <div className="rights-container">
              <hr className="rights-line" />
              <p className="rights-text">© 2025 Rage Esports — Built by gamers, for gamers. 🕹️</p>
            </div>

</section>

  );
};

export default Contact;
