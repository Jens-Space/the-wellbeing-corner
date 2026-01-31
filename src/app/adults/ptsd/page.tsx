'use client';

import Link from 'next/link';

export default function PTSDPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-3 md:mb-4">PTSD and Trauma</h1>
        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding post-traumatic stress disorder, trauma responses, and effective strategies for healing and recovery.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-5 md:p-8 border border-purple-200">
        <h2 className="text-xl md:text-3xl font-semibold text-purple-800 mb-4 md:mb-6 text-center">💙 What is PTSD?</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Post-traumatic stress disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a terrifying event. Understanding it is the first step toward healing.
        </p>
        <p className="text-gray-700 mb-4">
          Post-traumatic stress disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a terrifying event. Symptoms may include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-purple-800 font-medium mb-4">Key Facts:</p>
          <ul className="text-purple-700 space-y-2">
            <li>• Can develop after any traumatic event</li>
            <li>• Affects about 1 in 3 people who experience trauma</li>
            <li>• Is treatable with therapy and support</li>
            <li>• Recovery is possible with proper treatment</li>
            <li>• Many people fully recover and go on to lead fulfilling lives</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">🧠 Common Symptoms</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          PTSD symptoms can manifest in different ways. Recognizing them helps in understanding your experience and seeking appropriate support.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">💭</span>Intrusion Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Recurrent, unwanted memories</li>
              <li>• Nightmares about the trauma</li>
              <li>• Flashbacks or dissociation</li>
              <li>• Intense emotional distress</li>
              <li>• Physical reactions to trauma reminders</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">🚫</span>Avoidance Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Avoiding trauma-related thoughts or feelings</li>
              <li>• Avoiding reminders of the trauma</li>
              <li>• Avoiding people, places, or activities</li>
              <li>• Emotional numbness or detachment</li>
              <li>• Loss of interest in previously enjoyed activities</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">⚡</span>Arousal Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Irritability or angry outbursts</li>
              <li>• Hypervigilance or being easily startled</li>
              <li>• Problems with concentration</li>
              <li>• Sleep disturbances</li>
              <li>• Reckless or self-destructive behavior</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">😔</span>Mood and Cognitive Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Negative thoughts about yourself or others</li>
              <li>• Feelings of guilt or blame</li>
              <li>• Loss of interest in activities</li>
              <li>• Difficulty remembering aspects of the trauma</li>
              <li>• Distorted beliefs about the world</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">🧩 Understanding Different Types of Trauma</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Trauma can manifest in various ways, each with its own unique challenges. Recognizing your experience can help guide your healing journey.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">🕒</span>Acute Trauma</h3>
            <p className="text-gray-700 mb-2">A single traumatic event, such as an accident, assault, or natural disaster. Symptoms may appear immediately or be delayed.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">🔄</span>Chronic Trauma</h3>
            <p className="text-gray-700 mb-2">Repeated exposure to traumatic events, such as ongoing abuse, war, or captivity. Can lead to complex PTSD.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">🌀</span>Complex PTSD</h3>
            <p className="text-gray-700 mb-2">Results from prolonged, repeated trauma, often in childhood. Includes additional symptoms like emotional dysregulation and negative self-perception.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">👁️</span>Secondary Trauma</h3>
            <p className="text-gray-700 mb-2">Experienced by those who hear about or witness others' trauma, such as first responders, therapists, or journalists.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-xl shadow-lg p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">🌱 Self-Help Strategies</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          While professional help is important, there are gentle ways to support yourself during the healing process.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">🌍</span>Grounding Techniques</h3>
            <p className="text-gray-700 mb-2">When feeling overwhelmed, use the 5-4-3-2-1 technique: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.</p>
            <p className="text-sm text-gray-600">Helps bring you back to the present moment</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">🫁</span>Breathing Exercises</h3>
            <p className="text-gray-700 mb-2">Practice deep breathing: Inhale for 4 counts, hold for 4, exhale for 4. This activates your body's relaxation response.</p>
            <p className="text-sm text-gray-600">Reduces anxiety and promotes calm</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">🏠</span>Self-Care Routine</h3>
            <p className="text-gray-700 mb-2">Establish daily routines for sleep, nutrition, and gentle exercise. Avoid alcohol and drugs, which can worsen symptoms.</p>
            <p className="text-sm text-gray-600">Builds resilience and stability</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-3"><span className="mr-2">📝</span>Journaling</h3>
            <p className="text-gray-700 mb-2">Write about your experiences and feelings. This can help process trauma and identify patterns in your symptoms.</p>
            <p className="text-sm text-gray-600">Provides insight and emotional release</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">🩺 Professional Treatment</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Professional support can provide the tools and guidance needed for healing. There are many effective treatments available.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">💬</span>Evidence-Based Therapies</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Trauma-Focused CBT:</strong> Helps identify and change negative thought patterns</li>
              <li><strong>EMDR:</strong> Eye Movement Desensitization and Reprocessing therapy</li>
              <li><strong>Cognitive Processing Therapy:</strong> Addresses unhelpful beliefs about trauma</li>
              <li><strong>Prolonged Exposure Therapy:</strong> Gradually confronts trauma memories</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">💊</span>Medication and Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Antidepressants:</strong> Can help manage symptoms like anxiety and depression</li>
              <li><strong>Anti-anxiety medications:</strong> For short-term symptom relief</li>
              <li><strong>Sleep aids:</strong> If insomnia is a major issue</li>
              <li><strong>Support groups:</strong> Connect with others who understand</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-purple-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">🌈 Recovery and Hope</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Recovery from PTSD is possible. Many people go on to live full, meaningful lives after trauma. With the right support and treatment, symptoms can be managed effectively.
        </p>
        <p className="text-gray-700 mb-4">
          Recovery from PTSD is possible. Many people go on to live full, meaningful lives after trauma. With the right support and treatment, symptoms can be managed effectively.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-purple-800 font-medium mb-4">Remember:</p>
          <ul className="text-purple-700 space-y-2">
            <li>• Healing is not linear - there will be good days and difficult days</li>
            <li>• It's okay to ask for help - seeking support is a sign of strength</li>
            <li>• You are not defined by your trauma</li>
            <li>• Recovery takes time and patience</li>
            <li>• Small steps lead to big changes</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-blue-800 font-medium flex items-center">
            <span className="mr-2">💡</span>
            Hope is real, and healing is possible. Even on the darkest days, remember that this too shall pass, and brighter moments are ahead.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 border border-pink-200">
        <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">🤝 UK Support Resources</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          You don't have to navigate PTSD alone. There are many compassionate resources available to support your healing journey.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">🏥</span>Specialized Organizations</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>PTSD UK:</strong> ptsduk.org - Specialist support and information</li>
              <li><strong>Mind:</strong> mind.org.uk - General mental health support</li>
              <li><strong>Combat Stress:</strong> combatstress.org.uk - For veterans</li>
              <li><strong>Rape Crisis:</strong> rapecrisis.org.uk - For sexual trauma survivors</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-purple-700 mb-4"><span className="mr-2">🚨</span>Emergency Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Samaritans:</strong> 116 123 (24/7 confidential support)</li>
              <li><strong>NHS 111:</strong> For urgent medical help</li>
              <li><strong>Emergency Services:</strong> 999 for immediate danger</li>
              <li><strong>Shout:</strong> Text SHOUT to 85258 (24/7 text support)</li>
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
        <Link href="/adults" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Adult Support
        </Link>
      </div>
    </div>
  )
}