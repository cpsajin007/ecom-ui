import React, { useState } from "react";

const PaymentDetailsPage = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful payment submission
    // For demonstration purposes, you might want to replace this with actual payment processing logic
    setTimeout(() => {
      setShowSuccessPopup(true);
    }, 1000); // Simulate a delay
    e.target.reset();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
  <h2>Payment Details</h2>
  <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" name="cardNumber" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="expiryDate">Expiry Date:</label>
      <input type="text" id="expiryDate" name="expiryDate" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="cvv">CVV:</label>
      <input type="text" id="cvv" name="cvv" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="postalCode">Postal Code:</label>
      <input type="text" id="postalCode" name="postalCode" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
    </div>

    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit Payment</button>
  </form>
  {showSuccessPopup && (
    <div className="success-popup" style={{ backgroundColor: '#f0f0f0', padding: '20px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '15px' }}>
      <p>Payment successful!</p>
      <button onClick={() => setShowSuccessPopup(false)} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>Close</button>
    </div>
  )}
</div>

  );
};

export default PaymentDetailsPage;
