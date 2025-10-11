'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

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
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>

      {success && <div>✅ Booking successful!</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputDate}
          type="text"
          name="date"
          placeholder="Booking date*"
          value={form.date}
          onChange={handleChange}
          onFocus={e => (e.target.type = 'date')}
          onBlur={e => {
            if (!e.target.value) e.target.type = 'text';
          }}
          required
        />
        <textarea
          className={styles.textarea}
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}
        ></textarea>
        <button className={styles.formBtn} type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
