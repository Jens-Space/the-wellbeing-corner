'use client';

import Link from 'next/link';

export default function AdultsPage() {
  return (
    <div id="top" className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-700 mb-4">🌱 Your Mental Health Journey</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compassionate support for navigating life's challenges - you're not alone.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-700 mb-8 flex items-center">
          <span className="mr-3">🧠</span> Mental Health Topics
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">Click on any topic below to explore detailed information, self-help strategies, and available support services.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <a href="/the-wellbeing-corner/adults/depression" className="block bg-gradient-to-br from-yellow-50 to-orange-50 hover:bg-yellow-100 border border-yellow-200 rounded-xl p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
              <span className="mr-2">😔</span> Depression & Low Mood
            </h3>
            <p className="text-gray-700">Understanding depression, symptoms, and recovery strategies</p>
          </a>
          <a href="/the-wellbeing-corner/adults/anxiety" className="block bg-gradient-to-br from-green-50 to-emerald-50 hover:bg-green-100 border border-green-200 rounded-xl p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
              <span className="mr-2">😰</span> Anxiety & Panic
            </h3>
            <p className="text-gray-700">Managing anxiety disorders and panic attacks</p>
          </a>
          <a href="/the-wellbeing-corner/adults/ptsd" className="block bg-gradient-to-br from-purple-50 to-indigo-50 hover:bg-purple-100 border border-purple-200 rounded-xl p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
              <span className="mr-2">🌪️</span> PTSD & Trauma
            </h3>
            <p className="text-gray-700">Healing from trauma and post-traumatic stress</p>
          </a>
          <a href="/the-wellbeing-corner/adults/stress" className="block bg-gradient-to-br from-orange-50 to-red-50 hover:bg-orange-100 border border-orange-200 rounded-xl p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
              <span className="mr-2">⚡</span> Stress & Burnout
            </h3>
            <p className="text-gray-700">Coping with stress and preventing burnout</p>
          </a>
          <a href="/the-wellbeing-corner/adults/grief" className="block bg-gradient-to-br from-cyan-50 to-blue-50 hover:bg-cyan-100 border border-cyan-200 rounded-xl p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-xl font-bold text-cyan-800 mb-3 flex items-center">
              <span className="mr-2">💔</span> Grief & Loss
            </h3>
            <p className="text-gray-700">Navigating bereavement and loss</p>
          </a>
          <a href="/the-wellbeing-corner/adults/chronic-pain" className="block bg-gradient-to-br from-red-50 to-pink-50 hover:bg-red-100 border border-red-200 rounded-xl p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
              <span className="mr-2">🤕</span> Chronic Pain & Mental Health
            </h3>
            <p className="text-gray-700">Managing mental health with chronic conditions</p>
          </a>
          <a href="/the-wellbeing-corner/adults/invisible-illness" className="block bg-gradient-to-br from-lime-50 to-green-50 hover:bg-lime-100 border border-lime-200 rounded-xl p-6 transition-colors duration-200 shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-lime-800 mb-3 flex items-center">
              <span className="mr-2">👻</span> Invisible Illness
            </h3>
            <p className="text-gray-700">Living with conditions others can't see</p>
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-8 border border-yellow-100">
        <h2 className="text-3xl font-semibold text-orange-700 mb-8 flex items-center">
          <span className="mr-3">🌟</span> Self-Help Strategies
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-medium text-primary-600 mb-6">Daily Wellness Practices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <span className="mr-2">🧘</span> Mindfulness and Meditation
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">Regular mindfulness practice helps you stay present and reduce anxiety. Start with 5-minute daily sessions using apps like Headspace or Calm. Focus on your breath and observe thoughts without judgment.</p>
                <p className="text-base font-medium text-blue-600 leading-relaxed">Benefits: Reduced stress, improved focus, better emotional regulation.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">😴</span> Sleep Hygiene
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">Establish a consistent sleep schedule and create a relaxing bedtime routine. Avoid screens an hour before bed and ensure your bedroom is cool, dark, and quiet.</p>
                <p className="text-base font-medium text-indigo-600 leading-relaxed">Benefits: Better mood regulation, improved cognitive function, increased energy.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <span className="mr-2">⚽</span> Physical Activity
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">Regular exercise releases endorphins that naturally improve mood. Even a 20-minute walk daily can make a difference. Choose activities you enjoy to make it sustainable.</p>
                <p className="text-base font-medium text-green-600 leading-relaxed">Benefits: Reduced depression symptoms, improved self-esteem, better physical health.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                  <span className="mr-2">🥗</span> Healthy Eating
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">A balanced diet supports brain function and mood. Include fruits, vegetables, whole grains, and stay hydrated. Limit sugary drinks and processed foods.</p>
                <p className="text-base font-medium text-orange-600 leading-relaxed">Benefits: Stabilized mood, better concentration, improved overall well-being.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-4">Crisis Management Techniques</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Breathing Exercises</h4>
                <p className="text-sm text-gray-700 mb-3">The 4-7-8 technique: Inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system, reducing anxiety and promoting calm.</p>
                <p className="text-sm text-gray-600">Use during: Panic attacks, acute anxiety, before stressful situations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Grounding Techniques</h4>
                <p className="text-sm text-gray-700 mb-3">Use the 5-4-3-2-1 method: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This brings you back to the present moment.</p>
                <p className="text-sm text-gray-600">Use during: Dissociation, panic attacks, overwhelming emotions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Safety Planning</h4>
                <p className="text-sm text-gray-700 mb-3">Create a personalized plan with coping strategies, warning signs to watch for, and emergency contacts. Include both internal coping skills and external support resources.</p>
                <p className="text-sm text-gray-600">Benefits: Provides structure during crises, reduces impulsive actions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Building Support Networks</h4>
                <p className="text-sm text-gray-700 mb-3">Identify trusted people you can reach out to during difficult times. This might include friends, family, or support groups. Practice asking for help in low-stress times.</p>
                <p className="text-sm text-gray-600">Benefits: Reduces isolation, provides perspective, emotional validation.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-primary-600 mb-6">Cognitive Strategies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Challenging Negative Thoughts</h4>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">When you notice a negative thought like "I'm worthless," ask: Is this thought based on facts or assumptions? What evidence supports or contradicts it? Replace with balanced alternatives.</p>
                <p className="text-base text-gray-600 leading-relaxed">Benefits: Reduces anxiety, improves self-esteem, more realistic thinking.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Self-Compassion Practice</h4>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">Treat yourself with the same kindness you'd offer a friend. Practice phrases like "This is difficult" and "I'm doing my best." Acknowledge your struggles without self-judgment.</p>
                <p className="text-base text-gray-600 leading-relaxed">Benefits: Reduced self-criticism, increased resilience, better emotional regulation.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Goal Setting</h4>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">Break large goals into small, achievable steps. Use SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound). Celebrate small wins to build momentum.</p>
                <p className="text-base text-gray-600 leading-relaxed">Benefits: Increased motivation, sense of accomplishment, improved self-efficacy.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Problem-Solving Framework</h4>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">Define the problem clearly, brainstorm solutions, evaluate options, choose one, implement it, and review results. This structured approach reduces feeling overwhelmed.</p>
                <p className="text-base text-gray-600 leading-relaxed">Benefits: Better decision-making, reduced anxiety, increased control.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary-600 mb-4">Relationship Building</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Communication Skills</h4>
                <p className="text-sm text-gray-700 mb-3">Use "I" statements to express feelings without blame: "I feel anxious when..." Practice active listening by paraphrasing what others say to show understanding.</p>
                <p className="text-sm text-gray-600">Benefits: Better conflict resolution, stronger relationships, reduced misunderstandings.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Setting Boundaries</h4>
                <p className="text-sm text-gray-700 mb-3">Identify your limits and communicate them clearly. It's okay to say "no" to requests that would overwhelm you. Boundaries protect your mental health and energy.</p>
                <p className="text-sm text-gray-600">Benefits: Reduced stress, better self-care, healthier relationships.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Building Social Connections</h4>
                <p className="text-sm text-gray-700 mb-3">Start small by joining interest-based groups or online communities. Schedule regular social activities, even if you don't feel like it initially. Quality connections matter more than quantity.</p>
                <p className="text-sm text-gray-600">Benefits: Reduced isolation, increased support, improved mood.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Seeking and Accepting Support</h4>
                <p className="text-sm text-gray-700 mb-3">Practice vulnerability by sharing your struggles with trusted people. Accept help graciously and reciprocate when possible. Remember that asking for help is a sign of strength.</p>
                <p className="text-sm text-gray-600">Benefits: Emotional relief, practical assistance, stronger relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-teal-100">
        <h2 className="text-3xl font-semibold text-teal-700 mb-8 flex items-center">
          <span className="mr-3">👨‍⚕️</span> Professional Help
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-primary-600 mb-2">When to Seek Professional Support</h3>
            <p className="text-gray-700 text-sm mb-3">Recognizing when self-help strategies aren't enough and professional intervention is needed.</p>
            <ul className="space-y-1 text-sm text-gray-700 ml-4">
              <li>• Symptoms persist despite self-help efforts</li>
              <li>• Daily functioning is significantly impaired</li>
              <li>• Thoughts of self-harm or suicide</li>
              <li>• Substance use affecting mental health</li>
              <li>• Trauma responses interfering with life</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-600 mb-2">Types of Professional Support</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Therapy Options:</strong>
                <ul className="mt-1 space-y-1 ml-4">
                  <li>• Cognitive Behavioral Therapy (CBT)</li>
                  <li>• Counselling</li>
                  <li>• Psychotherapy</li>
                  <li>• Eye Movement Desensitization and Reprocessing (EMDR)</li>
                </ul>
              </div>
              <div>
                <strong>Medical Support:</strong>
                <ul className="mt-1 space-y-1 ml-4">
                  <li>• GP assessment and medication</li>
                  <li>• Psychiatric evaluation</li>
                  <li>• Community Mental Health Teams</li>
                  <li>• Crisis intervention services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-100">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8 flex items-center">
          <span className="mr-3">🤝</span> UK Resources and Support
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-primary-600 mb-3">Emergency Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Samaritans:</strong> 116 123 (24/7 support)</li>
              <li><strong>NHS 111:</strong> For urgent medical help</li>
              <li><strong>Emergency Services:</strong> 999 for immediate danger</li>
              <li><strong>Shout:</strong> Text SHOUT to 85258</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-600 mb-3">Mental Health Organizations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Mind:</strong> mind.org.uk</li>
              <li><strong>Mental Health Foundation:</strong> mentalhealth.org.uk</li>
              <li><strong>Rethink Mental Illness:</strong> rethink.org</li>
              <li><strong>Anxiety UK:</strong> anxietyuk.org.uk</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-600 mb-3">Specialized Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>PTSD UK:</strong> ptsduk.org</li>
              <li><strong>Depression Alliance:</strong> depressionalliance.org</li>
              <li><strong>No Panic:</strong> nopanic.org.uk</li>
              <li><strong>Cruse Bereavement:</strong> cruse.org.uk</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-600 mb-3">Finding Local Help</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>IAPT Services:</strong> NHS talking therapies</li>
              <li><strong>Local Mental Health Teams:</strong> Via GP</li>
              <li><strong>Charitable Organizations:</strong> Local branches</li>
              <li><strong>Employee Assistance Programs:</strong> Through work</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
        >
          Back to Top
        </button>
        <Link href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Home
        </Link>
      </div>
    </div>
  )
}