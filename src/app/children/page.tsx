'use client';

import Link from 'next/link';

export default function ChildrenPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-3 md:mb-4">🧒 Children & Families</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
          Support for children's emotional wellbeing — guidance for kids, and practical tools for parents and carers.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">Gentle strategies, early support, and clear signposting to professional help when needed.</p>
      </div>

      {/* Understanding */}
      <div className="bg-white rounded-lg shadow-md p-5 md:p-8 border border-blue-100">
        <h2 className="text-xl md:text-3xl font-semibold text-blue-800 mb-3 md:mb-4 text-center">🌱 Understanding Children's Mental Health</h2>
        <p className="text-gray-700 mb-4">
          Children's mental health affects how they feel, think, and behave. Early, compassionate support can make a big difference in development and long-term wellbeing.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 font-semibold">Key Facts</p>
          <ul className="text-blue-700 mt-2 space-y-1">
            <li>• Around 1 in 6 children aged 5-16 have a probable mental health disorder</li>
            <li>• Problems often begin in childhood or adolescence</li>
            <li>• Early intervention leads to better outcomes</li>
            <li>• Family support is crucial for recovery</li>
          </ul>
        </div>
      </div>

      {/* Common Issues */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-100">
        <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">🌟 Common Issues in Children</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-800 mb-3"><span className="mr-2">😟</span>Anxiety</h3>
            <p className="text-gray-700 leading-relaxed">Excessive worry or fear that affects daily life — including separation anxiety, social anxiety, or specific phobias.</p>
            <p className="text-sm text-yellow-600 font-medium mt-3">Often affects sleep and concentration</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-3"><span className="mr-2">😢</span>Low Mood & Depression</h3>
            <p className="text-gray-700 leading-relaxed">Persistent sadness, withdrawal, or irritability — sometimes harder to spot in children than adults.</p>
            <p className="text-sm text-purple-600 font-medium mt-3">Can be linked to loss, stress, or trauma</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-3"><span className="mr-2">😠</span>Behavioural Challenges</h3>
            <p className="text-gray-700 leading-relaxed">Difficulty managing behaviour or emotions — tantrums, defiance, or aggression that may signal underlying distress.</p>
            <p className="text-sm text-red-600 font-medium mt-3">Often connected to anxiety or family stress</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
            <h3 className="text-xl font-bold text-cyan-800 mb-3"><span className="mr-2">🛡️</span>Trauma & PTSD</h3>
            <p className="text-gray-700 leading-relaxed">Reactions after frightening events — nightmares, flashbacks, avoidance, or strong reactivity.</p>
            <p className="text-sm text-cyan-600 font-medium mt-3">May follow accidents, abuse, or significant loss</p>
          </div>
        </div>
      </div>

      {/* Strategies */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">🎯 Gentle Strategies for Children</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Emotion Check-Ins</h4>
            <p className="text-gray-700 mb-2">Help children name feelings using simple words or visuals (e.g., feelings cards or a feelings thermometer).</p>
            <p className="text-sm text-blue-600">Helps: Builds emotional awareness and communication</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Calming Techniques</h4>
            <p className="text-gray-700 mb-2">Teach deep breathing, progressive muscle relaxation, or grounding exercises in child-friendly ways.</p>
            <p className="text-sm text-green-600">Use when: Upset, anxious, or before sleep</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Comfort Activities</h4>
            <p className="text-gray-700 mb-2">Create a comfort box: toys, drawing materials, a cozy blanket, or a book to help regulate emotions.</p>
            <p className="text-sm text-blue-600">Supports: Safety and self-soothing</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Routine & Predictability</h4>
            <p className="text-gray-700 mb-2">Consistent daily routines help children feel secure and reduce anxiety.</p>
            <p className="text-sm text-yellow-600">Helpful at home and at school</p>
          </div>
        </div>
      </div>

      {/* Support for carers */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center">🤝 Support for Parents & Carers</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Create a Supportive Environment</h3>
            <p className="text-gray-700">Maintain routines, validate feelings, and model calm problem-solving. Small supportive actions make a big difference.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">Talk About Difficult Topics</h3>
            <p className="text-gray-700">Use age-appropriate language, be honest but reassuring, and use stories or play to explain complex emotions.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-2">When to Seek Professional Help</h3>
            <p className="text-gray-700">If difficulties last, get worse, or affect school and relationships, contact your GP, school services, or local child mental health services (CAMHS).</p>
          </div>
        </div>
      </div>

      {/* UK Resources */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-blue-100">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">🌐 UK Support Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-3">NHS & School Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>CAMHS:</strong> Child and Adolescent Mental Health Services</li>
              <li><strong>GP:</strong> Initial assessment and referrals</li>
              <li><strong>School Nurse:</strong> Support through school health services</li>
              <li><strong>YoungMinds:</strong> youngminds.org.uk - Parent helpline</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-blue-700 mb-3">Charities & Helplines</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Childline:</strong> childline.org.uk - 24/7 counselling for children</li>
              <li><strong>Place2Be:</strong> place2be.org.uk - School-based counselling</li>
              <li><strong>Mind:</strong> mind.org.uk - Information and local support</li>
              <li><strong>Barnardo's:</strong> barnardos.org.uk - Support for vulnerable children</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recovery, Practical Tools & Further Help */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-8 border border-pink-100">
        <h2 className="text-3xl font-semibold text-rose-800 mb-2 text-center">🌈 Building Resilience & Recovery</h2>
        <p className="text-center text-gray-700 mb-6 text-lg">With the right support, many children recover and flourish. Small, consistent, caring actions make a big difference.</p>

        <div className="space-y-6">
          {/* Play & Activity Ideas */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">🎨 Play & Creative Activities</h3>
            <p className="text-gray-700 mb-3">Play is healing! Children express feelings through play, art, and movement in ways words can't always capture.</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Drawing & Storytelling:</strong> Use prompts like "draw your safe place" or "tell a story where the hero feels brave"</li>
              <li><strong>Movement & Yoga:</strong> Gentle stretches, animal walks, or short walks help regulate big emotions and improve sleep</li>
              <li><strong>Music & Singing:</strong> Songs and rhythm can soothe and help express feelings joyfully</li>
            </ul>
          </div>

          {/* Structured Supports at Home */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🏠 Structured Supports at Home</h3>
            <p className="text-gray-700 mb-3">Routines and structure give children a sense of safety and predictability.</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Create simple, consistent routines for morning, meals, and bedtime</li>
              <li>✓ Use visual schedules (pictures, drawings) for younger children to explain daily plans</li>
              <li>✓ Offer age-appropriate choices to give children a sense of control (e.g., "Pick two snack options")</li>
              <li>✓ Celebrate small wins and efforts—praise is powerful!</li>
            </ul>
          </div>

          {/* Supporting Family */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-800 mb-3">💚 Supporting Siblings & Family Relationships</h3>
            <p className="text-gray-700 mb-3">When one child struggles, the whole family feels it. Here's how to support everyone:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Spend short, positive one-on-one time with each child—even 10 minutes matters</li>
              <li>• Explain changes in an age-appropriate, honest way (e.g., "Your sister's brain needs extra help right now")</li>
              <li>• Keep boundaries consistent and fair across all children</li>
              <li>• Praise cooperative behaviour and kindness between siblings</li>
            </ul>
          </div>

          {/* School Support */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-800 mb-3">📚 School & Learning Support</h3>
            <p className="text-gray-700 mb-3">Schools are partners in your child's wellbeing. Don't hesitate to speak up.</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Talk to class teachers about any changes in behaviour, concentration, or friendships</li>
              <li>• Ask about school counselling, pastoral support, or peer buddy schemes</li>
              <li>• Request an Individual Education Plan (IEP) or reasonable adjustments if needed</li>
              <li>• Work together with the school to create a supportive learning environment</li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-orange-800 mb-3">📖 Books, Tools & Online Resources</h3>
            <p className="text-gray-700 mb-3">Helpful materials to explore feelings and build resilience together:</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-semibold text-blue-700 mb-1">For Children:</p>
                <p>Emotion books, social stories, relaxation storybooks, activity colouring books</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <p className="font-semibold text-green-700 mb-1">For Parents:</p>
                <p>YoungMinds guides, Mind resources, NHS advice, parenting podcasts</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="font-semibold text-yellow-700 mb-1">Printable Activities:</p>
                <p>Feelings charts, breathing exercises, grounding games, worry boxes</p>
              </div>
            </div>
          </div>

          {/* Professional Help */}
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-indigo-400">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">🤲 When to Seek Professional Help</h3>
            <p className="text-gray-700 mb-3">Reaching out for professional support is a sign of strength, not weakness. Consider contacting your GP, school nurse, or local CAMHS if:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✓ Difficulties last longer than a few weeks</li>
              <li>✓ Worries get worse or spread to new areas of life</li>
              <li>✓ Changes in sleep, appetite, or energy levels</li>
              <li>✓ School attendance, friendships, or family relationships are affected</li>
              <li>✓ You feel unsure or need expert guidance—that's what professionals are there for!</li>
            </ul>
          </div>

          {/* Crisis Support */}
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 shadow-md border-2 border-red-300">
            <h3 className="text-xl font-bold text-red-700 mb-3">🆘 Crisis & Urgent Help</h3>
            <p className="text-gray-700 mb-3"><strong>If a child is in immediate danger or expressing thoughts of self-harm:</strong></p>
            <div className="bg-red-50 p-4 rounded border border-red-200 mb-3">
              <p className="font-semibold text-red-800 mb-2">Call emergency services (999) right away</p>
              <p className="text-sm text-gray-700">Do not wait. Your child's safety is the priority.</p>
            </div>
            <p className="text-gray-700 mb-2"><strong>UK Helplines (24/7):</strong></p>
            <ul className="space-y-1 text-gray-700 font-medium">
              <li>📞 <strong>Childline:</strong> 0800 1111 (for children)</li>
              <li>📞 <strong>NHS 111:</strong> For urgent medical or mental health advice</li>
              <li>📞 <strong>Samaritans:</strong> 116 123 (for any distress)</li>
              <li>📞 <strong>Local crisis team:</strong> Ask your GP for contact details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
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
  );
}
