'use client';

import Link from 'next/link';

export default function GriefPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-50 to-teal-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-800 mb-4 md:mb-6">💙 Honoring Your Grief</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          Grief is a testament to love and connection. You're not alone in this journey—there are gentle ways to navigate loss and find healing.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          Remember: Your grief is valid, and healing comes in its own time.
        </p>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg p-5 md:p-8 border border-teal-200">
        <h2 className="text-xl md:text-3xl font-semibold text-teal-800 mb-4 md:mb-6 text-center">🧠 Understanding Grief</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Grief is a natural and deeply personal response to loss. It touches every part of us—our emotions, body, thoughts, and actions. While often linked to death, grief can arise from many significant losses in life.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-cyan-800 font-medium mb-4">Grief can be triggered by:</p>
          <ul className="text-cyan-700 space-y-2">
            <li>• Death of a loved one, family member, or friend</li>
            <li>• End of a significant relationship or divorce</li>
            <li>• Loss of a job, career, or financial security</li>
            <li>• Loss of health, independence, or physical abilities</li>
            <li>• Loss of a home or sense of safety</li>
            <li>• Loss of a pet or companion animal</li>
            <li>• Loss of a dream, expectation, or future plans</li>
            <li>• Miscarriage, infertility, or loss of pregnancy</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-indigo-200">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">🌿 Physical & Emotional Responses</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Grief touches every part of us. Understanding these responses can help you recognize that what you're experiencing is normal and part of the healing process.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-4"><span className="mr-2">🏃‍♂️</span>Physical Symptoms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Fatigue and low energy</li>
              <li>• Sleep disturbances (insomnia or oversleeping)</li>
              <li>• Changes in appetite and weight</li>
              <li>• Headaches, muscle tension, or stomach issues</li>
              <li>• Weakened immune system</li>
              <li>• Chest tightness or shortness of breath</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-4"><span className="mr-2">🧠</span>Emotional & Cognitive Changes</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Intense sadness, anger, or guilt</li>
              <li>• Anxiety, fear, or panic</li>
              <li>• Difficulty concentrating or remembering</li>
              <li>• Feeling detached or numb</li>
              <li>• Questioning beliefs or meaning in life</li>
              <li>• Dreams or flashbacks about the loss</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">🌊 The Journey of Grief</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          Grief is not a straight path with clear stages. It's more like ocean waves—emotions that rise and fall in their own rhythm. The Kübler-Ross model offers common experiences, but each person's journey is unique.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-3"><span className="mr-2">😵</span>Shock & Denial</h3>
            <p className="text-sm text-cyan-700">A protective numbness that helps process the initial impact.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-3"><span className="mr-2">😢</span>Pain & Guilt</h3>
            <p className="text-sm text-cyan-700">Intense emotional pain and questioning what could have been done differently.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-3"><span className="mr-2">😠</span>Anger & Bargaining</h3>
            <p className="text-sm text-cyan-700">Frustration directed outward or inward, trying to negotiate with reality.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-3"><span className="mr-2">😔</span>Depression & Loneliness</h3>
            <p className="text-sm text-cyan-700">Deep sadness and a sense of isolation from the world.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-3"><span className="mr-2">🔄</span>Reconstruction</h3>
            <p className="text-sm text-cyan-700">Gradually rebuilding life while carrying the loss.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-3"><span className="mr-2">✨</span>Acceptance & Hope</h3>
            <p className="text-sm text-cyan-700">Finding peace and meaning while moving forward.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-4 text-center">💫 Complicated Grief</h2>
        <p className="text-gray-700 mb-4">
          Most people adapt to loss over time, but some experience complicated grief where the pain doesn't lessen
          and daily functioning is severely impacted. This may require professional support.
        </p>
        <div className="bg-cyan-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-cyan-800 mb-2">Signs of Complicated Grief:</h3>
          <ul className="text-cyan-700 space-y-1">
            <li>• Grief that lasts longer than 12-18 months</li>
            <li>• Inability to return to normal activities</li>
            <li>• Extreme focus on the loss that prevents moving forward</li>
            <li>• Feeling that life is meaningless without the lost person/thing</li>
            <li>• Self-destructive behaviors or suicidal thoughts</li>
            <li>• Chronic depression or anxiety</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">🧘 Self-Care During Grief</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          There are many gentle ways to support yourself through grief. Both immediate techniques and long-term practices can help you navigate this difficult time.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-4"><span className="mr-2">🌅</span>Daily Practices</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Gentle movement:</strong> Walking, yoga, or stretching</li>
              <li><strong>Nutrition:</strong> Eating regular, nourishing meals</li>
              <li><strong>Sleep hygiene:</strong> Consistent sleep schedule</li>
              <li><strong>Journaling:</strong> Writing about feelings and memories</li>
              <li><strong>Nature time:</strong> Spending time outdoors</li>
              <li><strong>Creative outlets:</strong> Art, music, or hobbies</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-4"><span className="mr-2">💚</span>Emotional Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Talk it out:</strong> Share with trusted friends or family</li>
              <li><strong>Support groups:</strong> Connect with others who understand</li>
              <li><strong>Professional help:</strong> Counseling or therapy</li>
              <li><strong>Memorial activities:</strong> Honor the loss in meaningful ways</li>
              <li><strong>Set boundaries:</strong> Protect your energy from others' expectations</li>
              <li><strong>Practice patience:</strong> Allow yourself time to heal</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-4 text-center">🎭 Cultural & Personal Aspects</h2>
        <p className="text-gray-700 mb-4">
          Grief is influenced by cultural background, personal beliefs, and life experiences. What feels right for one person
          may not work for another. Honor your own process and cultural traditions.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyan-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">Cultural Considerations</h3>
            <p className="text-sm text-cyan-700">
              Different cultures have unique rituals and expectations around grief. Understanding these can help
              navigate family dynamics and find appropriate support.
            </p>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">Spiritual & Religious Support</h3>
            <p className="text-sm text-cyan-700">
              Many find comfort in spiritual or religious practices. This might include prayer, meditation,
              ceremonies, or connecting with faith communities.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-4 text-center">🤝 Supporting Someone Who is Grieving</h2>
        <p className="text-gray-700 mb-4">
          When someone you care about is grieving, your presence and understanding can provide great comfort.
          Remember that you don't need to "fix" their grief - just be there with compassion.
        </p>
        <div className="bg-cyan-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-cyan-800 mb-2">Helpful Ways to Support:</h3>
          <ul className="text-cyan-700 space-y-1">
            <li>• Listen without trying to "fix" or minimize their pain</li>
            <li>• Offer specific help: "Can I bring you a meal?" or "Would you like company?"</li>
            <li>• Avoid clichés like "They're in a better place" or "Time heals all wounds"</li>
            <li>• Respect their grieving process - don't rush them to "move on"</li>
            <li>• Check in regularly, even months later</li>
            <li>• Take care of yourself so you can be fully present for them</li>
            <li>• Encourage professional help if their grief seems overwhelming</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">✨ Finding Meaning After Loss</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          While grief never completely goes away, many people find ways to honor their loss while rebuilding a meaningful life.
          This process is unique to each person and takes time.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-cyan-800 mb-4">Ways to Find Meaning:</h3>
          <ul className="text-cyan-700 space-y-2">
            <li>• Create memorials or rituals to honor the loss</li>
            <li>• Volunteer or help others who are grieving</li>
            <li>• Start new traditions or activities</li>
            <li>• Write letters or keep a memory journal</li>
            <li>• Join support communities or online forums</li>
            <li>• Consider legacy projects that honor the person's memory</li>
            <li>• Practice gratitude for the time you had together</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
          <p className="text-green-800 font-medium flex items-center">
            <span className="mr-2">💡</span>
            Grief is not something you "get over." It's something you learn to carry with you, and in carrying it, you honor the love you shared.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl shadow-lg p-8 border border-cyan-200">
        <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">📞 UK Support Resources</h2>
        <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
          You don't have to navigate grief alone. There are many compassionate resources available to support your healing journey.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-3"><span className="mr-2">🕊️</span>General Bereavement Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Cruse Bereavement Care:</strong> cruse.org.uk - Free counseling and support groups</li>
              <li><strong>Mind:</strong> mind.org.uk - Mental health support including grief</li>
              <li><strong>Samaritans:</strong> samaritans.org - 24/7 emotional support (116 123)</li>
              <li><strong>Child Bereavement UK:</strong> childbereavementuk.org - Support for grieving children and families</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium text-cyan-700 mb-3"><span className="mr-2">💝</span>Specialized Support Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Marie Curie:</strong> mariecurie.org.uk - End of life and bereavement care</li>
              <li><strong>Sudden:</strong> sudden.org.uk - Support after sudden or traumatic death</li>
              <li><strong>The Way:</strong> theway.org.uk - Support for those bereaved by suicide</li>
              <li><strong>Compassionate Friends:</strong> compassionatefriends.org.uk - Bereaved parents and siblings</li>
              <li><strong>SOBS:</strong> sobs.org.uk - Support after baby loss</li>
              <li><strong>Pet Bereavement Support:</strong> Support after pet loss</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors mr-4"
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
