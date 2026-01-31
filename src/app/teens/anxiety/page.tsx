'use client';

import Link from 'next/link';

export default function TeenAnxietyPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 text-center shadow-lg">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">😰 Managing Anxiety & Worry</h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-6">
          Anxiety is a common experience for teens, but it doesn't have to control your life. You're not alone, and there are proven strategies to help you find calm.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Remember: Your worry is valid, and you have the strength to work through this. Let's explore coping strategies together.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">😰 What is Anxiety?</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Anxiety is your body's natural response to stress, but when it becomes excessive or persistent, it can interfere with school, friendships, and daily life. 
          For teenagers, anxiety often shows up as worry about school, social situations, or the future.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-blue-800 font-medium mb-4">Key Facts About Teen Anxiety:</p>
          <ul className="text-blue-700 space-y-2">
            <li>• Affects 1 in 6 young people</li>
            <li>• Can be triggered by school pressure, social media, or life changes</li>
            <li>• Is highly treatable with the right support and strategies</li>
            <li>• Many successful people experience anxiety</li>
            <li>• It's not your fault, and you're not weak for feeling this way</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8 border border-cyan-200">
        <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">💭 Common Symptoms</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Anxiety shows up differently for everyone. You might experience physical symptoms in your body, emotional feelings, or both. 
          Understanding your personal anxiety signs is the first step to managing them.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center">
              <span className="mr-2">💪</span> Physical Symptoms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Racing heartbeat</li>
              <li>• Sweating or trembling</li>
              <li>• Feeling dizzy or lightheaded</li>
              <li>• Stomach aches or nausea</li>
              <li>• Difficulty sleeping</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center">
              <span className="mr-2">🧠</span> Emotional Symptoms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Constant worry or fear</li>
              <li>• Feeling on edge or restless</li>
              <li>• Irritability</li>
              <li>• Difficulty concentrating</li>
              <li>• Avoiding certain situations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl shadow-lg p-8 border border-teal-200">
        <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">🎯 Coping Strategies</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          There are many proven techniques to help you manage anxiety. Find what works best for you and practice regularly.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-teal-700 mb-3 flex items-center">
              <span className="mr-2">🫁</span> Breathing Exercises
            </h3>
            <p className="text-gray-700 mb-3">Try the 4-7-8 breathing technique: Inhale for 4 counts, hold for 7, exhale for 8. This helps activate your body's relaxation response.</p>
            <p className="text-sm text-gray-600">Practice this when you feel anxious or before stressful situations.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-teal-700 mb-3 flex items-center">
              <span className="mr-2">🌍</span> Grounding Techniques
            </h3>
            <p className="text-gray-700 mb-3">Use the 5-4-3-2-1 method: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.</p>
            <p className="text-sm text-gray-600">This brings your focus back to the present moment.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-teal-700 mb-3 flex items-center">
              <span className="mr-2">💡</span> Challenge Negative Thoughts
            </h3>
            <p className="text-gray-700 mb-3">When you have anxious thoughts like "What if I fail?", ask yourself: What's the evidence for and against this thought? What's the worst that could happen?</p>
            <p className="text-sm text-gray-600">This helps put worries into perspective.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-teal-700 mb-3 flex items-center">
              <span className="mr-2">🚀</span> Build Confidence Gradually
            </h3>
            <p className="text-gray-700 mb-3">Start with small challenges and gradually work up to bigger ones. Celebrate each success, no matter how small.</p>
            <p className="text-sm text-gray-600">This is called exposure therapy and helps reduce avoidance behaviors.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">⚠️ When to Seek Help</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          It's important and brave to reach out for help. You should consider speaking with a trusted adult if:
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3">✓</span>
              <span>Anxiety is interfering with school or daily activities</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3">✓</span>
              <span>Physical symptoms persist and won't go away</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3">✓</span>
              <span>It's making it hard to sleep, eat, or enjoy things</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3">✓</span>
              <span>You're avoiding friends, school, or normal activities</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3">✓</span>
              <span>Anxiety has lasted for more than 2 weeks</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-4"
        >
          Back to Top
        </button>
        <Link href="/teens" className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          ← Back to Teen Support
        </Link>
      </div>
    </div>
  )
}