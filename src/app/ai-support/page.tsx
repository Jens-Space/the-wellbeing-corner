'use client'

import Link from 'next/link'

export default function AISupportPage() {
  return (
    <div id="top" className="space-y-6 md:space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl p-6 md:p-12 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-violet-900 mb-3 md:mb-4">🤖 AI Support Guide</h1>
        <p className="text-base md:text-xl text-violet-700 mb-3 md:mb-4">Understanding AI tools and when to seek human support</p>
        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          AI can be a helpful resource for information and support, but it's important to understand what it can and cannot do. 
          This guide helps you make the most of AI tools while knowing when to reach out to qualified professionals.
        </p>
      </div>

      {/* What AI Can Help With */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-5 md:p-8 border border-blue-100">
        <h2 className="text-xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-6 text-center">✅ What AI Can Help With</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-3">📚 Information & Education</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Learning about mental health conditions</li>
              <li>✓ Understanding symptoms and triggers</li>
              <li>✓ Exploring coping strategies</li>
              <li>✓ Finding reliable resources and articles</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-cyan-500">
            <h3 className="text-xl font-bold text-cyan-700 mb-3">💡 Creative Brainstorming</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Generating self-help ideas</li>
              <li>✓ Exploring different perspectives</li>
              <li>✓ Creating wellness plans</li>
              <li>✓ Brainstorming healthy activities</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-3">🧠 Thought Organization</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Talking through feelings and thoughts</li>
              <li>✓ Clarifying confusing emotions</li>
              <li>✓ Working through problems logically</li>
              <li>✓ Preparing for appointments</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-700 mb-3">📋 Planning & Tracking</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Creating wellness routines</li>
              <li>✓ Setting achievable goals</li>
              <li>✓ Building habit trackers</li>
              <li>✓ Organizing your thoughts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What AI Cannot Do */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-8 border border-red-100">
        <h2 className="text-3xl font-semibold text-red-700 mb-6 text-center">⛔ What AI Cannot Do</h2>
        <p className="text-gray-700 mb-6 text-center text-lg font-semibold">AI cannot replace professional mental health care:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Make Medical Diagnoses</h3>
            <p className="text-gray-700">
              Only qualified doctors can diagnose mental health conditions. AI can provide information but not clinical assessment.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Provide Therapy or Counseling</h3>
            <p className="text-gray-700">
              Professional therapists offer personalized treatment tailored to your specific needs and circumstances.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Prescribe Medications</h3>
            <p className="text-gray-700">
              Only licensed doctors can prescribe medications. AI cannot assess your medical history or interactions.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Respond to Crises</h3>
            <p className="text-gray-700">
              In emergencies or crisis situations, contact emergency services or crisis helplines immediately.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Understand Your Full Context</h3>
            <p className="text-gray-700">
              AI lacks complete knowledge of your history, relationships, environment, and nuanced circumstances.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Guarantee Accuracy</h3>
            <p className="text-gray-700">
              AI can make mistakes. Always verify information with professionals or reliable sources.
            </p>
          </div>
        </div>
      </div>

      {/* How to Use AI Safely */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 border border-emerald-100">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-6 text-center">🛡️ How to Use AI Safely</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-emerald-500">
            <h3 className="text-xl font-bold text-emerald-700 mb-2">1. Use It as a Starting Point</h3>
            <p className="text-gray-700">
              Use AI-generated information to begin exploring, but always cross-reference with professional resources and seek expert advice for important decisions.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-teal-500">
            <h3 className="text-xl font-bold text-teal-700 mb-2">2. Be Honest About Limitations</h3>
            <p className="text-gray-700">
              Understand that AI is a tool, not a therapist. It cannot replace the personalized care of qualified mental health professionals.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-cyan-500">
            <h3 className="text-xl font-bold text-cyan-700 mb-2">3. Protect Your Privacy</h3>
            <p className="text-gray-700">
              Don't share sensitive personal information, medical details, or identifying information with AI tools unless you're certain it's secure and private.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-sky-500">
            <h3 className="text-xl font-bold text-sky-700 mb-2">4. Know When to Seek Professional Help</h3>
            <p className="text-gray-700">
              If you're experiencing persistent symptoms, crisis situations, or significant distress, reach out to qualified professionals immediately.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-2">5. Verify Information</h3>
            <p className="text-gray-700">
              Cross-check any health information with NHS resources, mental health charities, or your healthcare provider before acting on it.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">6. Combine with Other Support</h3>
            <p className="text-gray-700">
              Use AI alongside professional care, support networks, and evidence-based treatments for best outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* When to Seek Professional Help */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg p-8 border border-orange-100">
        <h2 className="text-3xl font-semibold text-orange-700 mb-6 text-center">🚨 When to Seek Professional Help</h2>
        <p className="text-gray-700 mb-6 text-center font-semibold">Reach out to a professional if you experience:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-700">✓ Persistent sadness, anxiety, or hopelessness</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-700">✓ Thoughts of self-harm or suicide</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-700">✓ Significant changes in sleep, appetite, or functioning</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-700">✓ Difficulty managing daily responsibilities</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-700">✓ Relationship or work problems affecting your wellbeing</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-700">✓ Substance use or unhealthy coping behaviors</p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-8 border border-indigo-100">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">📞 Get Professional Support</h2>
        <p className="text-gray-700 mb-6 text-center">Mental health professionals are trained, qualified, and ready to help:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/resources" className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">🌍 UK Resources</h3>
            <p className="text-gray-700">Browse our comprehensive directory of mental health services, helplines, and support organizations across the UK.</p>
          </Link>
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-2">👨‍⚕️ Your GP</h3>
            <p className="text-gray-700">Your first point of contact for mental health concerns. They can assess your needs and refer you to specialist services.</p>
          </div>
        </div>
      </div>

      {/* Remember Section */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-lg p-8 border-2 border-purple-300">
        <h2 className="text-2xl font-bold text-center text-purple-900 mb-4">💜 Remember</h2>
        <div className="space-y-3 text-center text-gray-800">
          <p className="text-lg font-semibold">Seeking help is a sign of strength, not weakness.</p>
          <p className="text-lg">Whether you use AI as a learning tool or seek professional care, you deserve support.</p>
          <p className="text-lg font-semibold">You are never alone in this journey.</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          ↑ Back to Top
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
