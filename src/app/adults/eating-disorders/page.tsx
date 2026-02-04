'use client';

export default function EatingDisordersPage() {
  return (
    <div id="top" className="space-y-12">
      <div className="bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-50 rounded-2xl p-8 md:p-10 text-center shadow-lg border border-rose-200">
        <h1 className="text-3xl md:text-5xl font-bold text-rose-800 mb-3 md:mb-4">
          <span className="mr-3">💜</span> Food, Body & Eating
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 leading-relaxed">
          Understanding eating concerns and finding a healthier relationship with food and yourself.
          <span className="block mt-2 text-rose-600 italic">Recovery is possible, and you deserve support.</span>
        </p>
      </div>

      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 rounded-2xl shadow-md p-6 md:p-8 border border-rose-100">
        <div className="flex items-start">
          <span className="text-3xl mr-4 mt-1">💙</span>
          <div>
            <h3 className="text-xl font-semibold text-rose-700 mb-3">A Gentle Introduction</h3>
            <p className="text-gray-700 leading-relaxed">
              If you're here, you or someone you care about may be struggling with food, body image, or eating patterns.
              <span className="font-medium text-rose-700"> Please know that reaching out for information is a sign of strength.</span>
              Difficulties with eating and body image are more common than many realise, and with understanding and support, things can get better.
              This page is here to help you understand what you might be experiencing and find the help you deserve.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-teal-100">
        <h2 className="text-3xl font-semibold text-teal-700 mb-8 flex items-center">
          <span className="mr-3">🌱</span> Understanding Eating Concerns
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-teal-600 mb-4 flex items-center">
              <span className="mr-2">💜</span> What Are Eating Difficulties?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Many people experience challenges with food, eating, and how they feel about their body.
              <span className="font-medium text-teal-700"> These experiences are valid and real</span> — they're not a sign of weakness or vanity.
              Difficulties with eating often involve complex feelings and are not simply about food or willpower.
              With understanding, treatment, and support, recovery is possible and many people go on to live full, meaningful lives.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-teal-600 mb-4 flex items-center">
              <span className="mr-2">📖</span> Types of Eating Difficulties
            </h3>
            <p className="text-gray-600 mb-6 italic">Different people experience these challenges in different ways. Here are some common experiences:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">⚖️</span> Anorexia Nervosa
                </h4>
                <p className="text-gray-700 mb-3">
                  When food intake becomes very restricted, there's intense fear about gaining weight, and body image feels distorted.
                </p>
                <div className="space-y-2 text-sm text-teal-600 bg-teal-50 rounded-lg p-3">
                  <p><strong>✨ Some people:</strong> Limit food and exercise without binge eating</p>
                  <p><strong>🔄 Others:</strong> Have periods of eating a lot followed by purging</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">🔄</span> Bulimia Nervosa
                </h4>
                <p className="text-gray-700 mb-3">
                  Cycles of eating larger amounts of food followed by ways of trying to compensate, which can feel hard to stop.
                </p>
                <p className="text-sm text-teal-600 bg-teal-50 rounded-lg p-2">
                  People may be at a normal weight, which can make it harder for others to notice they're struggling.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">🍔</span> Binge Eating
                </h4>
                <p className="text-gray-700 mb-3">
                  Repeatedly eating large amounts of food without purging, often feeling out of control and distressed afterward.
                </p>
                <p className="text-sm text-teal-600 bg-teal-50 rounded-lg p-2">
                  This is one of the most common eating difficulties.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">🔍</span> Other Specified Eating Difficulties
                </h4>
                <p className="text-gray-700 mb-3">
                  Eating concerns that don't fit neatly into other categories but still cause distress and affect daily life.
                </p>
                <p className="text-sm text-teal-600 bg-teal-50 rounded-lg p-2">
                  Includes atypical anorexia, purging without binging, and night eating.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-teal-600 mb-4 flex items-center">
              <span className="mr-2">💫</span> Recognising Your Experience
            </h3>
            <p className="text-gray-600 mb-4">
              Understanding what you're experiencing can be the first step toward feeling better. Here are some things people notice:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">🫂</span> How You Might Feel or Behave
                </h4>
                <ul className="space-y-2 text-gray-700 ml-2">
                  <li>• Worrying a lot about weight or body shape</li>
                  <li>• Feeling anxious around meal times</li>
                  <li>• Strict food rules or restrictions</li>
                  <li>• Eating in secret or hiding food</li>
                  <li>• Exercising excessively to "burn off" food</li>
                  <li>• Feeling your worth is tied to how you look</li>
                  <li>• Comparing your body to others often</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-2xl border border-rose-200">
                <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                  <span className="mr-2">💪</span> Physical Signs to Watch For
                </h4>
                <ul className="space-y-2 text-gray-700 ml-2">
                  <li>• Feeling tired or low on energy</li>
                  <li>• Feeling cold more easily</li>
                  <li>• Changes in hair or skin</li>
                  <li>• Digestive discomfort</li>
                  <li>• Dental concerns (from vomiting)</li>
                  <li>• Irregular or absent periods</li>
                  <li>• Unexplained weight changes</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 mt-4 italic text-center">
              💙 Remember: Having some of these experiences doesn't mean you have an eating disorder. A professional can help you understand what you're going through.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl shadow-lg p-8 border border-emerald-100">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-8 flex items-center">
          <span className="mr-3">🌿</span> Recovery and Support
        </h2>
        <p className="text-gray-600 mb-6">
          Recovery is possible. Many people find that with the right support, they can develop a healthier relationship with food and their body.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-emerald-600 mb-4 flex items-center">
              <span className="mr-2">💕</span> Ways to Support Yourself
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                  <span className="mr-2">🤝</span> For Yourself
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Be gentle with yourself — recovery takes time</li>
                  <li>• Talk to someone you trust</li>
                  <li>• Challenge unhelpful thoughts kindly</li>
                  <li>• Try not to isolate yourself</li>
                  <li>• Focus on progress, not perfection</li>
                  <li>• Reach out for professional help</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                  <span className="mr-2">👨‍👩‍👧</span> For Family & Friends
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Learn about eating difficulties</li>
                  <li>• Express care without criticism</li>
                  <li>• Avoid comments about weight or looks</li>
                  <li>• Listen without trying to "fix"</li>
                  <li>• Encourage professional support</li>
                  <li>• Look after your own wellbeing too</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                  <span className="mr-2">🌸</span> Gentle Approaches
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Regular, balanced meals when possible</li>
                  <li>• Movement that feels good, not punishing</li>
                  <li>• Kindness toward your body</li>
                  <li>• Mindfulness around food and feelings</li>
                  <li>• Self-compassion practices</li>
                  <li>• Body respect over body criticism</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl shadow-lg p-8 border border-amber-100">
        <h2 className="text-3xl font-semibold text-amber-700 mb-8 flex items-center">
          <span className="mr-3">🤝</span> Professional Support and Treatment
        </h2>
        <p className="text-gray-600 mb-6">
          Reaching out for professional help is a sign of strength. There are many types of support available, and finding what works for you is a journey.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-amber-600 mb-4 flex items-center">
              <span className="mr-2">💊</span> Types of Treatment
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
                <h4 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
                  <span className="mr-2">🗣️</span> Talking Therapies
                </h4>
                <p className="text-gray-700 mb-3 text-sm">
                  Talking to a trained therapist can help you understand your experiences and develop healthier ways of relating to food and your body.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>CBT-E:</strong> Helps change unhelpful thoughts about food and body</li>
                  <li><strong>Family Therapy:</strong> Involves family in supporting recovery</li>
                  <li><strong>DBT:</strong> Helps with emotional regulation</li>
                  <li><strong>IPT:</strong> Looks at relationship patterns</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
                <h4 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
                  <span className="mr-2">🩺</span> Medical & Nutritional Support
                </h4>
                <p className="text-gray-700 mb-3 text-sm">
                  Physical health support and guidance with eating from professionals who understand.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Medical monitoring:</strong> Physical health checks</li>
                  <li><strong>Dietitian:</strong> Gentle nutrition guidance</li>
                  <li><strong>Medication:</strong> For low mood or anxiety alongside eating difficulties</li>
                  <li><strong>Specialist services:</strong> For more intensive support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 via-orange-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
            <h3 className="text-2xl font-medium text-amber-600 mb-4 flex items-center">
              <span className="mr-2">🩺</span> Taking the First Step
            </h3>
            <p className="text-gray-700 mb-4">
              If you're considering seeking help, here's how to start:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 grid md:grid-cols-2 gap-2">
              <li>• Talk to your GP about what you're experiencing</li>
              <li>• Be honest about how you really feel</li>
              <li>• Ask about specialist eating disorder services</li>
              <li>• Consider NHS or private options</li>
              <li>• Contact specialist charities for guidance</li>
              <li>• Bring a trusted person to appointments if helpful</li>
            </ul>
            <p className="text-amber-700 mt-4 font-medium">
              💙 Your GP is there to help, not judge. They can listen and point you toward the right support.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 rounded-2xl shadow-lg p-8 border border-rose-100">
        <h2 className="text-3xl font-semibold text-rose-700 mb-8 flex items-center">
          <span className="mr-3">💙</span> Support When You Need It Most
        </h2>
        <p className="text-gray-600 mb-6">
          If things feel overwhelming, please remember that help is always available. You don't have to cope alone.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-white to-rose-50 p-6 rounded-2xl border border-rose-200 shadow-sm">
            <h3 className="text-xl font-semibold text-rose-800 mb-4 flex items-center">
              <span className="mr-2">🆘</span> Immediate Support
            </h3>
            <p className="text-gray-700 mb-4">If you need urgent help right now:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg font-semibold mr-3">Emergency</span>
                <span>Call <strong>999</strong> or go to A&E</span>
              </li>
              <li className="flex items-center">
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg font-semibold mr-3">NHS</span>
                <span>Call <strong>111</strong> for urgent medical advice</span>
              </li>
              <li className="flex items-center">
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg font-semibold mr-3">Samaritans</span>
                <span><strong>116 123</strong> (free, 24/7)</span>
              </li>
              <li className="flex items-center">
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg font-semibold mr-3">Shout</span>
                <span>Text <strong>SHOUT to 85258</strong></span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-2xl border border-pink-200 shadow-sm">
            <h3 className="text-xl font-semibold text-pink-800 mb-4 flex items-center">
              <span className="mr-2">💔</span> If You're Struggling
            </h3>
            <p className="text-gray-700 mb-4">These feelings are temporary, even when they don't seem like it:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Talk to someone you trust right now</li>
              <li>• Call your GP or local crisis team</li>
              <li>• Go to your nearest A&E</li>
              <li>• Contact Beat Eating Disorders helpline</li>
            </ul>
            <p className="text-pink-700 mt-4 font-medium bg-pink-50 rounded-lg p-3">
              💙 You matter. These feelings pass. Please reach out — someone wants to help.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-50 rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8 flex items-center">
          <span className="mr-3">📖</span> Helpful Resources in the UK
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">🤝</span> Specialist Support
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Beat Eating Disorders:</strong> beateatingdisorders.org.uk — Helpline 0808 801 0677</li>
              <li><strong>Anorexia Nervosa and Bulimia Care:</strong> anbc.org.uk</li>
              <li><strong>Men Get Eating Disorders Too:</strong> mengetedstoo.co.uk</li>
              <li><strong>Mind:</strong> mind.org.uk — Infoline 0300 123 3393</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">🩺</span> Getting Professional Help
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Your GP:</strong> First step for assessment and referral</li>
              <li><strong>Community Eating Disorder Services:</strong> Specialist NHS teams</li>
              <li><strong>Hospital treatment:</strong> For serious physical concerns</li>
              <li><strong>Private Therapy:</strong> Find therapists through BACP or BABCP</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <div className="bg-gradient-to-r from-rose-100 via-pink-50 to-fuchsia-50 rounded-2xl shadow-md p-6 md:p-8 border border-rose-200 text-center">
        <h3 className="text-2xl font-semibold text-rose-700 mb-4">💙 A Final Note</h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          If you're reading this because you're struggling, please know that taking the time to learn more is a real step forward.
          Difficulties with food and body image are medical conditions, not character flaws.
          With the right support, many people find ways to heal and live well.
          You deserve understanding, care, and help — and all of that is available to you.
        </p>
        <p className="text-rose-600 font-medium mt-4">
          🌱 Take things one step at a time. You're not alone on this journey.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm sm:text-base"
        >
          Back to Top
        </button>
        <a href="/the-wellbeing-corner/adults" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Adults
        </a>
      </div>
    </div>
  )
}
