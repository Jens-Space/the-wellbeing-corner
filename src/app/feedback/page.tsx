'use client';

import { useState } from 'react';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <a href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="top" className="space-y-12">
      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-3 md:mb-4">Share Your Feedback</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
          Help us improve The Wellbeing Corner by sharing your thoughts, suggestions, or experiences.
        </p>
        <p className="text-base md:text-lg text-gray-600">We value your input and are committed to making this resource as helpful as possible.</p>
      </div>

      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name (optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Your Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-2">
              Feedback Type
            </label>
            <select
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              <option value="">Select feedback type</option>
              <option value="general">General Feedback</option>
              <option value="suggestion">Suggestion for Improvement</option>
              <option value="bug">Report an Issue</option>
              <option value="content">Content Feedback</option>
              <option value="experience">Share Your Experience</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Feedback
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Share your thoughts, suggestions, or experiences with us..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </div>
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
          <li>• If you need immediate support, please use our <a href="/the-wellbeing-corner/resources" className="text-purple-600 hover:text-purple-800 underline">UK Resources</a> page</li>
          <li>• For urgent mental health support, contact Samaritans on 116 123</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
        >
          Back to Top
        </button>
        <a href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Home
        </a>
      </div>
    </div>
  )
}
