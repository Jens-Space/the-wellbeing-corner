'use client';

import Link from 'next/link';

export default function ChronicIllnessPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-teal-800 mb-3 md:mb-4">💚 Living with Chronic Illness</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
          Chronic illness affects not just your body, but your emotions, identity, and daily life. Your feelings are valid, and you're not alone.
        </p>
        <p className="text-base md:text-lg text-gray-600">Understanding the emotional side of chronic illness can help you build resilience and find peace.</p>
      </div>

      {/* Understanding Chronic Illness */}
      <div className="bg-white rounded-lg shadow-md p-5 md:p-8 border border-teal-100">
        <h2 className="text-xl md:text-3xl font-semibold text-teal-800 mb-2 text-center">🌍 Understanding Chronic Illness & Mental Health</h2>
        <p className="text-center text-gray-600 mb-6 italic">The body and mind are deeply connected</p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Chronic illness is any health condition lasting 3+ months. Common examples include diabetes, autoimmune disorders, chronic pain, ME/CFS, long COVID, arthritis, fibromyalgia, and cancer recovery. Beyond the physical symptoms, chronic illness often brings emotional challenges too.
        </p>
        <p className="text-gray-700 mb-6">It's completely normal to experience grief, frustration, anxiety, and depression when living with a long-term health condition. These feelings aren't weakness—they're a natural response to a genuinely difficult situation.</p>

        <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
          <p className="text-teal-800 font-bold text-lg mb-4">📊 Important Facts:</p>
          <ul className="text-teal-700 space-y-2">
            <li>✓ People with chronic illness are 2-3x more likely to experience depression and anxiety</li>
            <li>✓ This is not your fault—it's a well-documented connection</li>
            <li>✓ Managing mental health improves physical wellbeing outcomes</li>
            <li>✓ You can have both a chronic illness AND good quality of life</li>
            <li>✓ Many people discover strength and resilience through their journey</li>
          </ul>
        </div>
      </div>

      {/* Common Emotional Challenges */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-800 mb-2 text-center">💭 Common Emotional Challenges</h2>
        <p className="text-center text-gray-600 mb-6">You're not imagining these feelings—they're a natural response</p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">😔 Grief & Loss</h3>
            <p className="text-gray-700">Grieving the life you imagined, energy you've lost, or activities you can no longer do. This is real and valid grief.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-800 mb-2">😰 Anxiety & Fear</h3>
            <p className="text-gray-700">Worry about worsening symptoms, medical procedures, financial strain, or an uncertain future. Fear is understandable given your reality.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
            <h3 className="text-xl font-bold text-red-800 mb-2">😤 Frustration & Anger</h3>
            <p className="text-gray-700">Frustration at your body's limitations, angry at the situation, or resentment toward those without illness. These are valid emotions.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-pink-400">
            <h3 className="text-xl font-bold text-pink-800 mb-2">😞 Depression & Hopelessness</h3>
            <p className="text-gray-700">Persistent low mood, exhaustion, loss of interest, or feeling like things won't improve. This is common and treatable.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-400">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">😕 Identity Changes</h3>
            <p className="text-gray-700">Struggling with who you are now, feeling defined by your illness, or losing your sense of self. Your identity is still you, even with illness.</p>
          </div>
        </div>
      </div>

      {/* The Mind-Body Connection */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-teal-100">
        <h2 className="text-3xl font-semibold text-teal-800 mb-4 text-center">🧠 The Mind-Body Connection</h2>
        <p className="text-gray-700 mb-4">Your emotions directly affect physical symptoms:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-blue-800 mb-2">🔄 Stress & Symptoms</p>
            <p className="text-gray-700 text-sm">Anxiety and stress worsen pain, fatigue, and inflammation. Chronic stress keeps your nervous system in "fight or flight."</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">😊 Emotional Support Helps</p>
            <p className="text-gray-700 text-sm">Managing mental health reduces symptom severity, improves sleep, and boosts immune function. Your mind is part of your healing.</p>
          </div>
        </div>
      </div>

      {/* Coping Strategies */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-100">
        <h2 className="text-3xl font-semibold text-green-800 mb-4 text-center">💪 Coping Strategies & Self-Care</h2>
        <p className="text-gray-700 mb-6 text-center">Build your resilience toolkit with what works for YOUR body</p>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-green-800 mb-2">🧘 Gentle Movement & Pacing</h3>
            <p className="text-gray-700 mb-2">Not all exercise is high-intensity. Gentle options include stretching, tai chi, swimming, or walking at your own pace. Pacing (doing activities gradually) prevents symptom flares.</p>
            <p className="text-sm text-green-600">✓ Even 5-10 minutes counts</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-teal-800 mb-2">🌬️ Breathing & Relaxation Techniques</h3>
            <p className="text-gray-700 mb-2">Deep breathing, progressive muscle relaxation, or meditation calm your nervous system and reduce stress-related pain and anxiety.</p>
            <p className="text-sm text-teal-600">✓ Practice when calm, use when stressed</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-blue-800 mb-2">📝 Journaling & Expression</h3>
            <p className="text-gray-700 mb-2">Writing about emotions, pain patterns, or gratitude helps process feelings and identify triggers. Creativity (art, music) offers emotional outlet.</p>
            <p className="text-sm text-blue-600">✓ No judgment, just expression</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-purple-800 mb-2">🎯 Goal Setting & Acceptance</h3>
            <p className="text-gray-700 mb-2">Set realistic, small goals that match your energy levels. Accept what you can't change today while working toward small improvements.</p>
            <p className="text-sm text-purple-600">✓ Flexibility is key—adjust as needed</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-pink-800 mb-2">👥 Connection & Community</h3>
            <p className="text-gray-700 mb-2">Connect with others who understand (online support groups, local communities, or friends). Reducing isolation improves mental and physical health.</p>
            <p className="text-sm text-pink-600">✓ You don't have to do this alone</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-orange-800 mb-2">😴 Sleep & Routine</h3>
            <p className="text-gray-700 mb-2">Prioritize sleep as medicine. Consistent routines (even gentle ones) provide structure and predictability that reduces anxiety.</p>
            <p className="text-sm text-orange-600">✓ Rest is productive for healing</p>
          </div>
        </div>
      </div>

      {/* Professional Support */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-indigo-100">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">🤝 Professional Support Options</h2>
        <p className="text-gray-700 mb-6">Seeking help is strength, not weakness</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-indigo-800 mb-2">💊 Medical Support</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ GP—discuss mental health alongside physical symptoms</li>
              <li>✓ Chronic illness clinics—specialized, holistic care</li>
              <li>✓ Pain management specialists—often include psychological support</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-2">🧠 Therapy & Counselling</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ CBT (Cognitive Behavioral Therapy)—helpful for pain and anxiety</li>
              <li>✓ Acceptance & Commitment Therapy (ACT)—build meaningful life with illness</li>
              <li>✓ Counselling—process emotions and grief</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Living Well */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-8 border border-pink-100">
        <h2 className="text-3xl font-semibold text-rose-800 mb-2 text-center">🌈 Living Well with Chronic Illness</h2>
        <p className="text-center text-gray-600 mb-6">Recovery isn't about "getting your old life back"—it's about building a meaningful life now</p>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">🎯 Redefine Your Goals</h3>
            <p className="text-gray-700">What brings you joy now? What's meaningful? Goals can be tiny and still valuable (making a phone call, enjoying a meal, resting without guilt).</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-green-400">
            <h3 className="text-lg font-bold text-green-800 mb-2">💚 Practice Self-Compassion</h3>
            <p className="text-gray-700">Treat yourself as you would a good friend. You're dealing with a genuinely difficult situation. Rest isn't laziness. Asking for help isn't burden.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-400">
            <h3 className="text-lg font-bold text-blue-800 mb-2">🌟 Find Meaning & Purpose</h3>
            <p className="text-gray-700">Many people find unexpected meaning through illness—helping others, creative pursuits, spiritual growth, or simply presence in the moment.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-400">
            <h3 className="text-lg font-bold text-purple-800 mb-2">🤝 Build Your Support Network</h3>
            <p className="text-gray-700">Be honest about your needs. Allow others to help. Connection—whether in-person or online—is crucial medicine.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-pink-400">
            <h3 className="text-lg font-bold text-pink-800 mb-2">✨ Celebrate Small Wins</h3>
            <p className="text-gray-700">Getting through a difficult day? That's a win. Trying something new? That's progress. Your victories might look different than before, and that's okay.</p>
          </div>
        </div>
      </div>

      {/* UK Support & Resources */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl shadow-lg p-8 border border-sky-100">
        <h2 className="text-3xl font-semibold text-sky-800 mb-2 text-center">🌐 UK Support & Resources</h2>
        <p className="text-center text-gray-600 mb-6">Help is available—you don't have to manage alone</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-3">🏥 NHS & Medical Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Your GP:</strong> Starting point for mental health support and referrals</li>
              <li><strong>IAPT Services:</strong> NHS talking therapies for anxiety and depression</li>
              <li><strong>Chronic Illness Clinics:</strong> Often include psychological support</li>
              <li><strong>Community Mental Health Teams:</strong> Via GP referral</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3">💙 Charities & Organizations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Action for M.E.:</strong> ME/CFS support (actionforme.org.uk)</li>
              <li><strong>Mind:</strong> Mental health information (mind.org.uk)</li>
              <li><strong>Pain Concern:</strong> Chronic pain support (painconcern.org.uk)</li>
              <li><strong>Long COVID Support:</strong> Community resources (longcovidwales.org)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3">💬 Online Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Online Communities:</strong> Find people with similar conditions</li>
              <li><strong>NHS Every Mind Matters:</strong> Digital mental health support</li>
              <li><strong>Peer Support Forums:</strong> Connect with others who understand</li>
              <li><strong>Apps:</strong> Mindfulness, pacing, and wellness apps</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-red-700 mb-3">🆘 Crisis & Urgent Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Samaritans:</strong> 116 123 (24/7, any distress)</li>
              <li><strong>NHS 111:</strong> Urgent mental health advice</li>
              <li><strong>Emergency Services:</strong> 999 for immediate danger</li>
              <li><strong>Crisis Texting:</strong> Text SHOUT to 85258</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base"
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
