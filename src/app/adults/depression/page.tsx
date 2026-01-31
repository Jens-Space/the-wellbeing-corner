'use client';

import Link from 'next/link';

export default function DepressionPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4 md:mb-6">💙 Finding Light in Depression</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          You're not alone in this darkness. Depression can feel overwhelming, but there are gentle paths toward healing and hope.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          Remember: Your feelings are valid, and brighter days are possible.
        </p>
      </div>

      {/* What is Depression */}
      <div className="bg-white rounded-lg shadow-md p-5 md:p-8">
        <h2 className="text-xl md:text-3xl font-semibold text-blue-800 mb-4 md:mb-6 text-center">💙 Understanding Depression</h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Depression is more than just feeling sad or having a bad day. It's a serious mental health condition that affects how you feel, think, and handle daily activities. Depression can make it difficult to function at work, maintain relationships, or enjoy life.
        </p>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          But here's the important thing: depression is not a character flaw or weakness. It's a medical condition that can happen to anyone, and it's treatable. Many people recover fully and go on to live fulfilling lives.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-semibold text-lg mb-4">🌟 Hopeful Facts:</p>
          <ul className="text-blue-700 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">💪</span>
              <span>Affects over 300 million people worldwide - you're not alone</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">🌈</span>
              <span>Can affect anyone, regardless of age, gender, or background</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">🩺</span>
              <span>Is treatable with the right support and treatment</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✨</span>
              <span>Recovery is possible with proper care and time</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-8 border border-indigo-200">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">🧠 Recognizing Depression's Signs</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Depression can manifest in many ways across your emotions, body, thoughts, and actions. Understanding these signs is a compassionate step toward healing.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-4"><span className="mr-2">😢</span>Emotional Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Persistent sadness or low mood</li>
              <li>• Loss of interest in activities once enjoyed</li>
              <li>• Feelings of hopelessness or worthlessness</li>
              <li>• Irritability or anger</li>
              <li>• Difficulty experiencing pleasure</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-4"><span className="mr-2">🏃‍♂️</span>Physical Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Changes in sleep patterns</li>
              <li>• Changes in appetite or weight</li>
              <li>• Fatigue or low energy</li>
              <li>• Headaches or digestive issues</li>
              <li>• Slowed movements or speech</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-4"><span className="mr-2">🧠</span>Cognitive Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Difficulty concentrating</li>
              <li>• Memory problems</li>
              <li>• Negative thinking patterns</li>
              <li>• Indecisiveness</li>
              <li>• Suicidal thoughts</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-4"><span className="mr-2">🚶‍♂️</span>Behavioral Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Social withdrawal</li>
              <li>• Neglecting responsibilities</li>
              <li>• Changes in daily routines</li>
              <li>• Increased substance use</li>
              <li>• Self-harm behaviors</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">🔍 Understanding Causes and Risk Factors</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Biological Factors</h3>
            <p className="text-gray-700">Imbalances in brain chemicals (neurotransmitters), genetic predisposition, and hormonal changes can contribute to depression.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Environmental Factors</h3>
            <p className="text-gray-700">Stressful life events, trauma, chronic illness, relationship problems, work stress, or financial difficulties can trigger depression.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Psychological Factors</h3>
            <p className="text-gray-700">Negative thinking patterns, low self-esteem, perfectionism, or unresolved emotional issues can contribute to depression.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">🌟 Gentle Self-Help Strategies</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-blue-700 mb-4">Daily Wellness Practices</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Exercise Regularly</h4>
                <p className="text-sm text-blue-700">Physical activity releases endorphins that naturally improve mood. Aim for 30 minutes of moderate exercise most days.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Maintain Sleep Routine</h4>
                <p className="text-sm text-blue-700">Establish consistent sleep patterns. Create a relaxing bedtime routine and avoid screens before bed.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Healthy Eating</h4>
                <p className="text-sm text-blue-700">Eat balanced meals with plenty of fruits, vegetables, and omega-3 rich foods that support brain health.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Social Connection</h4>
                <p className="text-sm text-blue-700">Stay connected with supportive friends and family. Even small interactions can help combat isolation.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-blue-700 mb-4">Cognitive Strategies</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Challenge Negative Thoughts</h4>
                <p className="text-sm text-green-700 mb-2">When you notice thoughts like "I'm worthless," ask yourself: What evidence supports this? What evidence contradicts it?</p>
                <p className="text-sm text-green-600">Practice: Keep a thought diary to track and reframe negative thinking patterns.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Practice Self-Compassion</h4>
                <p className="text-sm text-green-700 mb-2">Treat yourself with the same kindness you'd offer a friend. Replace self-criticism with understanding.</p>
                <p className="text-sm text-green-600">Practice: Use phrases like "This is difficult" and "I'm doing my best."</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-blue-700 mb-4">Behavioral Activation</h3>
            <p className="text-gray-700 mb-3">Depression often leads to inactivity, which worsens symptoms. Behavioral activation involves scheduling enjoyable or meaningful activities.</p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Getting Started</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Start small: Schedule one activity per day</li>
                <li>• Choose activities you used to enjoy</li>
                <li>• Include social activities when possible</li>
                <li>• Track your activities and mood</li>
                <li>• Be patient - mood improvement follows action</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">🩺 Professional Treatment Options</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Cognitive Behavioral Therapy (CBT)</h3>
            <p className="text-gray-700">Most effective treatment for depression. Helps identify and change negative thought patterns and behaviors. Usually 6-20 weekly sessions.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Medication</h3>
            <p className="text-gray-700">Antidepressants can help balance brain chemicals. Often most effective when combined with therapy. Requires medical supervision.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Counselling</h3>
            <p className="text-gray-700">Provides a safe space to explore feelings and experiences. Can be helpful for mild to moderate depression.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Other Therapies</h3>
            <p className="text-gray-700">Interpersonal therapy, mindfulness-based cognitive therapy, or group therapy may also be beneficial.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">🌈 Recovery and Hope</h2>
        <p className="text-blue-700 text-lg mb-8 text-center leading-relaxed">
          Depression is treatable, and recovery is possible. Many people experience multiple episodes, but with proper management and support, you can live a fulfilling life.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-800 font-medium mb-4">Remember:</p>
          <ul className="text-gray-700 space-y-2">
            <li>• You're not alone - depression affects millions</li>
            <li>• Recovery takes time - be patient with yourself</li>
            <li>• Small steps lead to big changes</li>
            <li>• Seeking help is a sign of strength</li>
            <li>• There are many effective treatments available</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-blue-800 font-medium flex items-center">
            <span className="mr-2">💡</span>
            Hope is real, and healing is possible. Even on the darkest days, remember that this too shall pass, and brighter moments are ahead.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Back to Top
        </button>
        <Link href="/adults" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Adult Support
        </Link>
      </div>
    </div>
  )
}