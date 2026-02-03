'use client';

export default function MoodDisordersPage() {
  return (
    <div id="top" className="space-y-12">
      <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-800 mb-3 md:mb-4">🎢 Mood Disorders</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
          Understanding and managing bipolar disorder, cyclothymic disorder, and other mood conditions.
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-100">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8 flex items-center">
          <span className="mr-3">🧠</span> Understanding Mood Disorders
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-indigo-600 mb-4">What Are Mood Disorders?</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Mood disorders are mental health conditions characterized by persistent changes in mood that significantly affect daily functioning. Unlike normal mood fluctuations, these conditions involve intense, prolonged emotional states that interfere with work, relationships, and quality of life.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-indigo-600 mb-4">Types of Mood Disorders</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm">
                <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">🌊</span> Bipolar Disorder
                </h4>
                <p className="text-gray-700 mb-3">
                  Characterized by extreme mood swings between manic highs and depressive lows. Episodes can last weeks or months and vary in intensity.
                </p>
                <p className="text-sm text-indigo-600">
                  <strong>Manic phase:</strong> Elevated mood, increased energy, reduced need for sleep, racing thoughts, impulsive behavior
                </p>
                <p className="text-sm text-indigo-600 mt-2">
                  <strong>Depressive phase:</strong> Low mood, fatigue, loss of interest, difficulty concentrating, thoughts of hopelessness
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm">
                <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">🌅</span> Cyclothymic Disorder
                </h4>
                <p className="text-gray-700 mb-3">
                  A milder form of bipolar disorder with chronic mood fluctuations that don't reach the full intensity of manic or major depressive episodes.
                </p>
                <p className="text-sm text-indigo-600">
                  Symptoms persist for at least 2 years with numerous periods of hypomanic and depressive symptoms
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm">
                <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">🔄</span> Disruptive Mood Dysregulation Disorder
                </h4>
                <p className="text-gray-700 mb-3">
                  Severe recurrent temper outbursts and persistent irritability or anger between outbursts, typically diagnosed in children and adolescents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm">
                <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">📉</span> Major Depressive Disorder with Bipolar Features
                </h4>
                <p className="text-gray-700 mb-3">
                  Depressive episodes that occur in the context of what may later be diagnosed as bipolar disorder, often making initial diagnosis challenging.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-indigo-600 mb-4">Signs and Symptoms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-indigo-800 mb-3">Manic Episode Signs</h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Unusually elevated mood or extreme irritability</li>
                  <li>• Decreased need for sleep without fatigue</li>
                  <li>• Racing thoughts and rapid speech</li>
                  <li>• Increased goal-directed activity</li>
                  <li>• Impulsive behaviors (spending sprees, risky decisions)</li>
                  <li>• Grandiose beliefs about abilities</li>
                  <li>• Poor judgment and increased risky behavior</li>
                  <li>• Difficulty concentrating</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-indigo-800 mb-3">Depressive Episode Signs</h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Persistent sad or empty mood</li>
                  <li>• Loss of interest in activities once enjoyed</li>
                  <li>• Significant weight loss or gain</li>
                  <li>• Sleep disturbances (insomnia or oversleeping)</li>
                  <li>• Fatigue and decreased energy</li>
                  <li>• Feelings of worthlessness or excessive guilt</li>
                  <li>• Difficulty thinking and concentrating</li>
                  <li>• Thoughts of death or suicide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-100">
        <h2 className="text-3xl font-semibold text-green-700 mb-8 flex items-center">
          <span className="mr-3">💡</span> Self-Help and Coping Strategies
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-green-600 mb-4">Managing Mood Episodes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">During Manic Episodes</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Avoid major decisions until mood stabilizes</li>
                  <li>• Limit spending and avoid large purchases</li>
                  <li>• Reduce stimulation (caffeine, loud environments)</li>
                  <li>• Maintain regular sleep patterns</li>
                  <li>• Avoid alcohol and recreational drugs</li>
                  <li>• Contact your care team if symptoms worsen</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">During Depressive Episodes</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Maintain basic self-care routines</li>
                  <li>• Set small, achievable daily goals</li>
                  <li>• Stay connected with supportive people</li>
                  <li>• Engage in gentle physical activity</li>
                  <li>• Challenge negative thoughts</li>
                  <li>• Seek professional support early</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-green-600 mb-4">Long-Term Management</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Lifestyle Factors</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Regular sleep schedule (7-9 hours)</li>
                  <li>• Consistent meal times</li>
                  <li>• Regular exercise</li>
                  <li>• Stress management techniques</li>
                  <li>• Avoiding alcohol and drugs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Tracking and Monitoring</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Keep a mood diary</li>
                  <li>• Track sleep patterns</li>
                  <li>• Note triggers and warning signs</li>
                  <li>• Monitor medication effects</li>
                  <li>• Share records with your care team</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Building Support</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Educate family and friends</li>
                  <li>• Join support groups</li>
                  <li>• Build a crisis plan</li>
                  <li>• Identify early warning signs</li>
                  <li>• Maintain treatment relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-100">
        <h2 className="text-3xl font-semibold text-amber-700 mb-8 flex items-center">
          <span className="mr-3">👨‍⚕️</span> Professional Treatment
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-medium text-amber-600 mb-4">Treatment Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm">
                <h4 className="text-lg font-semibold text-amber-800 mb-3">Medication</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Mood stabilizers:</strong> Lithium, valproate, lamotrigine</li>
                  <li><strong>Antipsychotics:</strong> Quetiapine, olanzapine, aripiprazole</li>
                  <li><strong>Antidepressants:</strong> Used cautiously with mood stabilizers</li>
                  <li><strong>Sleep medications:</strong> Short-term use for insomnia</li>
                </ul>
                <p className="text-sm text-amber-600 mt-3">
                  Medication is often essential for mood disorder management. Never stop medication without consulting your doctor.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm">
                <h4 className="text-lg font-semibold text-amber-800 mb-3">Psychological Therapies</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Managing negative thought patterns</li>
                  <li><strong>Interpersonal and Social Rhythm Therapy:</strong> Stabilizing daily routines</li>
                  <li><strong>Family-focused therapy:</strong> Improving family support systems</li>
                  <li><strong>Psychoeducation:</strong> Understanding your condition</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-amber-600 mb-4">When to Seek Help</h3>
            <p className="text-gray-700 mb-4">Contact your GP or mental health professional if you experience:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• First episode of mania or severe depression</li>
              <li>• Worsening symptoms despite treatment</li>
              <li>• Thoughts of self-harm or suicide</li>
              <li>• Inability to maintain work or relationships</li>
              <li>• Dangerous or risky behavior during manic episodes</li>
              <li>• Side effects from medication</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-8 border border-red-100">
        <h2 className="text-3xl font-semibold text-red-700 mb-8 flex items-center">
          <span className="mr-3">🚨</span> Crisis Support
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Immediate Crisis</h3>
            <p className="text-gray-700 mb-4">If you or someone else is in immediate danger:</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Emergency Services:</strong> 999</li>
              <li><strong>NHS 111:</strong> For urgent medical advice</li>
              <li><strong>Samaritans:</strong> 116 123 (24/7)</li>
              <li><strong>Shout:</strong> Text SHOUT to 85258</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Suicidal Thoughts</h3>
            <p className="text-gray-700 mb-4">If you're having thoughts of suicide:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Speak to someone you trust immediately</li>
              <li>• Contact your GP or crisis team</li>
              <li>• Go to your nearest A&E</li>
              <li>• Remove access to means of harm</li>
              <li>• Remember: feelings pass, help is available</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8 flex items-center">
          <span className="mr-3">📚</span> UK Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Specialized Support</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Bipolar UK:</strong> bipolaruk.org - Helpline 0333 323 3880</li>
              <li><strong>Mind:</strong> mind.org.uk - Infoline 0300 123 3393</li>
              <li><strong>Rethink Mental Illness:</strong> rethink.org - Advice line 0300 5000 927</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Getting Professional Help</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>GP:</strong> First point of contact for assessment and referral</li>
              <li><strong>IAPT:</strong> NHS talking therapies (self-referral available)</li>
              <li><strong>Community Mental Health Team:</strong> Via GP referral</li>
              <li><strong>Private Therapy:</strong> BACP, BABCP therapist directories</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
        >
          Back to Top
        </button>
        <a href="/the-wellbeing-corner/adults" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Adults
        </a>
        <a href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Home
        </a>
      </div>
    </div>
  )
}
