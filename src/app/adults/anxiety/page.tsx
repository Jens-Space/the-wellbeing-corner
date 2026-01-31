'use client';

import Link from 'next/link';

export default function AnxietyPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4 md:mb-6">🌱 Finding Peace with Anxiety</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          You're not alone in this journey. Anxiety can feel overwhelming, but there are gentle ways to find calm and regain control.
          Let's explore understanding and practical strategies together.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          Remember: Your feelings are valid, and healing is possible. Take one gentle step at a time.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-5 md:p-8 border border-green-200">
        <h2 className="text-xl md:text-3xl font-semibold text-green-800 mb-4 md:mb-6 text-center">🌱 Understanding Anxiety</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Anxiety is your body's natural response to stress, but when it becomes excessive or persistent, it can interfere with daily life. Anxiety disorders are among the most common mental health conditions, affecting millions of people worldwide.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-green-800 font-medium mb-4">Key Facts:</p>
          <ul className="text-green-700 space-y-2">
            <li>• Affects 1 in 4 people at some point in their lives</li>
            <li>• Can develop at any age, often starting in childhood or adolescence</li>
            <li>• Is highly treatable with therapy and/or medication</li>
            <li>• Many people recover completely or learn to manage symptoms effectively</li>
            <li>• Early intervention leads to better outcomes</li>
          </ul>
        </div>
      </div>

      {/* Types of Anxiety Disorders */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl shadow-lg p-8 border border-emerald-200">
        <h2 className="text-3xl font-semibold text-emerald-800 mb-6 text-center">🧩 Different Faces of Anxiety</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Anxiety can show up in many different ways. Each person's experience is unique, and understanding your specific type
          can help you find the most effective gentle strategies for peace.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
              <span className="mr-2">🌀</span> Generalized Anxiety Disorder (GAD)
            </h3>
            <p className="text-gray-700 mb-3">Excessive worry about everyday things that persists for months. Your mind might feel like it's always spinning with "what if" thoughts.</p>
            <p className="text-sm text-gray-600 italic">Common gentle concerns: Work, health, family, relationships, finances</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
              <span className="mr-2">⚡</span> Panic Disorder
            </h3>
            <p className="text-gray-700 mb-3">Sudden panic attacks with intense fear and physical symptoms. These can feel overwhelming but are temporary waves that will pass.</p>
            <p className="text-sm text-gray-600 italic">Often includes avoiding situations where escape might feel difficult</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
              <span className="mr-2">👥</span> Social Anxiety
            </h3>
            <p className="text-gray-700 mb-3">Intense fear of social situations and being judged by others. You might worry about saying the wrong thing or being embarrassed.</p>
            <p className="text-sm text-gray-600 italic">May involve public speaking, meeting new people, or eating in front of others</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
              <span className="mr-2">🎯</span> Specific Phobias
            </h3>
            <p className="text-gray-700 mb-3">Intense fear of specific objects or situations (heights, flying, animals, etc.). Your fear response is much stronger than the actual situation warrants.</p>
            <p className="text-sm text-gray-600 italic">Often begins in childhood but can be gently addressed at any age</p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-blue-800 font-medium flex items-center">
            <span className="mr-2">💡</span>
            Remember: Whatever type of anxiety you experience, there are effective, compassionate ways to find relief and regain your sense of calm.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">⚡ Panic Attack Symptoms</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Panic attacks are sudden episodes of intense fear that peak within minutes. They can occur unexpectedly or in response to triggers.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-4">Physical Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Racing or pounding heart</li>
              <li>• Shortness of breath or feeling smothered</li>
              <li>• Chest pain or discomfort</li>
              <li>• Dizziness or lightheadedness</li>
              <li>• Nausea or abdominal distress</li>
              <li>• Trembling or shaking</li>
              <li>• Sweating or chills</li>
              <li>• Numbness or tingling</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-4">Mental/Emotional Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Intense fear of dying or losing control</li>
              <li>• Feeling detached from reality</li>
              <li>• Fear of going crazy</li>
              <li>• Overwhelming sense of doom</li>
              <li>• Difficulty thinking clearly</li>
              <li>• Urgency to escape the situation</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg mt-6">
          <p className="text-yellow-800 font-medium">Important Note:</p>
          <p className="text-yellow-700 text-sm">Panic attacks can feel like heart attacks or other medical emergencies. If you're unsure, seek medical attention to rule out physical causes.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">🌟 Self-Help Strategies</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-green-700 mb-4">Breathing Techniques</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">4-7-8 Breathing</h4>
                <p className="text-sm text-green-700 mb-2">Inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system.</p>
                <p className="text-sm text-green-600">Use during: Panic attacks, acute anxiety, before stressful situations.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Box Breathing</h4>
                <p className="text-sm text-green-700 mb-2">Inhale for 4, hold for 4, exhale for 4, hold for 4. Creates a calming rhythm.</p>
                <p className="text-sm text-green-600">Use during: Anytime you feel anxious, especially before presentations.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Diaphragmatic Breathing</h4>
                <p className="text-sm text-green-700 mb-2">Breathe deeply into your belly rather than your chest. Place one hand on your belly to guide the breath.</p>
                <p className="text-sm text-green-600">Benefits: Reduces physical symptoms of anxiety, promotes relaxation.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Rescue Breathing</h4>
                <p className="text-sm text-green-700 mb-2">During panic: Breathe in through nose for 3 counts, out through mouth for 6 counts. Repeat until calmer.</p>
                <p className="text-sm text-green-600">Use during: Panic attacks to regain control of breathing.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-green-700 mb-4">Cognitive Strategies</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Challenge Anxious Thoughts</h4>
                <p className="text-sm text-blue-700 mb-2">When you think "What if something terrible happens?", ask: What's the evidence for and against this thought? What's the worst that could happen? How would I cope?</p>
                <p className="text-sm text-blue-600">Benefits: Reduces catastrophic thinking, increases realistic perspective.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Worry Time</h4>
                <p className="text-sm text-blue-700 mb-2">Set aside 15-20 minutes daily for "worry time." Write down worries and postpone them until then. During the day, remind yourself "not now."</p>
                <p className="text-sm text-blue-600">Benefits: Contains worry, prevents constant anxiety, improves focus.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-green-700 mb-4">Lifestyle Changes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Limit Caffeine and Stimulants</h4>
                <p className="text-sm text-purple-700">Caffeine can increase anxiety symptoms. Gradually reduce intake and monitor how it affects your anxiety levels.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Regular Exercise</h4>
                <p className="text-sm text-purple-700">Exercise releases endorphins and reduces stress hormones. Even 20-30 minutes of moderate activity daily can help.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Sleep Hygiene</h4>
                <p className="text-sm text-purple-700">Poor sleep worsens anxiety. Maintain consistent sleep schedule, create a relaxing bedtime routine, and avoid screens before bed.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Mindful Eating</h4>
                <p className="text-sm text-purple-700">Eat regular, balanced meals. Avoid skipping meals which can worsen anxiety. Stay hydrated throughout the day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">🩺 Professional Treatment</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Professional help can provide the tools and support needed for managing anxiety effectively.
        </p>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3">Cognitive Behavioral Therapy (CBT)</h3>
            <p className="text-gray-700">Most effective treatment for anxiety disorders. Helps identify and change anxious thought patterns and behaviors. Usually 6-20 weekly sessions.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3">Medication</h3>
            <p className="text-gray-700">SSRIs or benzodiazepines may be prescribed for short-term relief. Medication works best when combined with therapy.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3">Counselling</h3>
            <p className="text-gray-700">Provides a safe space to explore anxiety triggers and develop coping strategies. Can be effective for mild to moderate anxiety.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3">Other Therapies</h3>
            <p className="text-gray-700">Acceptance and Commitment Therapy (ACT), mindfulness-based therapies, or group therapy may also be beneficial.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">🌟 Recovery and Management</h2>
        <p className="text-green-700 mb-4">
          Anxiety is highly treatable, and many people learn to manage their symptoms effectively. Recovery involves learning new coping skills and gradually facing feared situations.
        </p>
        <div className="bg-white p-4 rounded-lg">
          <p className="text-gray-800 font-medium mb-2">Remember:</p>
          <ul className="text-gray-700 space-y-1">
            <li>• Anxiety symptoms are uncomfortable but not dangerous</li>
            <li>• What you fear rarely happens</li>
            <li>• Avoidance makes anxiety worse in the long term</li>
            <li>• Small steps lead to big changes</li>
            <li>• You're not alone - millions manage anxiety successfully</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-xl shadow-lg p-8 border border-purple-200">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">🤝 UK Support Services</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          You don't have to face anxiety alone. There are many compassionate resources available to support your journey.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-4">NHS Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>IAPT Services:</strong> Free talking therapies for anxiety</li>
              <li><strong>GP:</strong> Assessment and treatment referrals</li>
              <li><strong>Anxiety UK:</strong> anxietyuk.org.uk - Information and helpline</li>
              <li><strong>No Panic:</strong> nopanic.org.uk - Panic disorder support</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-4">Other Organizations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Mind:</strong> mind.org.uk - Local support groups</li>
              <li><strong>Samaritans:</strong> samaritans.org - 24/7 emotional support</li>
              <li><strong>OCD Action:</strong> ocdaction.org.uk - For OCD and related anxiety</li>
              <li><strong>Triumph Over Phobia (TOP UK):</strong> topuk.org - Phobia treatment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mr-4"
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