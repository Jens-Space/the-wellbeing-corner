'use client';

import Link from 'next/link';

export default function MoodDisordersPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-3 md:mb-4">🧠 Mood Disorders</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
          Mood disorders are treatable conditions. With the right support and understanding, many people recover fully and go on to live fulfilling lives.
        </p>
        <p className="text-base md:text-lg text-gray-600">Whether it's depression, bipolar disorder, or another mood condition, this guide offers information, hope, and practical strategies.</p>
      </div>

      {/* Understanding Mood Disorders */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-5 md:p-8 border border-purple-100">
        <h2 className="text-xl md:text-3xl font-semibold text-purple-800 mb-2 text-center">🌈 What are Mood Disorders?</h2>
        <p className="text-center text-gray-600 mb-6 italic">You're not alone — mood disorders affect millions of people worldwide</p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Mood disorders are mental health conditions that significantly affect how we feel, think, and function day-to-day. They go beyond normal sadness or happiness—they're persistent patterns that impact relationships, work, school, and overall wellbeing.
        </p>
        <p className="text-gray-700 mb-6">The good news? Mood disorders are highly treatable. With proper diagnosis, professional support, and self-care strategies, people recover and thrive.</p>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
          <p className="text-blue-800 font-bold text-lg mb-4">📊 Important Facts:</p>
          <ul className="text-blue-700 space-y-2">
            <li>✓ Affect approximately 1 in 4 adults in the UK at some point in their lives</li>
            <li>✓ Can develop at any age, though often begin in young adulthood</li>
            <li>✓ Include conditions like bipolar disorder, major depression, and persistent depressive disorder</li>
            <li>✓ Are NOT a personal weakness or character flaw</li>
            <li>✓ Often involve a mix of genetic, environmental, biological, and life-circumstance factors</li>
            <li>✓ Are treatable with medication, therapy, lifestyle changes, and support</li>
          </ul>
        </div>
      </div>

      {/* Types of Mood Disorders */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-100">
        <h2 className="text-3xl font-semibold text-green-800 mb-2 text-center">💫 Types of Mood Disorders</h2>
        <p className="text-center text-gray-600 mb-6">Each type has different patterns, but all are manageable with proper support</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">⚡ Bipolar Disorder</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">Characterized by alternating periods of elevated mood (mania or hypomania) and depression. Episodes can last days to months and feel very intense.</p>
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-sm text-gray-700"><strong>Manic phases:</strong> High energy, racing thoughts, risky decisions</p>
              <p className="text-sm text-gray-700"><strong>Depressive phases:</strong> Low mood, exhaustion, hopelessness</p>
            </div>
            <p className="text-sm text-yellow-700 font-medium">✓ Affects about 1% of the population; manageable with mood stabilizers and therapy</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-3">😔 Major Depressive Disorder</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">Severe, persistent depression lasting at least two weeks and significantly impacting daily functioning, relationships, and work or school.</p>
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-sm text-gray-700"><strong>Key symptoms:</strong> Overwhelming sadness, loss of interest, sleep changes, hopelessness</p>
            </div>
            <p className="text-sm text-purple-700 font-medium">✓ Most common mood disorder; highly responsive to treatment (therapy + medication)</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
            <h3 className="text-xl font-bold text-cyan-800 mb-3">⏳ Persistent Depressive Disorder (Dysthymia)</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">Chronic, low-grade depression lasting at least two years. Symptoms are milder than major depression but more persistent and stubborn.</p>
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-sm text-gray-700"><strong>Pattern:</strong> Daily low mood, lack of joy, but can still function</p>
            </div>
            <p className="text-sm text-cyan-700 font-medium">✓ Often begins early; benefits greatly from long-term treatment and support</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
            <h3 className="text-xl font-bold text-pink-800 mb-3">🌊 Other Mood Disorders</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">Includes cyclothymia (milder bipolar-like patterns), seasonal affective disorder (SAD), and mood changes linked to medical conditions or life events.</p>
            <div className="bg-white p-3 rounded mb-3">
              <p className="text-sm text-gray-700"><strong>Examples:</strong> SAD (seasonal), hormonal changes, substance-related mood shifts</p>
            </div>
            <p className="text-sm text-pink-700 font-medium">✓ Diverse presentations requiring individualized assessment and treatment</p>
          </div>
        </div>
      </div>

      {/* Symptoms and Warning Signs */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-8 border border-red-100">
        <h2 className="text-3xl font-semibold text-red-800 mb-2 text-center">⚠️ Symptoms and Warning Signs</h2>
        <p className="text-center text-gray-600 mb-6">Recognizing early signs helps you seek support sooner</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
            <h3 className="text-xl font-bold text-orange-800 mb-4">🔥 Manic or Hypomanic Episodes</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Elevated, expansive, or unusually irritable mood</li>
              <li>✓ Increased energy, racing thoughts, rapid speech</li>
              <li>✓ Reduced need for sleep (feeling rested after 3-4 hours)</li>
              <li>✓ Inflated self-esteem or grandiose ideas</li>
              <li>✓ Impulsive or risky behaviour (spending sprees, reckless driving)</li>
              <li>✓ Racing mind, easily distracted, jumping between topics</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">💔 Depressive Episodes</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Persistent sadness, emptiness, or hopelessness</li>
              <li>✓ Loss of interest in hobbies, socializing, or sex</li>
              <li>✓ Significant changes in sleep (too much or too little)</li>
              <li>✓ Fatigue, low energy, everything feels exhausting</li>
              <li>✓ Difficulty concentrating, remembering, or making decisions</li>
              <li>✓ Thoughts of death, dying, or self-harm (seek help immediately)</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-400">
          <p className="text-yellow-800 font-semibold mb-2">⏱️ Duration Matters:</p>
          <p className="text-gray-700">Mood changes are normal. But if symptoms persist for 2+ weeks and affect your daily life, it's time to reach out to your GP or a mental health professional.</p>
        </div>
      </div>

      {/* Treatment and Management */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-100">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-2 text-center">🛠️ Treatment & Professional Support</h2>
        <p className="text-center text-gray-600 mb-6">Many people recover fully with the right treatment combination</p>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">💊 Medication</h3>
              <p className="text-gray-700 mb-3">Mood stabilizers, antidepressants, and antipsychotics help regulate brain chemistry and manage symptoms effectively.</p>
              <div className="bg-white p-3 rounded mb-3 text-sm text-gray-700">
                <p><strong>Examples:</strong> Lithium, SSRIs, antipsychotics</p>
                <p><strong>Timeline:</strong> Often takes 2-4 weeks to feel effects</p>
              </div>
              <p className="text-sm text-green-700 font-medium">✓ Requires medical supervision and regular monitoring</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
              <h3 className="text-lg font-bold text-cyan-800 mb-3">🧠 Therapy</h3>
              <p className="text-gray-700 mb-3">Talking therapies help identify triggers, develop coping skills, and challenge negative thought patterns.</p>
              <div className="bg-white p-3 rounded mb-3 text-sm text-gray-700">
                <p><strong>Effective types:</strong> CBT, DBT, interpersonal therapy</p>
                <p><strong>Format:</strong> Individual or group sessions</p>
              </div>
              <p className="text-sm text-cyan-700 font-medium">✓ Works best combined with other treatments</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🏃‍♀️ Lifestyle Changes</h3>
              <p className="text-gray-700 mb-3">Daily habits powerfully support mental health recovery and stability.</p>
              <div className="bg-white p-3 rounded mb-3 text-sm text-gray-700">
                <p><strong>Key areas:</strong> Sleep, exercise, nutrition, routine</p>
                <p><strong>Impact:</strong> Reduces symptoms and supports medication effectiveness</p>
              </div>
              <p className="text-sm text-yellow-700 font-medium">✓ Builds resilience and prevents relapse</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
              <h3 className="text-lg font-bold text-pink-800 mb-3">👥 Support Systems</h3>
              <p className="text-gray-700 mb-3">Connection is healing. Family, friends, peer groups, and communities provide crucial support.</p>
              <div className="bg-white p-3 rounded mb-3 text-sm text-gray-700">
                <p><strong>Types:</strong> Support groups, therapy groups, peer mentors</p>
                <p><strong>Benefit:</strong> Reduces isolation, shares strategies</p>
              </div>
              <p className="text-sm text-pink-700 font-medium">✓ Helps maintain progress and build hope</p>
            </div>
          </div>
        </div>
      </div>

      {/* Living Well Section */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-teal-100">
        <h2 className="text-3xl font-semibold text-teal-800 mb-2 text-center">🌱 Living Well with Mood Disorders</h2>
        <p className="text-center text-gray-600 mb-6">Recovery is possible. Many people with mood disorders lead fulfilling, meaningful lives</p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-800 mb-3">📋 Creating a Mood Routine</h3>
            <p className="text-gray-700 mb-3">Consistency helps stabilize mood. Small, daily actions add up:</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Sleep:</strong> Aim for 7-9 hours, same bedtime each night (crucial for mood stability)</li>
              <li>✓ <strong>Meals:</strong> Regular, balanced meals to support energy and brain function</li>
              <li>✓ <strong>Movement:</strong> 20-30 minutes of activity most days (even a walk helps)</li>
              <li>✓ <strong>Structure:</strong> Maintain a consistent daily schedule for predictability</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎯 Recognizing Your Early Warning Signs</h3>
            <p className="text-gray-700 mb-3">Knowing your personal patterns helps you intervene early:</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ What small changes signal a mood shift coming?</li>
              <li>✓ What triggers make you vulnerable?</li>
              <li>✓ Who do you reach out to when you notice changes?</li>
              <li>✓ What practical steps (sleep, medication, therapy) help you stabilize?</li>
            </ul>
            <p className="text-sm text-blue-600 font-medium mt-3">💡 Write these down—having a plan ready makes all the difference</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-800 mb-3">💪 Building Resilience & Coping Strategies</h3>
            <p className="text-gray-700 mb-3">Develop a toolkit of strategies that work for you:</p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-purple-50 p-3 rounded">
                <p className="font-semibold text-purple-700 mb-1">When Mood is Low:</p>
                <p className="text-sm">• Reach out to someone • Movement/sunlight • Comfort activity • Professional check-in</p>
              </div>
              <div className="bg-orange-50 p-3 rounded">
                <p className="font-semibold text-orange-700 mb-1">When Mood is High:</p>
                <p className="text-sm">• Reality check with trusted person • Slow down • Reduce stimulation • Sleep priority</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">🤝 Maintaining Relationships</h3>
            <p className="text-gray-700 mb-3">Mood disorders affect those around us. Here's how to maintain healthy connections:</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Be honest about your condition with people you trust</li>
              <li>✓ Communicate your needs clearly (especially during episodes)</li>
              <li>✓ Maintain connections even when you don't feel like it</li>
              <li>✓ Thank people for their support and patience</li>
              <li>✓ Share your recovery progress—others find hope in it</li>
            </ul>
          </div>
        </div>
      </div>

      {/* UK Support and Resources */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl shadow-lg p-8 border border-sky-100">
        <h2 className="text-3xl font-semibold text-sky-800 mb-2 text-center">🌐 UK Support & Resources</h2>
        <p className="text-center text-gray-600 mb-6">Professional help is available. You don't have to face this alone</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
            <h3 className="text-lg font-medium text-red-600 mb-3 flex items-center">
              <span className="mr-2">🚨</span> Emergency Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-red-700">Samaritans:</strong> 116 123 (24/7 support)</li>
              <li><strong className="text-red-700">NHS 111:</strong> For urgent medical help</li>
              <li><strong className="text-red-700">Emergency Services:</strong> 999 for immediate danger</li>
              <li><strong className="text-red-700">Shout:</strong> Text SHOUT to 85258</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-medium text-blue-600 mb-3 flex items-center">
              <span className="mr-2">🏥</span> Mental Health Organizations
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-blue-700">Mind:</strong> mind.org.uk</li>
              <li><strong className="text-blue-700">Mental Health Foundation:</strong> mentalhealth.org.uk</li>
              <li><strong className="text-blue-700">Rethink Mental Illness:</strong> rethink.org</li>
              <li><strong className="text-blue-700">Bipolar UK:</strong> bipolaruk.org.uk</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-medium text-green-600 mb-3 flex items-center">
              <span className="mr-2">📚</span> Specialized Help
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-green-700">IAPT Services:</strong> NHS talking therapies</li>
              <li><strong className="text-green-700">Community Mental Health Teams:</strong> Via GP</li>
              <li><strong className="text-green-700">CRISIS Teams:</strong> For acute episodes</li>
              <li><strong className="text-green-700">Early Intervention Services:</strong> For first episodes</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-lg font-medium text-purple-600 mb-3 flex items-center">
              <span className="mr-2">💻</span> Online Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong className="text-purple-700">NHS Mood Disorders:</strong> nhs.uk/mental-health</li>
              <li><strong className="text-purple-700">Time to Change:</strong> time-to-change.org.uk</li>
              <li><strong className="text-purple-700">Depression Alliance:</strong> depressionalliance.org</li>
              <li><strong className="text-purple-700">Peer Support Forums:</strong> Various online communities</li>
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