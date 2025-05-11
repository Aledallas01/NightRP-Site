import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm({ amount, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    const { clientSecret, error } = await res.json();
    if (error) {
      setErrorMsg(error);
      setLoading(false);
      return;
    }

    const { error: stripeErr, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    if (stripeErr) {
      setErrorMsg(stripeErr.message);
    } else if (paymentIntent.status === 'succeeded') {
      onSuccess();
      alert('Pagamento riuscito!');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement options={{ hidePostalCode: true }} />
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn w-full"
      >
        {loading ? 'Elaborazione…' : `Paga €${(amount / 100).toFixed(2)}`}
      </button>
    </form>
  );
}
