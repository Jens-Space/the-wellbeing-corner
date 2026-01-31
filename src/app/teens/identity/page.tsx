'use client';

import Link from 'next/link';

export default function TeenIdentityPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-800 mb-4 md:mb-6">🌈 Discovering Yourself</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          Your teen years are all about figuring out who you are. This journey of self-discovery is exciting and sometimes confusing.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          It's perfectly normal to question your identity, values, and where you fit in.
        </p>
      </div>

      {/* Identity Exploration */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-xl shadow-lg p-5 md:p-8 border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">🔍 What is Identity?</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Your identity is who you are - your values, beliefs, interests, personality, and the groups you belong to.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            It includes your culture, family background, gender, sexuality, interests, talents, and beliefs. Your identity isn't fixed - it evolves as you grow and learn about yourself.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Exploring your identity is a healthy part of becoming who you're meant to be.
          </p>
        </div>
      </div>

      {/* Areas of Identity */}
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">🌟 Areas to Explore</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-4 flex items-center">
              <span className="mr-2">💖</span>Values & Beliefs
            </h3>
            <p className="text-gray-700 mb-3">
              What matters most to you? What do you believe in? Your values shape your choices and relationships.
            </p>
            <p className="text-sm text-yellow-600">Question: What would you stand up for?</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-4 flex items-center">
              <span className="mr-2">🎨</span>Interests & Talents
            </h3>
            <p className="text-gray-700 mb-3">
              What activities make you lose track of time? What are you naturally good at? Follow your genuine interests.
            </p>
            <p className="text-sm text-yellow-600">Question: What do you love doing?</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-4 flex items-center">
              <span className="mr-2">👥</span>Social Identity
            </h3>
            <p className="text-gray-700 mb-3">
              Consider your cultural background, family, friendships, and the communities you belong to. These shape who you are.
            </p>
            <p className="text-sm text-yellow-600">Question: What groups do you identify with?</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-4 flex items-center">
              <span className="mr-2">🌍</span>Personal Growth
            </h3>
            <p className="text-gray-700 mb-3">
              How do you want to grow? What kind of person do you want to become? Identity includes your aspirations.
            </p>
            <p className="text-sm text-yellow-600">Question: Who do you want to be?</p>
          </div>
        </div>
      </div>

      {/* Common Identity Challenges */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-200">
        <h2 className="text-3xl font-semibold text-amber-800 mb-6 text-center">⚠️ Identity Challenges</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-amber-700 mb-2 flex items-center">
              <span className="mr-2">🤝</span>Peer Pressure
            </h3>
            <p className="text-gray-700">
              Fitting in is important, but not at the cost of your authentic self. Choose friends who accept you as you are.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-amber-700 mb-2 flex items-center">
              <span className="mr-2">👨‍👩‍👧</span>Family Expectations
            </h3>
            <p className="text-gray-700">
              Your parents may have dreams for you that don't match your own. It's okay to respectfully explore your own path.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-amber-700 mb-2 flex items-center">
              <span className="mr-2">📱</span>Social Media Comparison
            </h3>
            <p className="text-gray-700">
              Social media shows curated versions of people. Remember that no one is as perfect as they seem online.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-amber-700 mb-2 flex items-center">
              <span className="mr-2">❓</span>Confusion & Self-Doubt
            </h3>
            <p className="text-gray-700">
              It's normal to feel uncertain about who you are. Self-discovery takes time - be patient with yourself.
            </p>
          </div>
        </div>
      </div>

      {/* Steps to Discover Yourself */}
      <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl shadow-lg p-8 border border-lime-200">
        <h2 className="text-3xl font-semibold text-lime-800 mb-6 text-center">🚀 Steps to Discover Yourself</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-lime-700 mb-3 flex items-center">
              <span className="mr-2">📝</span>Journal & Reflect
            </h3>
            <p className="text-gray-700">
              Write about your thoughts, feelings, and experiences. Journaling helps you understand yourself better.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-lime-700 mb-3 flex items-center">
              <span className="mr-2">🎯</span>Try New Things
            </h3>
            <p className="text-gray-700">
              Experiment with different activities, hobbies, and experiences. You learn about yourself through doing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-lime-700 mb-3 flex items-center">
              <span className="mr-2">🗣️</span>Talk to People
            </h3>
            <p className="text-gray-700">
              Conversations with mentors, counselors, or trusted friends help you gain perspective on who you are.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-lime-700 mb-3 flex items-center">
              <span className="mr-2">✨</span>Embrace Authenticity
            </h3>
            <p className="text-gray-700">
              Be yourself, even when it feels uncomfortable. Your authentic self is your greatest strength.
            </p>
          </div>
        </div>
      </div>

      {/* When to Seek Support */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-8 border border-pink-200">
        <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">🆘 When to Get Support</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4">Talk to someone if:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Identity exploration is causing significant distress or anxiety</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>You're struggling with acceptance from family or peers</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>You're experiencing discrimination or bullying related to your identity</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Your identity exploration is connected to self-harm or substance use</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>You need guidance navigating difficult family dynamics</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            School counselors, therapists, or trusted mentors can help you navigate identity questions in a supportive environment.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm sm:text-base"
        >
          Back to Top
        </button>
        <Link href="/teens" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Teen Support
        </Link>
      </div>
    </div>
  );
}
