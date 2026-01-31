'use client';

import Link from 'next/link';

export default function StressPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-800 mb-4 md:mb-6">🌅 Finding Balance in Stress</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          You're not alone in feeling overwhelmed. Stress and burnout can make everything feel heavy, but there are gentle ways to find your center again.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          Remember: Your well-being matters, and it's okay to take a moment for yourself.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-5 md:p-8 border border-amber-200">
        <h2 className="text-xl md:text-3xl font-semibold text-amber-800 mb-4 md:mb-6 text-center">🧠 Understanding Your Stress Response</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Stress is your body's way of responding to challenges, but when it becomes constant, it can feel exhausting. Learning to recognize and manage it is a powerful step toward well-being.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-orange-800 font-medium mb-4">Key Facts:</p>
          <ul className="text-orange-700 space-y-2">
            <li>• Stress affects everyone at some point in life</li>
            <li>• Can be positive (eustress) or negative (distress)</li>
            <li>• Chronic stress can lead to burnout if not addressed</li>
            <li>• Is manageable with the right strategies and support</li>
            <li>• Early intervention prevents serious health issues</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-8 border border-orange-200">
        <h2 className="text-3xl font-semibold text-red-800 mb-6 text-center">🚨 Recognizing Stress Signals</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Stress can show up in many ways across your body, mind, and behavior. Paying attention to these signs is the first step toward gentle change.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">🏃‍♂️</span>Physical Signs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Headaches or migraines</li>
              <li>• Muscle tension or pain</li>
              <li>• Fatigue or sleep problems</li>
              <li>• Changes in appetite</li>
              <li>• Weakened immune system</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">😟</span>Emotional Signs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Anxiety or irritability</li>
              <li>• Feeling overwhelmed</li>
              <li>• Mood swings</li>
              <li>• Difficulty concentrating</li>
              <li>• Loss of motivation</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">🚶‍♂️</span>Behavioral Signs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Changes in eating habits</li>
              <li>• Increased use of alcohol or drugs</li>
              <li>• Social withdrawal</li>
              <li>• Procrastination</li>
              <li>• Angry outbursts</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">🧠</span>Cognitive Signs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Racing thoughts</li>
              <li>• Poor concentration</li>
              <li>• Forgetfulness</li>
              <li>• Negative thinking</li>
              <li>• Indecisiveness</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-8 border border-red-200">
        <h2 className="text-3xl font-semibold text-red-800 mb-6 text-center">🔥 Understanding Burnout</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Burnout is more than just feeling tired—it's a state of complete emotional, physical, and mental exhaustion from prolonged stress. Recognizing it is the first step toward healing.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-800 mb-3"><span className="mr-2">😔</span>Emotional Exhaustion</h3>
            <p className="text-sm text-orange-700">Feeling drained, overwhelmed, and unable to cope with daily demands.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-800 mb-3"><span className="mr-2">👤</span>Depersonalization</h3>
            <p className="text-sm text-orange-700">Feeling detached from your work, colleagues, or sense of self.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-800 mb-3"><span className="mr-2">📉</span>Reduced Accomplishment</h3>
            <p className="text-sm text-orange-700">Feeling ineffective, lacking achievement, and doubting your abilities.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-xl shadow-lg p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">🌱 Gentle Ways to Manage Stress</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          There are many compassionate ways to ease stress, from quick techniques for immediate relief to ongoing practices for long-term balance.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">⏱️</span>Immediate Relief Techniques</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Deep Breathing:</strong> 4-7-8 technique - inhale for 4, hold for 7, exhale for 8</li>
              <li><strong>Progressive Muscle Relaxation:</strong> Tense and release muscle groups</li>
              <li><strong>Mindfulness:</strong> Focus on the present moment without judgment</li>
              <li><strong>Physical Activity:</strong> Short walk or stretching to release tension</li>
              <li><strong>Grounding:</strong> Use 5-4-3-2-1 technique to stay present</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">🌿</span>Long-term Prevention</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Time Management:</strong> Prioritize tasks and set realistic goals</li>
              <li><strong>Boundaries:</strong> Learn to say no and delegate when possible</li>
              <li><strong>Self-Care:</strong> Regular sleep, nutrition, and relaxation</li>
              <li><strong>Social Support:</strong> Connect with friends, family, or support groups</li>
              <li><strong>Hobbies:</strong> Engage in activities you enjoy outside work</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">💼 Creating Balance at Work</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Work can be a major source of stress, but with gentle adjustments, you can create more harmony between your professional and personal life.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">🏢</span>At Work Strategies</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Take regular breaks throughout the day</li>
              <li>• Organize your workspace for efficiency</li>
              <li>• Communicate openly with supervisors about workload</li>
              <li>• Use time-blocking for focused work periods</li>
              <li>• Practice the "one thing" focus method</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">⚖️</span>Work-Life Balance</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Set clear boundaries between work and personal time</li>
              <li>• Unplug from work emails after hours</li>
              <li>• Schedule personal time and stick to it</li>
              <li>• Plan enjoyable activities outside work</li>
              <li>• Use vacation time to fully disconnect</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-xl shadow-lg p-8 border border-teal-200">
        <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">🌈 Rebuilding After Burnout</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Recovery from burnout is a journey of gentle restoration. Be kind to yourself as you rebuild your energy and find your way back to balance.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-orange-800 mb-4">Recovery Steps:</h3>
          <ol className="text-orange-700 space-y-2">
            <li>1. Recognize the signs and acknowledge burnout</li>
            <li>2. Seek support from trusted people or professionals</li>
            <li>3. Take a break or reduce workload temporarily</li>
            <li>4. Rebuild healthy routines gradually</li>
            <li>5. Address underlying causes and make changes</li>
            <li>6. Practice self-compassion throughout recovery</li>
          </ol>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-blue-800 font-medium flex items-center">
            <span className="mr-2">💡</span>
            Remember: Healing from burnout is not linear. Some days will be easier than others, and that's okay. Small, gentle steps lead to meaningful change.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl shadow-lg p-8 border border-purple-200">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">🤝 UK Support Resources</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          You don't have to navigate stress and burnout alone. There are many compassionate resources available to support your journey.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">🏥</span>Mental Health Organizations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Mind:</strong> mind.org.uk - Stress and mental health support</li>
              <li><strong>Mental Health Foundation:</strong> mentalhealth.org.uk</li>
              <li><strong>Time to Change:</strong> timetochange.org.uk - Anti-stigma campaign</li>
              <li><strong>Stress Management Society:</strong> stress.org.uk</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-orange-700 mb-4"><span className="mr-2">💼</span>Workplace Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>ACAS:</strong> acas.org.uk - Workplace advice</li>
              <li><strong>CIPD:</strong> cipd.co.uk - HR and wellbeing resources</li>
              <li><strong>OH Assist:</strong> ohassist.com - Employee assistance programs</li>
              <li><strong>Samaritans:</strong> 116 123 (24/7 support)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors mr-4"
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