'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error(error);
      setSuccessMessage('Failed to send message. Please try again.');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-foreground font-semibold mb-2">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-foreground font-semibold mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-foreground font-semibold mb-2">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we help?"
          />
        </div>
        <div>
          <label className="block text-foreground font-semibold mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-80 hover:scale-102 transition "
        >
          Send Message
        </button>
      </form>

      {/* Toast Message */}
      {successMessage && (
        <div
          className="fixed bottom-4 left-4 bg-accent text-accent-foreground p-4 rounded shadow-lg cursor-pointer z-50"
          onClick={() => setSuccessMessage('')}
        >
          {successMessage}
        </div>
      )}
    </div>
  );
}
