import { useState } from 'react';
import './JoinStrip.css';

export default function JoinStrip() {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Join the Movement');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // NOTE: front-end only for now — needs a real backend/email service (Mailchimp, Google Sheets form, etc.)
    // to actually collect signups. This currently just confirms visually.
    setButtonText("You're on the list!");
    setEmail('');
    setTimeout(() => setButtonText('Join the Movement'), 2500);
  }

  return (
    <section id="joinstrip">
      <div className="wrap">
        <div>
          <h3>Get campaign updates in your inbox.</h3>
          <p>Rally dates, ward visits, and ways to help — no spam, unsubscribe anytime.</p>
        </div>
        <form id="joinForm" onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
