'use client';

import Link from 'next/link';

export default function TeenDepressionPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4 md:mb-6">😔 Understanding Depression</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          Feeling sad or empty sometimes is normal, but when these feelings stick around, it might be depression.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          The good news? You're not alone, and there are real ways to feel better.
        </p>
      </div>

      {/* What is Depression */}
      <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-xl shadow-lg p-5 md:p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">💭 What is Depression?</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Depression is more than just feeling sad. It's when persistent sadness, hopelessness, or numbness affects your daily life.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            It can make schoolwork harder, affect your friendships, and make you lose interest in things you normally enjoy.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            But here's the important thing: depression is treatable, and many teens recover and thrive.
          </p>
        </div>
      </div>

      {/* Common Signs */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 border border-emerald-200">
        <h2 className="text-3xl font-semibold text-emerald-800 mb-6 text-center">🔍 Signs You Might Be Depressed</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-emerald-700 mb-4 flex items-center">
              <span className="mr-2">😞</span>Emotional Signs
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Feeling sad, empty, or numb most days</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Lost interest in activities you enjoy</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Feeling worthless or guilty</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Irritability or anger for no reason</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-emerald-700 mb-4 flex items-center">
              <span className="mr-2">🏃</span>Physical Signs
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Fatigue or low energy</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Sleep changes (too much or too little)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Changes in appetite</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>Difficulty concentrating or making decisions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coping Strategies */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8 border border-cyan-200">
        <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">🎯 Coping Strategies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-3 flex items-center">
              <span className="mr-2">💪</span>Stay Active
            </h3>
            <p className="text-gray-700 mb-3">
              Exercise releases endorphins that naturally improve mood. Try activities you enjoy - walking, sports, dance, or anything that gets you moving.
            </p>
            <p className="text-sm text-cyan-600">Even 20 minutes helps!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-3 flex items-center">
              <span className="mr-2">🌙</span>Protect Your Sleep
            </h3>
            <p className="text-gray-700 mb-3">
              Keep a consistent sleep schedule. Avoid screens before bed and create a relaxing routine. Good sleep helps your mood and thinking.
            </p>
            <p className="text-sm text-cyan-600">Aim for 8-9 hours</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-3 flex items-center">
              <span className="mr-2">🤝</span>Stay Connected
            </h3>
            <p className="text-gray-700 mb-3">
              Reach out to friends and family. Isolation makes depression worse. Share how you're feeling with someone you trust.
            </p>
            <p className="text-sm text-cyan-600">Texts, calls, or hangouts all help</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-3 flex items-center">
              <span className="mr-2">🧠</span>Challenge Negative Thoughts
            </h3>
            <p className="text-gray-700 mb-3">
              When you think "I'm worthless," ask: Is this actually true? What would I tell a friend? Replace it with something more realistic.
            </p>
            <p className="text-sm text-cyan-600">Your brain lies when depressed</p>
          </div>
        </div>
      </div>

      {/* When to Seek Help */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">⚠️ When to Seek Help</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4">Talk to a trusted adult or professional if:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>Your sadness lasts more than 2 weeks</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You're having thoughts of harming yourself</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>Depression interferes with school or relationships</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>Self-help strategies aren't helping</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You feel hopeless or like people would be better without you</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-800 font-medium">
              🆘 Crisis Help: If you're in crisis, text HOME to 741741 (Crisis Text Line) or call 988 (Suicide & Crisis Lifeline)
            </p>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mr-4"
        >
          Back to Top
        </button>
        <Link href="/teens" className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          ← Back to Teen Support
        </Link>
      </div>
    </div>
  );
}
