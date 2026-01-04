'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /*  */
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
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our packages? Want to customize your trip? We're here to help!
            </p>
          </div>

          {/*************** Contact Info Cards ************************/}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/*******Email card *********/}
            <div className="bg-card rounded-lg p-8 shadow-md text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                <a
                  href="mailto:info@egypttravels.com"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 cursor-pointer"
                >
                  <Mail className="text-primary-foreground" size={24} />
                </a>
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">info@egypttravels.com</p>
            </div>

            {/*********** Phone card ********** */}
            <div className="bg-card rounded-lg p-8 shadow-md text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                <a
                  href="tel:+15551234567"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 cursor-pointer"
                >
                  <Phone className="text-primary-foreground" size={24} />
                </a>
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>

            {/********** Location card **************/}
            <div className="bg-card rounded-lg p-8 shadow-md text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                <a
                  href="https://www.google.com/maps?q=Cairo,Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 cursor-pointer"
                >
                  <MapPin className="text-primary-foreground" size={24} />
                </a>
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Cairo, Egypt</p>
            </div>
          </div>

          {/***************** Contact Form **************************/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

            {/***** Faq ********/}
            <div className="space-y-8">
              <div className="bg-linear-to-br from-primary to-accent rounded-lg p-8 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">What's included in the packages?</p>
                    <p className="opacity-80">
                      Each package includes accommodation, guided tours, and specified meals. See package details for
                      specifics.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Can I customize a package?</p>
                    <p className="opacity-80">Contact us to discuss custom itineraries tailored to your interests.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">What's your cancellation policy?</p>
                    <p className="opacity-80">
                      Free cancellation up to 7 days before departure. Terms vary by package.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-8 text-secondary-foreground">
                <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>November - February:</strong> Ideal weather, mild temperatures
                  </li>
                  <li>
                    <strong>March - May:</strong> Spring season, fewer crowds
                  </li>
                  <li>
                    <strong>June - September:</strong> Hot season, best discounts
                  </li>
                  <li>
                    <strong>October:</strong> Pleasant weather, perfect for exploration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
