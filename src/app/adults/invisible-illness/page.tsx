'use client';

import Link from 'next/link';

export default function InvisibleIllnessPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-gradient-to-br from-lime-50 to-green-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-lime-800 mb-4 md:mb-6">🌟 Living with Invisible Illness</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          Conditions that others can't see are just as real. Your experiences matter, your pain is valid, and you're not alone in this journey.
        </p>
        <p className="text-base md:text-lg text-gray-600">
          Finding understanding, support, and strategies for thriving despite invisible challenges.
        </p>
      </div>

      <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl shadow-lg p-5 md:p-8 border border-lime-200">
        <h2 className="text-xl md:text-3xl font-semibold text-lime-800 mb-4 md:mb-6 text-center">❓ What are Invisible Illnesses?</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Invisible illnesses are chronic health conditions that significantly impair normal activities of daily living but aren't immediately apparent to others. 
          These conditions can be physical, mental, or both—and they're just as real as visible disabilities.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lime-800 font-medium mb-4">🌈 Common Invisible Illnesses:</p>
          <ul className="text-lime-700 mt-2 space-y-1">
            <li>• Chronic Fatigue Syndrome (CFS/ME)</li>
            <li>• Fibromyalgia</li>
            <li>• Mental health conditions (depression, anxiety, PTSD)</li>
            <li>• Autoimmune disorders (Lupus, Rheumatoid Arthritis)</li>
            <li>• Neurological conditions (Multiple Sclerosis, Migraines)</li>
            <li>• Gastrointestinal disorders (IBS, Crohn's)</li>
            <li>• Chronic pain conditions</li>
            <li>• Endocrine disorders (Diabetes, Thyroid conditions)</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-lg p-8 border border-rose-200">
        <h2 className="text-3xl font-semibold text-rose-800 mb-6 text-center">💔 The Challenge of Being Invisible</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          The "invisible" nature of these conditions creates unique challenges that can deeply impact mental health, relationships, and quality of life. 
          The struggle is both external and internal.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-rose-700 mb-3 flex items-center">
              <span className="mr-2">👥</span>Social & Professional Challenges
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Lack of understanding from others</li>
              <li>• Skepticism about the legitimacy of symptoms</li>
              <li>• Difficulty obtaining accommodations at work</li>
              <li>• Social isolation due to fatigue or pain</li>
              <li>• Feeling like you have to "prove" your illness</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-rose-700 mb-3 flex items-center">
              <span className="mr-2">💭</span>Internal Struggles
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Self-doubt and questioning your own experiences</li>
              <li>• Guilt about not being able to do more</li>
              <li>• Fear of being seen as lazy or attention-seeking</li>
              <li>• Grief over lost abilities and life changes</li>
              <li>• Anxiety about when symptoms might flare up</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-purple-200">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">🥄 Spoon Theory & Energy Management</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Spoon theory is a powerful metaphor used by many with invisible illnesses to describe the limited energy available for daily tasks. 
          Understanding and managing this energy is crucial for maintaining wellbeing and preventing flare-ups.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-purple-800 mb-4">💡 Living with Limited Spoons:</h3>
          <ul className="text-lime-700 space-y-1">
            <li>• Every activity costs "spoons" (units of energy)</li>
            <li>• Some days you start with fewer spoons than others</li>
            <li>• Plan important activities for days with more energy</li>
            <li>• Learn to say "no" to preserve spoons for essentials</li>
            <li>• Rest and self-care help replenish your spoon supply</li>
            <li>• Pace yourself to avoid complete exhaustion</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">💬 Communication & Advocacy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-3 flex items-center">
              <span className="mr-2">🗣️</span>Explaining Your Condition
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Prepare simple explanations for different audiences</li>
              <li>• Use analogies that make symptoms relatable</li>
              <li>• Focus on how the illness affects you, not medical details</li>
              <li>• Be ready for questions and educate gently</li>
              <li>• Know that you don't owe explanations to everyone</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-3 flex items-center">
              <span className="mr-2">🛡️</span>Setting Boundaries
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Learn to say "no" without guilt</li>
              <li>• Protect your energy from draining situations</li>
              <li>• Choose when and how much to share about your health</li>
              <li>• Distance yourself from toxic relationships</li>
              <li>• Build a support network of understanding people</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-200">
        <h2 className="text-3xl font-semibold text-amber-800 mb-6 text-center">💼 Workplace Strategies</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Navigating employment with an invisible illness requires careful planning and often disclosure of your condition to access reasonable accommodations.
          Your rights matter, and support is available.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-amber-700 mb-3 flex items-center">
              <span className="mr-2">🤝</span>Disclosure Decisions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Consider workplace culture and your relationship with management</li>
              <li>• Know your rights under equality legislation</li>
              <li>• Start with HR or occupational health if available</li>
              <li>• Document your symptoms and their impact</li>
              <li>• Focus on functional limitations, not diagnosis</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-amber-700 mb-3 flex items-center">
              <span className="mr-2">✨</span>Possible Accommodations
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Flexible working hours or part-time arrangements</li>
              <li>• Remote work options when possible</li>
              <li>• Regular breaks and rest periods</li>
              <li>• Modified duties during flare-ups</li>
              <li>• Quiet workspace or reduced sensory input</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">💚 Mental Health Support</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          The isolation and invalidation that often come with invisible illnesses can take a significant toll on mental health. 
          Building coping strategies and seeking support is essential for your wellbeing.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-green-800 mb-4">🌿 Coping Strategies:</h3>
          <ul className="text-lime-700 space-y-1">
            <li>• Validate your own experiences and symptoms</li>
            <li>• Connect with others who understand through support groups</li>
            <li>• Practice self-compassion and challenge self-doubt</li>
            <li>• Use cognitive behavioral techniques to manage negative thoughts</li>
            <li>• Focus on what you can control rather than limitations</li>
            <li>• Celebrate small achievements and progress</li>
            <li>• Seek professional mental health support when needed</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-8 border border-indigo-200">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">🤲 Building Understanding</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-indigo-700 mb-3 flex items-center">
              <span className="mr-2">❤️</span>For Loved Ones
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Believe and validate the person's experiences</li>
              <li>• Educate yourself about the condition</li>
              <li>• Offer practical help without assuming what they need</li>
              <li>• Be patient and avoid pushing them to "try harder"</li>
              <li>• Respect their boundaries and energy limitations</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-indigo-700 mb-3 flex items-center">
              <span className="mr-2">⚕️</span>For Healthcare Providers
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Take symptoms seriously even without visible signs</li>
              <li>• Consider the full impact on daily life</li>
              <li>• Involve mental health support in treatment plans</li>
              <li>• Be aware of diagnostic challenges for invisible illnesses</li>
              <li>• Support patients in advocating for themselves</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">🌍 UK Support Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-3 flex items-center">
              <span className="mr-2">🤝</span>General Invisible Illness Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Invisible Illnesses UK:</strong> Support for various invisible conditions</li>
              <li><strong>Action for M.E.:</strong> actionforme.org.uk - CFS/ME support</li>
              <li><strong>UK Fibromyalgia:</strong> ukfibromyalgia.com - Fibromyalgia support</li>
              <li><strong>Chronic Illness Bloggers:</strong> chronicillnessbloggers.com - Peer support</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-3 flex items-center">
              <span className="mr-2">💜</span>Mental Health & Advocacy
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Mind:</strong> mind.org.uk - Mental health support</li>
              <li><strong>Disability Rights UK:</strong> disabilityrightsuk.org - Advocacy and rights</li>
              <li><strong>ACAS:</strong> acas.org.uk - Workplace advice</li>
              <li><strong>Turn2us:</strong> turn2us.org.uk - Benefits advice</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors"
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