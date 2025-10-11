'use client';

import { useState } from 'react';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    comment: '',
    date: '',
  });

  const [success, setSuccess] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccess(true);
    setForm({ name: '', email: '', comment: '', date: '' });
  };
  return (
    <section>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      {success && <div>✅ Booking successful!</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Booking date*"
          value={form.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default BookingForm;
