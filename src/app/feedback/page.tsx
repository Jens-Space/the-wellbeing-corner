'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/jenniferellen1992@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `\n---\nFeedback Type: ${formData.feedbackType}\nFeedback from: The Wellbeing Corner\nWebsite: the-wellbeing-corner.jens-space.com\n---\n\n${formData.message}`,
          _subject: 'New Feedback from The Wellbeing Corner',
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', feedbackType: '', message: '' });
      } else {
        setError('Failed to send feedback. Please try again.');
      }
    } catch (err) {
      setError('Error sending feedback. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id="top" className="space-y-12">
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-3 md:mb-4">Thank You!</h1>
          <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
            Your feedback has been received. We appreciate you taking the time to help us improve The Wellbeing Corner.
          </p>
          <p className="text-base md:text-lg text-gray-600">If you need to submit additional feedback, please do so below.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Submit Another Feedback
          </button>
          <Link href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="top" className="space-y-12">
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-md border-2 border-purple-200 p-8">
        <div className="text-center mb-6">
          <span className="text-5xl inline-block mb-3">💬</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">We'd Love Your Feedback! 💜</h2>
          <p className="text-gray-600 text-lg">Your thoughts, suggestions, and ideas help us create a better space for everyone. We're listening!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="What should we call you?"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="So we can get back to you"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Feedback Type</label>
            <select
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white"
            >
              <option value="">Select a type...</option>
              <option value="General Feedback">General Feedback</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Content Suggestion">Content Suggestion</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Feedback or Ideas</label>
            <textarea
              name="message"
              placeholder="Tell us what you think! Share your ideas, suggestions, or just let us know how we're doing..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none bg-white"
            />
          </div>
          
          {error && (
            <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl">
              <p className="text-red-700 font-bold text-center">{error}</p>
            </div>
          )}
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed disabled:scale-100 shadow-lg"
          >
            {loading ? '✨ Sending your feedback...' : '📨 Send Feedback'}
          </button>
        </form>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-100">
        <h2 className="text-2xl font-semibold text-amber-700 mb-4">Privacy Notice</h2>
        <p className="text-gray-700 mb-4">
          Your feedback is important to us. Please note:
        </p>
        <ul className="space-y-2 text-gray-700 ml-4">
          <li>• We do not share your personal information with third parties</li>
          <li>• Feedback submitted here is not monitored in real-time</li>
          <li>• If you need immediate support, please use our <Link href="/resources" className="text-purple-600 hover:text-purple-800 underline">UK Resources</Link> page</li>
          <li>• For urgent mental health support, contact Samaritans on 116 123</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={scrollToTop}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
        >
          Back to Top
        </button>
        <Link href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
