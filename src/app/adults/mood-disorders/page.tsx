'use client';

export default function MoodDisordersPage() {
  return (
    <div id="top" className="space-y-12">
      <div className="bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50 rounded-2xl p-8 md:p-10 text-center shadow-lg border border-purple-200">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-3 md:mb-4">
          <span className="mr-3">💜</span> Mood Disorders
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 leading-relaxed">
          Understanding and managing mood conditions with compassion and care.
          <span className="block mt-2 text-purple-600 italic">You don't have to navigate this journey alone.</span>
        </p>
      </div>

      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl shadow-md p-6 md:p-8 border border-purple-100">
        <div className="flex items-start">
          <span className="text-3xl mr-4 mt-1">💙</span>
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-3">A Gentle Introduction</h3>
            <p className="text-gray-700 leading-relaxed">
              If you're here, you or someone you care about may be experiencing mood changes that feel overwhelming.
              <span className="font-medium text-purple-700"> Please know that reaching out for information is a brave first step.</span>
              Mood disorders are common, treatable, and many people live full and meaningful lives with the right support.
              This page is here to help you understand what you might be experiencing and find the help you deserve.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-teal-100">
        <h2 className="text-3xl font-semibold text-teal-700 mb-8 flex items-center">
          <span className="mr-3">🌱</span> Understanding Mood Disorders
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-teal-600 mb-4 flex items-center">
              <span className="mr-2">💜</span> What Are Mood Disorders?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Mood disorders are mental health conditions that involve changes in mood that can feel intense and lasting.
              <span className="font-medium text-teal-700"> These experiences are real and valid</span> — they're not a sign of weakness or personal failing.
              Many people experience mood disorders, and with understanding, treatment, and support, it is possible to feel better and live well.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-teal-600 mb-4 flex items-center">
              <span className="mr-2">📖</span> Types of Mood Disorders
            </h3>
            <p className="text-gray-600 mb-6 italic">Different people experience mood changes in different ways. Here are some common types:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">🌊</span> Bipolar Disorder
                </h4>
                <p className="text-gray-700 mb-3">
                  Involves shifts between different mood states — times of higher energy and mood (manic episodes) and times of lower mood (depressive episodes).
                </p>
                <div className="bg-teal-50 rounded-lg p-3 mt-3">
                  <p className="text-sm text-teal-700">
                    <strong>✨ During higher mood times:</strong> You might feel more energetic, need less sleep, have lots of ideas, or feel unusually upbeat.
                  </p>
                  <p className="text-sm text-teal-700 mt-2">
                    <strong>🌧️ During lower mood times:</strong> You might feel tired, sad, lose interest in things, or find it hard to concentrate.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">🌅</span> Cyclothymic Disorder
                </h4>
                <p className="text-gray-700 mb-3">
                  Involves mood changes that are milder and more ongoing, without reaching the full intensity of the higher or lower mood episodes.
                </p>
                <p className="text-sm text-teal-600 bg-teal-50 rounded-lg p-2">
                  Symptoms may come and go over a longer period, often for two years or more.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">🔄</span> Disruptive Mood Dysregulation Disorder
                </h4>
                <p className="text-gray-700 mb-3">
                  Involves frequent temper outbursts and ongoing irritability, typically diagnosed in younger people.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">📉</span> Depression with Bipolar Features
                </h4>
                <p className="text-gray-700 mb-3">
                  Involves periods of low mood that may occur as part of a bipolar condition, which can sometimes take time to identify.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-teal-600 mb-4 flex items-center">
              <span className="mr-2">💫</span> Recognising Your Experience
            </h3>
            <p className="text-gray-600 mb-4">
              Understanding your mood patterns can be the first step toward feeling better. Here's what you might notice:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
                  <span className="mr-2">✨</span> Higher Mood Times
                </h4>
                <ul className="space-y-2 text-gray-700 ml-2">
                  <li>• Feeling unusually upbeat or full of energy</li>
                  <li>• Needing less sleep but still feeling rested</li>
                  <li>• Thoughts racing or talking quickly</li>
                  <li>• Feeling like you can take on the world</li>
                  <li>• Doing things without thinking them through</li>
                  <li>• Finding it hard to focus on one thing</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-200">
                <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">🌧️</span> Lower Mood Times
                </h4>
                <ul className="space-y-2 text-gray-700 ml-2">
                  <li>• Feeling sad, empty, or down most of the day</li>
                  <li>• Losing interest in things you usually enjoy</li>
                  <li>• Changes in appetite or weight</li>
                  <li>• Sleep difficulties (too much or too little)</li>
                  <li>• Feeling tired or low on energy</li>
                  <li>• Harsh thoughts about yourself</li>
                  <li>• Difficult thoughts that need support</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 mt-4 italic text-center">
              💙 Remember: Having some of these experiences doesn't mean you have a mood disorder. A professional can help you understand what you're going through.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl shadow-lg p-8 border border-emerald-100">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-8 flex items-center">
          <span className="mr-3">🌿</span> Self-Help and Coping Strategies
        </h2>
        <p className="text-gray-600 mb-6">
          While professional support is important, there are many gentle ways to support yourself along the way.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-emerald-600 mb-4 flex items-center">
              <span className="mr-2">👐</span> What Might Help During Different Times
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                  <span className="mr-2">✨</span> When You're Feeling Higher Energy
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Take time before making big decisions</li>
                  <li>• Let someone you trust know how you're feeling</li>
                  <li>• Try calming activities like walking in nature</li>
                  <li>• Keep to regular sleep times as much as possible</li>
                  <li>• Be gentle with yourself if you overspend — it happens</li>
                  <li>• Reach out to your care team if things feel intense</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl border border-indigo-200 shadow-sm">
                <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                  <span className="mr-2">🌧️</span> When You're Feeling Low
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Do small things to take care of yourself</li>
                  <li>• Set tiny goals — even getting dressed is a win</li>
                  <li>• Try to stay connected with someone you trust</li>
                  <li>• Gentle movement can help, even a short walk</li>
                  <li>• Be patient with yourself — low moods pass</li>
                  <li>• Talk to someone about how you're feeling</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-emerald-600 mb-4 flex items-center">
              <span className="mr-2">🌱</span> Looking After Yourself Over Time
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                  <span className="mr-2">😴</span> Daily Routines
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Try to keep regular sleep patterns (7-9 hours)</li>
                  <li>• Eat at regular times</li>
                  <li>• Gentle movement when you can</li>
                  <li>• Find ways to relax</li>
                  <li>• Limit alcohol and caffeine</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                  <span className="mr-2">📓</span> Keeping Track
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Write down how you're feeling</li>
                  <li>• Notice patterns in your mood</li>
                  <li>• Write down what might trigger changes</li>
                  <li>• Track how you respond to treatment</li>
                  <li>• Share your notes with your care team</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
                  <span className="mr-2">💕</span> Building Support
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Tell trusted people what helps you</li>
                  <li>• Look into support groups</li>
                  <li>• Have a plan for harder times</li>
                  <li>• Know your early warning signs</li>
                  <li>• Keep in touch with your care team</li>
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
                  <span className="mr-2">💊</span> Medication
                </h4>
                <p className="text-gray-700 mb-3 text-sm">
                  Medication can help stabilise moods and make daily life easier. Your doctor will work with you to find what suits you best.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Mood stabilisers:</strong> Can help smooth out mood swings</li>
                  <li><strong>Other medications:</strong> Some antipsychotics or antidepressants may be used</li>
                  <li><strong>Sleep support:</strong> Short-term help if sleep is difficult</li>
                </ul>
                <p className="text-sm text-amber-600 mt-3 bg-amber-50 rounded-lg p-2">
                  💡 Never stop medication suddenly — always talk to your doctor first.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
                <h4 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
                  <span className="mr-2">🗣️</span> Talking Therapies
                </h4>
                <p className="text-gray-700 mb-3 text-sm">
                  Talking to a trained therapist can help you understand your experiences and develop ways to cope.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>CBT:</strong> Helps change unhelpful thought patterns</li>
                  <li><strong>Daily routines therapy:</strong> Focuses on regular patterns</li>
                  <li><strong>Family therapy:</strong> Helps loved ones support you better</li>
                  <li><strong>Education:</strong> Learning more about your experiences</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 via-orange-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
            <h3 className="text-2xl font-medium text-amber-600 mb-4 flex items-center">
              <span className="mr-2">🩺</span> When to Speak to Someone
            </h3>
            <p className="text-gray-700 mb-4">
              It's a good idea to talk to your GP or mental health professional if:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 grid md:grid-cols-2 gap-2">
              <li>• Your mood changes are affecting daily life</li>
              <li>• You're finding it hard to cope</li>
              <li>• You notice changes after starting treatment</li>
              <li>• Work or relationships are becoming difficult</li>
              <li>• You want to understand what you're experiencing</li>
              <li>• You have questions about medication</li>
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
              <span className="mr-2">💔</span> If You're Feeling Suicidal
            </h3>
            <p className="text-gray-700 mb-4">These feelings are temporary, even when they don't seem like it:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Talk to someone you trust right now</li>
              <li>• Call your GP or crisis team</li>
              <li>• Go to your nearest A&E</li>
              <li>• Remove access to anything you might harm yourself with</li>
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
              <span className="mr-2">🤝</span> Specialist Organisations
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Bipolar UK:</strong> bipolaruk.org — Helpline 0333 323 3880</li>
              <li><strong>Mind:</strong> mind.org.uk — Infoline 0300 123 3393</li>
              <li><strong>Rethink Mental Illness:</strong> rethink.org — Advice line 0300 5000 927</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">🩺</span> Getting Professional Help
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Your GP:</strong> First step for assessment and referral</li>
              <li><strong>IAPT:</strong> NHS talking therapies (self-referral available)</li>
              <li><strong>Mental Health Team:</strong> Via GP referral</li>
              <li><strong>Private Therapy:</strong> Find therapists through BACP or BABCP</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <div className="bg-gradient-to-r from-violet-100 via-purple-50 to-fuchsia-50 rounded-2xl shadow-md p-6 md:p-8 border border-purple-200 text-center">
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">💙 A Final Note</h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          If you're reading this because you're struggling, please know that taking the time to learn more is a real step forward.
          Mood disorders are medical conditions, not character flaws. With the right support, many people find ways to live well and thrive.
          You deserve understanding, care, and help — and all of that is available to you.
        </p>
        <p className="text-purple-600 font-medium mt-4">
          🌱 Take things one step at a time. You're not alone on this journey.
        </p>
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
