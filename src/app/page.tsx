import Link from 'next/link'

export default function Home() {
  return (
    <div id="top" className="space-y-10 md:space-y-14 lg:space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 md:p-12 lg:p-16 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-3 md:mb-4 lg:mb-6">🌱 Welcome to Mental Health Hub</h1>
        <p className="text-base md:text-lg lg:text-xl text-indigo-700 mb-4 md:mb-6 lg:mb-8 font-semibold">Your space for understanding, support, and hope</p>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-5xl lg:max-w-6xl mx-auto mb-6 md:mb-8 lg:mb-10 leading-relaxed">
          You're here, and that takes courage. Whether you're navigating your own mental health journey, supporting someone you care about, 
          or simply curious to learn more — this is a safe, judgment-free space for you.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-5xl lg:max-w-6xl mx-auto font-semibold">
          ✨ Your feelings matter. Your story matters. You matter. ✨
        </p>
      </div>

      {/* Quick Navigation Cards */}
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-indigo-900 mb-6 md:mb-10 lg:mb-12">💫 Who Are You Looking For?</h2>
        <div id="explore" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <Link href="/adults" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md p-5 md:p-8 lg:p-10 hover:shadow-lg transition-shadow text-center border-l-4 border-purple-400">
            <div className="text-4xl md:text-5xl lg:text-6xl mb-3">👥</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-700 mb-2">For Adults</h3>
            <p className="text-gray-700 mb-3 text-sm md:text-base lg:text-lg">Navigate stress, anxiety, depression, and life's heavy moments with compassion and practical support.</p>
            <p className="text-sm md:text-base text-purple-600 font-semibold">You're doing your best, and that's enough. ✓</p>
          </Link>
          <Link href="/teens" className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg shadow-md p-5 md:p-8 lg:p-10 hover:shadow-lg transition-shadow text-center border-l-4 border-teal-400">
            <div className="text-4xl md:text-5xl lg:text-6xl mb-3">🧑‍🎓</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-teal-700 mb-2">For Teens</h3>
            <p className="text-gray-700 mb-3 text-sm md:text-base lg:text-lg">Navigate emotions, relationships, identity, and self-discovery with kindness, honesty, and understanding.</p>
            <p className="text-sm md:text-base text-teal-600 font-semibold">Your feelings are valid. You're not alone. ✓</p>
          </Link>
          <Link href="/children" className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-5 md:p-8 lg:p-10 hover:shadow-lg transition-shadow text-center border-l-4 border-amber-400">
            <div className="text-4xl md:text-5xl lg:text-6xl mb-3">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-amber-700 mb-2">For Children & Families</h3>
            <p className="text-gray-700 mb-3 text-sm md:text-base lg:text-lg">Gentle guidance for emotional wellbeing, family conversations, and supporting the little ones in your life.</p>
            <p className="text-sm md:text-base text-amber-600 font-semibold">It's okay to seek help. Together is stronger. ✓</p>
          </Link>
        </div>
      </div>

      {/* Additional Topics */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 md:p-8 lg:p-10 border-l-4 border-indigo-400">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 mb-4 md:mb-6 lg:mb-8 text-center">📚 Additional Support Topics</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 text-center">
          <Link href="/mood-disorders" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">🌀</span>
            <p className="font-semibold text-indigo-700">Mood Disorders</p>
            <p className="text-sm text-gray-600">Understanding bipolar, cyclothymia & more</p>
          </Link>
          <Link href="/chronic-illness" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">🤕</span>
            <p className="font-semibold text-indigo-700">Living with Chronic Illness</p>
            <p className="text-sm text-gray-600">Mental health & physical wellbeing</p>
          </Link>
          <Link href="/resources" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">🇬🇧</span>
            <p className="font-semibold text-indigo-700">UK Resources & Crisis Support</p>
            <p className="text-sm text-gray-600">Services, hotlines & emergency help</p>
          </Link>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <span className="text-3xl block mb-2">❓</span>
            <p className="font-semibold text-indigo-700">And More</p>
            <p className="text-sm text-gray-600">Explore all support options above</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg shadow-sm p-8 md:p-10 lg:p-12 border-l-4 border-rose-400">
        <h2 className="text-3xl lg:text-4xl font-bold text-rose-900 mb-6 md:mb-8 lg:mb-10 text-center">💙 Our Promise to You</h2>
        <div className="max-w-5xl lg:max-w-6xl mx-auto space-y-5 lg:space-y-6 text-gray-800">
          <p className="text-lg lg:text-xl leading-relaxed">
            At Mental Health Hub, we believe that <strong>every person deserves compassion, understanding, and a place to feel truly heard.</strong>
            Mental health isn't one-size-fits-all — it's shaped by your unique experiences, your struggles, your victories, and everything in between.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're wrestling with anxiety that won't quiet down, processing grief that feels endless, managing chronic pain that affects your mood, 
            or simply trying to understand yourself better — <strong>your story matters, and we're here to listen without judgment.</strong>
          </p>
          <p className="text-lg leading-relaxed font-semibold text-rose-900">
            We're here to reduce stigma, share honest knowledge, and remind you of one simple truth:
            <span className="block text-center text-xl lg:text-2xl mt-4">You're not alone in this. 💚</span>
          </p>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-blue-50 rounded-lg p-6 md:p-8 lg:p-10 border-l-4 border-blue-400">
        <h3 className="text-lg lg:text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <span>ℹ️ A Gentle Reminder</span>
        </h3>
        <p className="text-base lg:text-lg text-gray-700">
          This website offers <strong>education and support</strong>, but it's not a replacement for professional mental health care. 
          If you're in crisis or experiencing suicidal thoughts, please reach out to crisis services immediately 
          (found in our <Link href="/resources" className="text-blue-600 font-semibold hover:underline">UK Resources</Link> section), or call <strong>999</strong>.
        </p>
        <p className="text-gray-700 mt-4">
          <strong>You deserve professional support, and asking for help is a sign of strength.</strong>
        </p>
      </div>

      {/* Words of Encouragement */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 md:p-10 lg:p-12 border-l-4 border-emerald-400">
        <h2 className="text-3xl lg:text-4xl font-bold text-emerald-900 mb-6 md:mb-8 lg:mb-10 text-center">🌈 Words for Your Journey</h2>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          <div className="bg-white rounded-lg p-5 md:p-6 lg:p-7 shadow-sm border-l-4 border-emerald-300">
            <p className="text-base lg:text-xl text-gray-700 italic leading-relaxed">
              "Your feelings are real and important. You don't need to rush or 'get over it.' Healing isn't a race—it's a journey, and every gentle step forward counts."
            </p>
            <p className="text-emerald-700 font-semibold mt-3 lg:mt-4">— You're allowed to take time.</p>
          </div>
          <div className="bg-white rounded-lg p-5 md:p-6 lg:p-7 shadow-sm border-l-4 border-teal-300">
            <p className="text-base lg:text-xl text-gray-700 italic leading-relaxed">
              "You are stronger than you know. The fact that you're here, seeking understanding and support, shows incredible courage. You've got this."
            </p>
            <p className="text-teal-700 font-semibold mt-3 lg:mt-4">— One step at a time.</p>
          </div>
        </div>
      </div>

      {/* What You'll Discover */}
      <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 lg:p-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 md:mb-10 lg:mb-12 text-center">🎯 What You Can Expect Here</h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-indigo-700 flex items-center gap-2">
              <span>✅ Honest Information</span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Clear, evidence-based explanations of mental health conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Practical strategies and coping tools you can use today</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Recognition that mental health is complex and personal</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
              <span>💝 Compassionate Support</span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>No judgment, ever. Your experience is valid.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Guidance tailored to different life stages and situations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Resources for getting professional help when you need it</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-10 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Choose your path above, explore at your own pace, and remember — seeking support is one of the bravest things you can do.
        </p>
        <p className="text-xl font-semibold">
          You've got this. We're here. 💜
        </p>
      </div>

    </div>
  )
}