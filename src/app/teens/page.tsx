'use client';

import Link from 'next/link';

export default function TeensPage() {
  return (
    <div id="top" className="space-y-8 md:space-y-12">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-3 md:mb-4">🧠 Teen Support</h1>
        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
          Support for teenagers navigating mental health challenges, identity, relationships, and the pressures of growing up.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-5 md:p-8 border border-blue-100">
        <h2 className="text-xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-8 flex items-center">
          <span className="mr-2">🧠</span> Mental Health Topics
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-8 leading-relaxed">Click on any topic below to explore detailed information, self-help strategies, and available support services.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/the-wellbeing-corner/teens/anxiety" className="block bg-gradient-to-br from-blue-50 to-cyan-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-4 md:p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2 flex items-center">
              <span className="mr-2">😰</span> Anxiety & Worry
            </h3>
            <p className="text-gray-700 text-sm md:text-base">Managing anxiety and excessive worry</p>
          </a>
          <a href="/the-wellbeing-corner/teens/depression" className="block bg-gradient-to-br from-green-50 to-emerald-50 hover:bg-green-100 border border-green-200 rounded-xl p-4 md:p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2 flex items-center">
              <span className="mr-2">😔</span> Depression & Low Mood
            </h3>
            <p className="text-gray-700 text-sm md:text-base">Understanding depression and recovery</p>
          </a>
          <a href="/the-wellbeing-corner/teens/stress" className="block bg-gradient-to-br from-purple-50 to-violet-50 hover:bg-purple-100 border border-purple-200 rounded-xl p-4 md:p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 flex items-center">
              <span className="mr-2">📚</span> School & Exam Stress
            </h3>
            <p className="text-gray-700 text-sm md:text-base">Coping with academic pressure</p>
          </a>
          <a href="/the-wellbeing-corner/teens/identity" className="block bg-gradient-to-br from-orange-50 to-yellow-50 hover:bg-orange-100 border border-orange-200 rounded-xl p-4 md:p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-orange-800 mb-2 flex items-center">
              <span className="mr-2">🌈</span> Identity & Self-Discovery
            </h3>
            <p className="text-gray-700 text-sm md:text-base">Exploring who you are</p>
          </a>
          <a href="/the-wellbeing-corner/teens/relationships" className="block bg-gradient-to-br from-pink-50 to-rose-50 hover:bg-pink-100 border border-pink-200 rounded-xl p-4 md:p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-pink-800 mb-2 flex items-center">
              <span className="mr-2">👥</span> Relationships & Friendships
            </h3>
            <p className="text-gray-700 text-sm md:text-base">Navigating social connections</p>
          </a>
          <a href="/the-wellbeing-corner/teens/body-image" className="block bg-gradient-to-br from-lime-50 to-green-50 hover:bg-lime-100 border border-lime-200 rounded-xl p-4 md:p-6 transition-colors duration-200 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-lime-800 mb-2 flex items-center">
              <span className="mr-2">✨</span> Body Image & Self-Esteem
            </h3>
            <p className="text-gray-700 text-sm md:text-base">Building positive self-image</p>
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-5 md:p-8 border border-yellow-100">
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
            <h3 className="text-2xl font-medium text-primary-600 mb-6">Teen-Specific Strategies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Social Media Balance</h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">Set time limits on social media and take regular breaks. Remember that social media often shows curated, unrealistic versions of life. Focus on real-life connections.</p>
                <p className="text-base font-medium text-gray-600 leading-relaxed">Benefits: Reduced anxiety, improved self-esteem, better sleep quality.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Exam Stress Management</h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">Break study sessions into manageable chunks using the Pomodoro technique. Take regular breaks and ensure you're getting enough sleep. Remember that one exam doesn't define your worth.</p>
                <p className="text-base font-medium text-gray-600 leading-relaxed">Benefits: Better concentration, reduced anxiety, improved performance.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Building Resilience</h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">Develop coping skills for dealing with setbacks. Practice positive self-talk and learn from challenges rather than being defeated by them. Build a support network of trusted friends and family.</p>
                <p className="text-base font-medium text-gray-600 leading-relaxed">Benefits: Increased confidence, better problem-solving, emotional strength.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Creative Expression</h4>
                <p className="text-base font-medium text-gray-700 mb-4 leading-relaxed">Express yourself through art, music, writing, or other creative outlets. These activities can help process emotions and reduce stress. Find what works best for you.</p>
                <p className="text-base font-medium text-gray-600 leading-relaxed">Benefits: Emotional release, stress reduction, self-discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg p-8 border border-indigo-100">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8 flex items-center">
          <span className="mr-3">🤝</span> UK Resources and Support
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
            <h3 className="text-lg font-medium text-red-600 mb-3 flex items-center">
              <span className="mr-2">🚨</span> Emergency Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-red-700">Samaritans:</strong> 116 123 (24/7 support)</li>
              <li><strong className="text-red-700">Childline:</strong> 0800 1111 (for under 19s)</li>
              <li><strong className="text-red-700">NHS 111:</strong> For urgent medical help</li>
              <li><strong className="text-red-700">Shout:</strong> Text SHOUT to 85258</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-medium text-blue-600 mb-3 flex items-center">
              <span className="mr-2">👥</span> Teen Mental Health Organizations
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-blue-700">YoungMinds:</strong> youngminds.org.uk</li>
              <li><strong className="text-blue-700">Mind (Young People):</strong> mind.org.uk</li>
              <li><strong className="text-blue-700">The Mix:</strong> themix.org.uk</li>
              <li><strong className="text-blue-700">Papyrus:</strong> papyrus-uk.org</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-medium text-green-600 mb-3 flex items-center">
              <span className="mr-2">🏫</span> School Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-green-700">School Counsellor:</strong> Talk to your school's counsellor</li>
              <li><strong className="text-green-700">GP:</strong> Make an appointment with your doctor</li>
              <li><strong className="text-green-700">CAMHS:</strong> Child and Adolescent Mental Health Services</li>
              <li><strong className="text-green-700">School Nurse:</strong> Available at most schools</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-lg font-medium text-purple-600 mb-3 flex items-center">
              <span className="mr-2">💻</span> Online Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-purple-700">Kooth:</strong> Online counselling for young people</li>
              <li><strong className="text-purple-700">Bullying UK:</strong> bullying.co.uk</li>
              <li><strong className="text-purple-700">Beat (Eating Disorders):</strong> beateatingdisorders.org.uk</li>
              <li><strong className="text-purple-700">Self-Injury Support:</strong> selfinjurysupport.org.uk</li>
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