'use client';

import Link from 'next/link';

export default function TeenBodyImagePage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-50 to-green-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-lime-800 mb-4 md:mb-6">✨ Body Image & Self-Esteem</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          Your teen years bring physical changes and new feelings about your body. Learning to appreciate and accept yourself is crucial.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          You're not alone if you struggle with body image - most teens do. There are ways to build healthy self-esteem.
        </p>
      </div>

      {/* Understanding Body Image */}
      <div className="bg-gradient-to-br from-lime-50 to-lime-50 rounded-xl shadow-lg p-5 md:p-8 border border-lime-200">
        <h2 className="text-3xl font-semibold text-lime-800 mb-6 text-center">🤔 What is Body Image?</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Body image is how you see and feel about your body - your appearance, size, shape, and abilities. It's closely connected to self-esteem.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            A positive body image doesn't mean thinking you're perfect. It means accepting and respecting your body, even if it doesn't match media portrayals.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Many factors affect body image: social media, friends, family, culture, and your own internal voice. All of these can be changed.
          </p>
        </div>
      </div>

      {/* Body Image Challenges */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-200">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">⚠️ Common Body Image Challenges</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">📱</span>Social Media Impact
            </h3>
            <p className="text-gray-700 mb-2">
              Instagram, TikTok, and Snapchat often show unrealistic, filtered versions of people. Comparison is the thief of joy.
            </p>
            <p className="text-sm text-green-600">Solution: Limit social media and follow accounts that promote body positivity</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">👥</span>Peer Comments & Bullying
            </h3>
            <p className="text-gray-700 mb-2">
              Negative comments from peers about appearance can deeply affect body image. Bullying can lead to serious mental health issues.
            </p>
            <p className="text-sm text-green-600">Solution: Surround yourself with supportive people; report bullying to adults</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">🧠</span>Negative Self-Talk
            </h3>
            <p className="text-gray-700 mb-2">
              The critical voice in your head can be harsh. You might focus on flaws instead of strengths. This internal dialogue shapes how you feel about yourself.
            </p>
            <p className="text-sm text-green-600">Solution: Practice positive affirmations and challenge negative thoughts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
              <span className="mr-2">🍔</span>Diet & Exercise Obsession
            </h3>
            <p className="text-gray-700 mb-2">
              Unhealthy focus on weight, extreme dieting, or excessive exercise can lead to eating disorders and body dysmorphia.
            </p>
            <p className="text-sm text-green-600">Solution: Focus on health, not appearance; move your body for joy, not punishment</p>
          </div>
        </div>
      </div>

      {/* Building Positive Body Image */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 border border-emerald-200">
        <h2 className="text-3xl font-semibold text-emerald-800 mb-6 text-center">💚 Building Positive Body Image</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-emerald-700 mb-3 flex items-center">
              <span className="mr-2">👀</span>Change Your Focus
            </h3>
            <p className="text-gray-700">
              Instead of focusing only on appearance, notice what your body can do. Can you dance, run, create, or help others? That's what matters.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-emerald-700 mb-3 flex items-center">
              <span className="mr-2">🚀</span>Practice Self-Care
            </h3>
            <p className="text-gray-700">
              Treat your body with respect: eat well, move it, sleep enough, and take care of your skin and hygiene. This builds self-respect.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-emerald-700 mb-3 flex items-center">
              <span className="mr-2">📵</span>Curate Your Media
            </h3>
            <p className="text-gray-700">
              Unfollow accounts that make you feel bad about yourself. Follow creators who promote body diversity and positivity instead.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-emerald-700 mb-3 flex items-center">
              <span className="mr-2">💬</span>Positive Self-Talk
            </h3>
            <p className="text-gray-700">
              Notice when you're being critical. Replace "I hate my ..." with "I appreciate my body because ...". It feels silly but works.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-emerald-700 mb-3 flex items-center">
              <span className="mr-2">👕</span>Wear What Feels Good
            </h3>
            <p className="text-gray-700">
              Wear clothes that make you feel comfortable and confident, not clothes that fit media's expectations. Your comfort matters.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-emerald-700 mb-3 flex items-center">
              <span className="mr-2">🤝</span>Find Your People
            </h3>
            <p className="text-gray-700">
              Spend time with people who appreciate you for who you are, not how you look. Real friends don't judge based on appearance.
            </p>
          </div>
        </div>
      </div>

      {/* Health vs Appearance */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg p-8 border border-teal-200">
        <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">💪 Health vs Appearance</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            <span className="font-semibold">Important distinction:</span> Health looks different on different bodies. You can't tell someone's health by looking at them.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-teal-700 mb-2">Real Health Looks Like:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Having energy for activities you enjoy</li>
                <li>• Eating foods that make you feel good</li>
                <li>• Moving your body in ways you enjoy</li>
                <li>• Getting enough sleep</li>
                <li>• Managing stress effectively</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-teal-700 mb-2">Unhealthy Behaviors Include:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Extreme restriction or overeating</li>
                <li>• Obsessive exercise to "earn" food</li>
                <li>• Negative self-talk and comparison</li>
                <li>• Isolation due to body image concerns</li>
                <li>• Using appearance to define worth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* When to Get Help */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">🆘 When to Seek Support</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4">Talk to a doctor, counselor, or trusted adult if:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You're struggling with disordered eating (restricting, binging, purging)</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>Body image concerns are affecting your mental health or school</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You're experiencing bullying related to your appearance</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You're having thoughts of self-harm</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You feel trapped in negative thoughts about your body</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You notice changes in your eating or exercise habits</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-800 font-medium">
              💡 Remember: Your body is not an apology. You deserve to feel comfortable in it, and professional support can help.
            </p>
          </div>
        </div>
      </div>

      {/* Affirmations */}
      <div className="bg-gradient-to-br from-yellow-50 to-lime-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">✨ Positive Affirmations</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-sm mb-4 italic">Try saying these to yourself daily, especially when you're struggling:</p>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-3">★</span>
              <span>"I appreciate my body for what it can do."</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-3">★</span>
              <span>"My worth is not determined by my appearance."</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-3">★</span>
              <span>"I deserve to feel comfortable in my own skin."</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-3">★</span>
              <span>"My body is unique and that's beautiful."</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-3">★</span>
              <span>"I am worthy exactly as I am."</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-3">★</span>
              <span>"I choose to be kind to myself."</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors mr-4"
        >
          Back to Top
        </button>
        <Link href="/teens" className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          ← Back to Teen Support
        </Link>
      </div>
    </div>
  );
}
