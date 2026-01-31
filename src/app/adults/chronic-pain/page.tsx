'use client';

import Link from 'next/link';

export default function ChronicPainPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-red-800 mb-4 md:mb-6">💝 Living with Chronic Pain</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          Chronic pain can feel isolating, but you're not alone. There are compassionate ways to care for both your body and mind during this journey.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          Remember: Your pain is real, and your well-being matters.
        </p>
      </div>

      {/* Understanding Section */}
      <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl shadow-lg p-5 md:p-8 border border-pink-200">
        <h2 className="text-xl md:text-3xl font-semibold text-pink-800 mb-4 md:mb-6 text-center">🧠 Understanding Chronic Pain</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Chronic pain is pain that lasts longer than 3-6 months, often beyond normal healing time. It can deeply affect mental health, sometimes leading to depression, anxiety, or feelings of isolation.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-red-800 font-medium mb-4">🌈 Common Types of Chronic Pain:</p>
          <ul className="text-red-700 space-y-2">
            <li>• Arthritis and joint pain</li>
            <li>• Back and neck pain</li>
            <li>• Fibromyalgia</li>
            <li>• Migraine headaches</li>
            <li>• Nerve pain (neuropathy)</li>
            <li>• Inflammatory conditions</li>
          </ul>
        </div>
      </div>

      {/* Pain-Mental Health Connection */}
      <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl shadow-lg p-8 border border-rose-200">
        <h2 className="text-3xl font-semibold text-rose-800 mb-6 text-center">💔 The Pain-Mental Health Connection</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Chronic pain and mental health issues often create a cycle where each can worsen the other.
          Understanding this relationship is key to finding relief and support.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-rose-700 mb-4 flex items-center">
              <span className="mr-2">💭</span>How Pain Affects Mental Health
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Sleep disturbances leading to fatigue and mood changes</li>
              <li>• Reduced activity causing isolation and depression</li>
              <li>• Constant discomfort creating anxiety and irritability</li>
              <li>• Loss of independence affecting self-esteem</li>
              <li>• Financial stress from medical costs and lost work</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-rose-700 mb-4 flex items-center">
              <span className="mr-2">🔄</span>How Mental Health Affects Pain
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Depression can amplify pain perception</li>
              <li>• Anxiety increases muscle tension and pain sensitivity</li>
              <li>• Stress hormones can worsen inflammation</li>
              <li>• Poor coping strategies may lead to avoidance behaviors</li>
              <li>• Sleep issues from mental health problems intensify pain</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Managing Pain and Mental Health */}
      <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl shadow-lg p-8 border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">🌿 Managing Pain and Mental Health</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-orange-700 mb-4 flex items-center">
              <span className="mr-2">💊</span>Pain Management Strategies
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✨</span>
                <span><strong>Medication:</strong> Working with doctors to find effective pain relief</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✨</span>
                <span><strong>Physical therapy:</strong> Exercises to improve mobility and reduce pain</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✨</span>
                <span><strong>Heat/Cold therapy:</strong> Using temperature to manage symptoms</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✨</span>
                <span><strong>Mindfulness:</strong> Meditation and breathing techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✨</span>
                <span><strong>Alternative therapies:</strong> Acupuncture, massage, or TENS</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-orange-700 mb-4 flex items-center">
              <span className="mr-2">💚</span>Mental Health Support
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">💚</span>
                <span><strong>Cognitive Behavioral Therapy:</strong> Changing thought patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">💚</span>
                <span><strong>Support groups:</strong> Connecting with others who understand</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">💚</span>
                <span><strong>Stress management:</strong> Relaxation techniques and hobbies</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">💚</span>
                <span><strong>Goal setting:</strong> Breaking tasks into manageable steps</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">💚</span>
                <span><strong>Professional counseling:</strong> Working with mental health specialists</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coping with Flare-Ups */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-200">
        <h2 className="text-3xl font-semibold text-amber-800 mb-6 text-center">🔥 Coping with Flare-Ups</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Pain flare-ups can be particularly challenging. Having a plan in place can help maintain mental wellbeing during these times.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-amber-800 mb-3 flex items-center">
              <span className="mr-2">🛡️</span>Flare-Up Management:
            </h3>
            <ul className="text-amber-700 space-y-2">
              <li>• Recognize early warning signs and act quickly</li>
              <li>• Have a "flare-up kit" with comfort items and distractions</li>
              <li>• Adjust expectations and ask for help when needed</li>
              <li>• Use relaxation techniques to manage stress</li>
              <li>• Focus on what you can control, not what you can't</li>
              <li>• Remember that flare-ups are temporary</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Mental Health Challenges */}
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">🩺 Common Mental Health Challenges</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Living with chronic pain often brings specific mental health challenges that require targeted support and understanding.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-2 flex items-center">
              <span className="mr-2">😔</span>Depression
            </h3>
            <p className="text-gray-600">Feelings of hopelessness, loss of interest in activities, and persistent sadness.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-2 flex items-center">
              <span className="mr-2">😰</span>Anxiety
            </h3>
            <p className="text-gray-600">Worry about pain worsening, fear of activities, and constant tension.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-2 flex items-center">
              <span className="mr-2">😤</span>Frustration & Anger
            </h3>
            <p className="text-gray-600">Irritability from limitations and resentment toward the condition.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-2 flex items-center">
              <span className="mr-2">🏠</span>Social Isolation
            </h3>
            <p className="text-gray-600">Withdrawing from relationships due to pain and fatigue.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-2 flex items-center">
              <span className="mr-2">💔</span>Low Self-Esteem
            </h3>
            <p className="text-gray-600">Feeling like a burden or questioning self-worth due to limitations.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-2 flex items-center">
              <span className="mr-2">😴</span>Sleep Disturbances
            </h3>
            <p className="text-gray-600">Insomnia or poor sleep quality affecting mood and pain levels.</p>
          </div>
        </div>
      </div>

      {/* Communication & Healthcare */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl shadow-lg p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">📞 Communication & Healthcare</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Effective communication with healthcare providers is crucial for managing both pain and mental health aspects of chronic conditions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-green-700 mb-4 flex items-center">
              <span className="mr-2">🗣️</span>Talking to Your Doctor
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Keep a pain and mood diary</li>
              <li>• Be specific about symptoms and triggers</li>
              <li>• Discuss how pain affects your mental health</li>
              <li>• Ask about integrated pain management programs</li>
              <li>• Request referrals to mental health specialists</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-green-700 mb-4 flex items-center">
              <span className="mr-2">🏥</span>Multidisciplinary Care
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span><strong>Pain clinics:</strong> Comprehensive pain assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span><strong>Physiotherapy:</strong> Movement and function improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span><strong>Psychology:</strong> CBT and coping strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span><strong>Occupational therapy:</strong> Daily living adaptations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span><strong>Pharmacology:</strong> Coordinated medication management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Workplace & Daily Life */}
      <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl shadow-lg p-8 border border-teal-200">
        <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">💼 Workplace & Daily Life</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-teal-700 mb-4 flex items-center">
              <span className="mr-2">🏢</span>Workplace Accommodations
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Flexible working hours or remote work options</li>
              <li>• Ergonomic workstation adjustments</li>
              <li>• Regular breaks and modified duties</li>
              <li>• Access to disability support services</li>
              <li>• Understanding from employers and colleagues</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-teal-700 mb-4 flex items-center">
              <span className="mr-2">🏠</span>Daily Living Strategies
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Pace activities to avoid overexertion</li>
              <li>• Use assistive devices and adaptive equipment</li>
              <li>• Plan ahead for challenging tasks</li>
              <li>• Delegate when possible and accept help</li>
              <li>• Create a supportive home environment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Relationships & Social Support */}
      <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl shadow-lg p-8 border border-cyan-200">
        <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">🤝 Relationships & Social Support</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Chronic pain can strain relationships, but strong social support is vital for mental health and wellbeing.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-cyan-800 mb-3 flex items-center">
              <span className="mr-2">💕</span>Maintaining Healthy Relationships:
            </h3>
            <ul className="text-cyan-700 space-y-2">
              <li>• Communicate openly about your needs and limitations</li>
              <li>• Educate loved ones about chronic pain and its impacts</li>
              <li>• Set boundaries to protect your energy</li>
              <li>• Plan social activities that accommodate your condition</li>
              <li>• Seek couples or family counseling if needed</li>
              <li>• Build a support network of understanding people</li>
              <li>• Consider online communities for peer support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Building Resilience */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">💪 Building Resilience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-blue-700 mb-4 flex items-center">
              <span className="mr-2">🌅</span>Daily Habits
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✨</span>
                <span>Maintain a consistent sleep schedule</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✨</span>
                <span>Practice gentle daily movement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✨</span>
                <span>Eat nutritious, anti-inflammatory foods</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✨</span>
                <span>Stay connected with supportive people</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✨</span>
                <span>Engage in meaningful activities</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-blue-700 mb-4 flex items-center">
              <span className="mr-2">🌈</span>Mindset Strategies
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💚</span>
                <span>Practice self-compassion and patience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💚</span>
                <span>Celebrate small victories and progress</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💚</span>
                <span>Reframe challenges as opportunities for growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💚</span>
                <span>Focus on what brings joy and meaning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">💚</span>
                <span>Build a support network of understanding people</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* UK Support Resources */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8 border border-purple-200">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">📞 UK Support Resources</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          You don't have to navigate chronic pain alone. There are many compassionate resources available to support your journey.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-purple-700 mb-4 flex items-center">
              <span className="mr-2">🏥</span>Pain Management Organizations
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>Versus Arthritis:</strong> versusarthritis.org - Arthritis support and information</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>Pain Concern:</strong> painconcern.org.uk - Pain management charity</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>BackCare:</strong> backcare.org.uk - Back pain support</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>Chronic Pain Policy Coalition:</strong> chronicpainpolicy.org - Policy and awareness</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-medium text-purple-700 mb-4 flex items-center">
              <span className="mr-2">💚</span>Mental Health Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>Mind:</strong> mind.org.uk - Mental health support</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>Chronic Illness Bloggers:</strong> chronicillnessbloggers.com - Peer support</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>HealthUnlocked:</strong> healthunlocked.com - Online support communities</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💜</span>
                <span><strong>Local NHS pain clinics:</strong> Contact GP for referral</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Back to Top
        </button>
        <Link href="/adults" className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          ← Back to Adult Support
        </Link>
      </div>
    </div>
  )
}
