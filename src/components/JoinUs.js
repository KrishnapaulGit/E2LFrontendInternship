import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './JoinUs.css'; // Your CSS for styling



// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(process.env.REACT_APP_BREVO_API_KEY);
  

  // Send email using Brevo API
  const sendEmail = async (data) => {
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key':process.env.REACT_APP_BREVO_API_KEY, // Add your Brevo API Key here
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Thank you for joining our newsletter!');
      } else {
        setMessage('Thank you for joining our newsletter!');
      }
    } catch (error) {
      setMessage('Thank you for joining our newsletter!');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save data to Firestore
      await addDoc(collection(db, 'notifyDB'), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
      });

      // Prepare email data for Brevo
      const emailData = {
        sender: { name: 'Easy2Learning', email: 'krishhmail01@gmail.com' },
        to: [{ email: formData.email, name: formData.name }],
        subject: 'Thank you for joining our newsletter!',
        htmlContent: `

        
          <p style="text-align: center;">
  <img src="https://www.easy2learning.in/assets/imgs/logo.png" alt="Easy2Learning Internship Banner" style="max-width: 100%; height: auto;">
</p>
<p style="font-size:18px;">
<p>Hello ${formData.name},</p>
<p>We’re excited to invite you to start an incredible journey with us at <strong>Easy2Learning</strong>! 🚀 We’re thrilled to announce our <strong>Frontend Developer Internship</strong> program, beginning on <strong>November 5, 2024</strong>. Here's what you can look forward to:</p>
<ul>
  <li><strong>Hands-On Experience</strong>: Dive into real-world projects, working with HTML, CSS, JavaScript, and React.</li>
  <li><strong>Mentorship</strong>: Learn directly from our experienced developers who are here to guide you every step of the way.</li>
  <li><strong>Professional Growth</strong>: Build skills that will prepare you for a successful career in frontend development.</li>
  <li><strong>Internship Certification</strong>: Get the ISO Verified certification, helpfull for your career growth</li>
</ul>
<p>We’re also proud to share that <strong>Easy2Learning</strong> is ISO-certified, underscoring our commitment to quality, consistency, and excellence. As an intern, you’ll be part of a team that meets high standards in all areas of technology and innovation.</p>
<p>This is a unique opportunity to gain practical experience, collaborate on exciting projects, and build a portfolio you’ll be proud of. Whether you're just beginning or advancing your career, our program is designed to support your growth.</p>
<p><strong>Best regards,</strong><br>The Easy2Learning Team</p>

<p style="margin:10px;"> 
Course Curiculam - https://drive.google.com/file/d/1UOFz...
<br>
Contact : 8584864783/6291314743
<br>
App link - https://play.google.com/store/apps/de...
<br>
Telegram Group - https://t.me/+VPcENurAUJ80ODg1
</p>

</p>

        `,
      };

      // Send the email using Brevo API
      sendEmail(emailData);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="join-us-container">
      
      <div className="social-icons-section">
        <h3>Follow Us</h3>
        <div className="icons">
          <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbXo1dW9tR2ZoRzZKX2dhSE1MamwyZTJPdUszZ3xBQ3Jtc0tuYkFGOFlRLUJubzIyNDEzMzFqVjZrRkdJVEM5eE96SUVhTmUtRm13QTU4SHVsVVlXSlE1UTNCSVA2V1pFSXNmSW51Zjc0Zm1iYTFkNllNOFMwNGxjLV9xVHpfN0tzMkwtSndBbEVyRW9MOGtsb211MA&q=https%3A%2F%2Fwww.facebook.com%2Fdavid.das.94801" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-circle-logo-icon-download-in-svg-png-gif-file-formats--twitter-fb-social-media-pack-logos-icons-1583148.png?f=webp&w=256"
              alt="Facebook"
              className="icon"
            />
          </a>
          <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa3F0NFlqWjl0MWJjZTNwNnJMS0VBUUZXcW1TQXxBQ3Jtc0ttYTNsWmpGWnNNdC1ZVU5qZDliWV9vMEl1TGxuZ1VTeGJ2RkYwVTYwdmhiOEJJOGJuTmdWZEtVUTNRQ3BHOUp3dTNCeU1Jb2k3Z1JLNE1rQUZWbklNTUV5N3NQREZ2MEh6Q3pFc2lPZFV2dDhMMFM2SQ&q=https%3A%2F%2Fwww.easy2learning.in%2Flogin" target="_blank" rel="noopener noreferrer">
            <img
              src="https://e7.pngegg.com/pngimages/798/799/png-clipart-web-development-logo-world-wide-web-website-web-symbol-s-web-design-symmetry-thumbnail.png"
              alt="Website"
              className="icon"
            />
          </a>
          <a href="https://www.youtube.com/@easy2learning" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              alt="YouTube"
              className="icon"
            />
          </a>
        </div>
        <div className="location-section">
          <p>19/D, B.C. Chartterjee Street, Belgharia, Kolkata 700056</p>
        </div>
      </div>

      <div className="join-us-form-section">
        <h2>Join Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">Notify Me</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default JoinUs;
