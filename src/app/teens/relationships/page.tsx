'use client';

import Link from 'next/link';

export default function TeenRelationshipsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-800 mb-4 md:mb-6">💕 Navigating Relationships</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          Friendships and relationships are central to your teen years. Learning to build healthy connections is a skill that lasts a lifetime.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          It's okay to feel confused, excited, or uncertain about relationships - that's completely normal.
        </p>
      </div>

      {/* Types of Relationships */}
      <div className="bg-gradient-to-br from-pink-50 to-pink-50 rounded-xl shadow-lg p-5 md:p-8 border border-pink-200">
        <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">🌟 Different Types of Relationships</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-semibold text-pink-700">Friendships</h3>
              <p className="text-gray-700">Your friends are your chosen family. Healthy friendships are built on trust, respect, and mutual support.</p>
            </div>
            <div className="border-l-4 border-rose-500 pl-4">
              <h3 className="font-semibold text-pink-700">Romantic Relationships</h3>
              <p className="text-gray-700">First crushes and relationships can be exciting and confusing. They help you learn about yourself and what you value in others.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-pink-700">Family Relationships</h3>
              <p className="text-gray-700">Your relationship with family evolves as you become more independent. Healthy boundaries are important.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-pink-700">Online Connections</h3>
              <p className="text-gray-700">Digital friendships can be meaningful, but it's important to stay safe and maintain real-world connections too.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Healthy Relationships */}
      <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl shadow-lg p-8 border border-rose-200">
        <h2 className="text-3xl font-semibold text-rose-800 mb-6 text-center">✨ Signs of Healthy Relationships</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-rose-700 mb-4 flex items-center">
              <span className="mr-2">💚</span>Green Flags
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Mutual respect and trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Open, honest communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Support for each other's goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>You feel safe being yourself</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Healthy conflict resolution</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-rose-700 mb-4 flex items-center">
              <span className="mr-2">🚩</span>Red Flags
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Disrespect or put-downs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Controlling behavior</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Dishonesty or broken trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Pressure to change who you are</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span>Any form of abuse or violence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Communication Skills */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border border-purple-200">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">💬 Healthy Communication</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3 flex items-center">
              <span className="mr-2">🗣️</span>Express Yourself Clearly
            </h3>
            <p className="text-gray-700 mb-2">
              Use "I" statements: "I feel uncomfortable when..." instead of "You always...". This helps avoid blame and defensive reactions.
            </p>
            <p className="text-sm text-purple-600">Example: "I feel hurt when you ignore my texts" instead of "You never respond"</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3 flex items-center">
              <span className="mr-2">👂</span>Active Listening
            </h3>
            <p className="text-gray-700 mb-2">
              Really listen when others speak. Ask clarifying questions and show you understand before responding.
            </p>
            <p className="text-sm text-purple-600">This builds trust and helps prevent misunderstandings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3 flex items-center">
              <span className="mr-2">🤐</span>Set Boundaries
            </h3>
            <p className="text-gray-700 mb-2">
              It's okay to say no and set limits. Healthy boundaries protect your well-being and make relationships stronger.
            </p>
            <p className="text-sm text-purple-600">Example: "I need some alone time" or "I'm not comfortable with that"</p>
          </div>
        </div>
      </div>

      {/* Relationship Challenges */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg p-8 border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">⚠️ Common Relationship Challenges</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-3 flex items-center">
              <span className="mr-2">💔</span>Breakups
            </h3>
            <p className="text-gray-700">
              Ending a relationship is painful. Allow yourself to grieve, lean on friends and family, and remember that it gets easier over time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-3 flex items-center">
              <span className="mr-2">😔</span>Peer Pressure
            </h3>
            <p className="text-gray-700">
              Friends might pressure you into things that don't feel right. Real friends respect your choices and boundaries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-3 flex items-center">
              <span className="mr-2">😤</span>Conflict
            </h3>
            <p className="text-gray-700">
              Disagreements happen in all relationships. Approach them with respect and a willingness to understand each other's perspective.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-3 flex items-center">
              <span className="mr-2">🙁</span>Toxic Relationships
            </h3>
            <p className="text-gray-700">
              Some relationships are unhealthy or harmful. It's okay to distance yourself from people who don't treat you well.
            </p>
          </div>
        </div>
      </div>

      {/* Building Connection */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">🌱 Building Healthy Relationships</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">🎯</span>Be Genuine
            </h3>
            <p className="text-gray-700">
              Don't pretend to be someone you're not. Authentic connections happen when people know and accept the real you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">🤝</span>Show Up
            </h3>
            <p className="text-gray-700">
              Be present for the people you care about. Text back, make time for hangouts, and support them when they need you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">💪</span>Choose Quality Over Quantity
            </h3>
            <p className="text-gray-700">
              A few deep, meaningful friendships are better than many superficial ones. Focus on relationships that matter to you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">✨</span>Give and Take
            </h3>
            <p className="text-gray-700">
              Healthy relationships are mutual. Both people should feel valued, supported, and able to be themselves.
            </p>
          </div>
        </div>
      </div>

      {/* When to Get Help */}
      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl shadow-lg p-8 border border-red-200">
        <h2 className="text-3xl font-semibold text-red-800 mb-6 text-center">🆘 When to Seek Support</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4">Talk to a trusted adult or counselor if:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold">✓</span>
              <span>You're in a relationship that feels controlling or abusive</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold">✓</span>
              <span>You're experiencing pressure to do things you're not ready for</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold">✓</span>
              <span>Your relationships are affecting your mental health or grades</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold">✓</span>
              <span>You're experiencing cyberbullying or online harassment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold">✓</span>
              <span>You're feeling isolated or lonely</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            School counselors and therapists can help you navigate relationship challenges and build healthy connection skills.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors mr-4"
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
