import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import arrowUp from '../assets/arrow-up.png';
import plus from '../assets/plus.png'

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
    <div className="terminal">
      <div className="upper">
        <div className="menu-items">
          <span className="menu-item red"></span>
          <span className="menu-item yellow"></span>
          <span className="menu-item green"></span>
        </div>
        <img src={plus} alt="" className='plus-sign'/>
      </div>

      <div className="lower">
        <div className="lower-inner">
          <h3 className="head-text">Let's talk</h3>
          <p className="contact-subtext">
            Whether you're looking to build a new website, improve your existing website,
            collaborate with me, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label className="form-label">
              <span className="field-label">Full Name</span>
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
    </div>
  </div>
</section>

  );
};

export default Contact;
