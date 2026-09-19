import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Support.css';

// TODO: replace with the campaign's live Paystack PUBLIC key (starts with pk_live_ or pk_test_).
// Get it from the Paystack Dashboard -> Settings -> API Keys & Webhooks. Never put the secret key here.
const PAYSTACK_PUBLIC_KEY = 'pk_test_REPLACE_WITH_YOUR_PUBLIC_KEY';

export default function Support() {
  const [headRef, headVisible] = useReveal();
  const [amount, setAmount] = useState(10000);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const effectiveAmount = customAmount ? parseInt(customAmount, 10) || 0 : amount;

  function handlePay() {
    if (!email.trim()) {
      alert('Please enter your email address so we can send a receipt.');
      return;
    }
    if (!effectiveAmount || effectiveAmount < 100) {
      alert('Please choose or enter a valid donation amount.');
      return;
    }
    if (PAYSTACK_PUBLIC_KEY.includes('REPLACE_WITH')) {
      alert('Online payments are not live yet — the campaign team still needs to add a real Paystack public key. For now, please use the bank transfer details below.');
      return;
    }
    if (!window.PaystackPop) {
      alert('Payment library failed to load — check your connection and try again.');
      return;
    }
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: email.trim(),
      amount: effectiveAmount * 100, // kobo
      currency: 'NGN',
      metadata: { custom_fields: [{ display_name: 'Donor Name', variable_name: 'donor_name', value: name.trim() || 'Anonymous' }] },
      callback: function (response) {
        alert('Thank you! Your contribution was received. Reference: ' + response.reference);
      },
      onClose: function () {},
    });
    handler.openIframe();
  }

  return (
    <section id="support" className="section-pad">
      <div className="wrap">
        <div className={`section-head reveal ${headVisible ? 'visible' : ''}`} ref={headRef}>
          <div className="eyebrow">Fuel The Campaign</div>
          <h2>Support the movement.</h2>
          <p>Every contribution goes directly toward ward mobilisation, transportation, and voter engagement across Bokkos Constituency's twenty wards. Give online, or transfer directly.</p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <h3>Give Online</h3>
            <p className="desc">Secure card, bank transfer or USSD payment, processed via Paystack.</p>

            <div className="amount-row">
              {[5000, 10000, 25000, 50000].map((amt) => (
                <div
                  key={amt}
                  className={`amount-chip ${!customAmount && amount === amt ? 'active' : ''}`}
                  onClick={() => { setAmount(amt); setCustomAmount(''); }}
                >
                  ₦{amt.toLocaleString()}
                </div>
              ))}
            </div>

            <div className="field">
              <label>Full name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            </div>
            <div className="field">
              <label>Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required />
            </div>
            <div className="field">
              <label>Or enter a custom amount (₦)</label>
              <input type="number" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} placeholder="e.g. 15000" min="100" />
            </div>

            <button className="btn btn-dark" onClick={handlePay}>
              Donate ₦{effectiveAmount.toLocaleString()} Now
            </button>

            <div className="note-box">
              Online giving needs a live Paystack public key to be added by the campaign team before it can accept real payments. See the README for setup steps.
            </div>
          </div>

          <div className="support-card">
            <h3>Give by Bank Transfer</h3>
            <p className="desc">For direct transfers, cheques, or in-person contributions.</p>
            <div className="bank-box">
              <div className="row"><span>Account Name</span><span>Fwangshak Dibang</span></div>
              <div className="row"><span>Account Number</span><span>0070696269</span></div>
              <div className="row"><span>Bank</span><span>Access Bank</span></div>
              <div className="row"><span>Phone</span><span>0810 065 1213</span></div>
              <div className="row"><span>Email</span><span>fwangshak3@gmail.com</span></div>
            </div>
            <div className="bank-box" style={{ marginTop: 16 }}>
              <div className="row"><span>Account Name</span><span>Fwangshak Isaiah Dibang</span></div>
              <div className="row"><span>Account Number</span><span>0255299607</span></div>
              <div className="row"><span>Bank</span><span>GTBank</span></div>
            </div>
            <div className="note-box">
              Political donations in Nigeria are subject to INEC campaign finance rules (including limits for individual and corporate donors). The campaign's legal/finance team should confirm compliance and issue receipts for contributions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}