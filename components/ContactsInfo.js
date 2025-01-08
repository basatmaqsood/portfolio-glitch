'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Notification from './Notification'; // Import Notification Component

const ContactsInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false); // Track sending state
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Service ID:', process.env.EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', process.env.EMAILJS_PUBLIC_KEY);
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    setIsSending(true); // Disable button and show "Sending"
    setError('');
    setIsSent(false);

    emailjs
      .send(
        'service_p5vtbeo', // Replace with your Email.js service ID
        'template_h603yi6', // Replace with your Email.js template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'QMyTR54nwEYUqRZSL' // Replace with your Email.js public API key
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setError('Failed to send message. Please try again later.');
        console.error(err);
      })
      .finally(() => {
        setIsSending(false); // Reset button state
      });
  };

  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+ 92 307 8776 306</p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:itzbasatmaqsood@gmail.com">
                itzbasatmaqsood@gmail.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">Address</div>
            <p>Q Hall, UET Taxila</p>
          </div>
        </div>
        <div className="contact_form">
          <form id="cform" onSubmit={handleSubmit}>
            <div className="group-val">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="group-val">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="group-val ct-gr">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn fill"
              data-text="Send Message"
              disabled={isSending}
            >
              {isSending ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
          {error && (
            <div className="alert-error">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Show Notification when the message is sent */}
      {isSent && (
        <Notification
          message="I have received your message and I will get back to now! Thanks for contacting me."
          onClose={() => setIsSent(false)}
        />
      )}
    </div>
  );
};

export default ContactsInfo;
