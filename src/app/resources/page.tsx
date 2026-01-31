'use client';

import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-800 mb-3 md:mb-4">🌍 UK Mental Health Resources</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
          Comprehensive directory of mental health support, helplines, and services available across the UK.
        </p>
        <p className="text-base md:text-lg text-gray-600">Whether you need immediate crisis support or ongoing mental health care, help is available.</p>
      </div>

      {/* Emergency & Crisis Support */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-5 md:p-8 border border-red-100">
        <h2 className="text-xl md:text-3xl font-semibold text-red-800 mb-2 text-center">🆘 Emergency & Crisis Support</h2>
        <p className="text-center text-gray-600 mb-6">Available 24/7, free and confidential</p>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-2">📞 Samaritans</h3>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> 116 123 (available 24/7, free)</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> jo@samaritans.org</p>
            <p className="text-gray-700 mb-2"><strong>Website:</strong> samaritans.org</p>
            <p className="text-sm text-gray-600">Available for any emotional distress, crisis, or suicidal thoughts. Trained volunteers listen without judgment.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-700 mb-2">🆘 Shout Crisis Text Line</h3>
            <p className="text-gray-700 mb-2"><strong>Text:</strong> SHOUT to 85258 (available 24/7)</p>
            <p className="text-gray-700 mb-2"><strong>Website:</strong> giveusashout.org</p>
            <p className="text-sm text-gray-600">Crisis text support for anyone in emotional distress. Text-based support if you're not comfortable calling.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">🚑 NHS 111</h3>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> 111 (free, available 24/7)</p>
            <p className="text-gray-700 mb-2"><strong>Website:</strong> nhs.uk/using-the-nhs/nhs-services/urgent-and-emergency-services/nhs-111/</p>
            <p className="text-sm text-gray-600">For urgent (but not life-threatening) mental or physical health concerns. Non-emergency medical advice anytime.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-700">
            <h3 className="text-xl font-bold text-red-700 mb-2">🚨 Emergency Services</h3>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> 999 (available 24/7)</p>
            <p className="text-sm text-gray-600">For immediate danger to life. Police, ambulance, or fire service response.</p>
          </div>
        </div>
      </div>

      {/* Mental Health Organizations */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-5 md:p-8 border border-blue-100">
        <h2 className="text-xl md:text-3xl font-semibold text-blue-800 mb-2 text-center">💙 Major Mental Health Organizations</h2>
        <p className="text-center text-gray-600 mb-6">Information, support, and advocacy</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-blue-700 mb-2">🧠 Mind</h3>
            <ul className="text-gray-700 space-y-1 text-sm mb-3">
              <li><strong>Website:</strong> mind.org.uk</li>
              <li><strong>Info Line:</strong> 0300 123 3393 (weekdays 9am-6pm)</li>
              <li><strong>Text:</strong> MIND to 50808</li>
            </ul>
            <p className="text-sm text-gray-600">Comprehensive mental health information, support, and awareness. Covers all conditions.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-purple-700 mb-2">❤️ Rethink Mental Illness</h3>
            <ul className="text-gray-700 space-y-1 text-sm mb-3">
              <li><strong>Website:</strong> rethink.org</li>
              <li><strong>Helpline:</strong> 0808 801 0414 (weekdays 10am-2pm)</li>
              <li><strong>Text:</strong> Support available via website</li>
            </ul>
            <p className="text-sm text-gray-600">Support for severe mental illness including schizophrenia, bipolar disorder, and personality disorders.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-green-700 mb-2">🌱 Mental Health Foundation</h3>
            <ul className="text-gray-700 space-y-1 text-sm mb-3">
              <li><strong>Website:</strong> mentalhealth.org.uk</li>
              <li><strong>Helpline:</strong> Available via website</li>
              <li><strong>Focus:</strong> Prevention & wellbeing research</li>
            </ul>
            <p className="text-sm text-gray-600">Research, information, and support for mental wellbeing. Focus on prevention and early intervention.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-pink-700 mb-2">💪 Mind-affiliated Organizations</h3>
            <ul className="text-gray-700 space-y-1 text-sm mb-3">
              <li><strong>Anxiety UK:</strong> anxietyuk.org.uk</li>
              <li><strong>Depression Alliance:</strong> depressionalliance.org</li>
              <li><strong>Bipolar UK:</strong> bipolaruk.org.uk</li>
            </ul>
            <p className="text-sm text-gray-600">Specialized support for specific mental health conditions.</p>
          </div>
        </div>
      </div>

      {/* Condition-Specific Support */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-5 md:p-8 border border-green-100">
        <h2 className="text-xl md:text-3xl font-semibold text-green-800 mb-2 text-center">🎯 Condition-Specific Support</h2>
        <p className="text-center text-gray-600 mb-6">Find resources tailored to your specific condition</p>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
            <h3 className="font-bold text-yellow-800 mb-2">😟 Anxiety</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Anxiety UK:</strong> anxietyuk.org.uk | 03444 775 774</li>
              <li>✓ <strong>OCD Action:</strong> ocdaction.org.uk</li>
              <li>✓ <strong>Phobias Society:</strong> phobias-society.org.uk</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
            <h3 className="font-bold text-purple-800 mb-2">😢 Depression</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Depression Alliance:</strong> depressionalliance.org</li>
              <li>✓ <strong>Aware:</strong> aware.org.uk</li>
              <li>✓ <strong>Mind (Depression):</strong> mind.org.uk/depression</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-pink-400">
            <h3 className="font-bold text-pink-800 mb-2">⚡ Bipolar Disorder</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Bipolar UK:</strong> bipolaruk.org.uk | 0333 323 3880</li>
              <li>✓ <strong>Balanced Minds:</strong> balancedminds.org</li>
              <li>✓ <strong>Support Groups:</strong> Throughout UK</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400">
            <h3 className="font-bold text-teal-800 mb-2">🛡️ PTSD & Trauma</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Combat Stress:</strong> combatstress.org.uk (military trauma)</li>
              <li>✓ <strong>Rape Crisis England & Wales:</strong> rapecrisis.org.uk</li>
              <li>✓ <strong>PTSD UK:</strong> ptsduk.org | 0330 335 0895</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
            <h3 className="font-bold text-orange-800 mb-2">🧠 Neurodiversity (ADHD, Autism)</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>ADHD Foundation:</strong> adhdfoundation.org.uk</li>
              <li>✓ <strong>Autism Society:</strong> autism.org.uk</li>
              <li>✓ <strong>The National Autistic Society:</strong> autism.org.uk</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
            <h3 className="font-bold text-blue-800 mb-2">💚 Chronic Illness & Pain</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Action for M.E.:</strong> actionforme.org.uk (ME/CFS)</li>
              <li>✓ <strong>Pain Concern:</strong> painconcern.org.uk</li>
              <li>✓ <strong>Chronic Illness Inclusion:</strong> chronicsupport.org.uk</li>
            </ul>
          </div>
        </div>
      </div>

      {/* NHS Services */}
      <div className="bg-white rounded-lg shadow-md p-5 md:p-8 border border-indigo-100">
        <h2 className="text-xl md:text-3xl font-semibold text-indigo-800 mb-4 text-center">🏥 NHS Mental Health Services</h2>
        <p className="text-gray-700 mb-6">Free, confidential mental health support through the NHS</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">📞 Talking Therapies (IAPT)</h3>
            <p className="text-gray-700 text-sm mb-2">Cognitive Behavioral Therapy (CBT), counselling, and other talking treatments. Self-refer or GP referral.</p>
            <p className="text-sm text-indigo-600 font-medium">Find your local service at iapt.nhs.uk</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-3">👥 Community Mental Health Teams</h3>
            <p className="text-gray-700 text-sm mb-2">Support for moderate to severe mental illness. GP referral required.</p>
            <p className="text-sm text-blue-600 font-medium">Ask your GP for referral to your local team</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🚨 Crisis Resolution & Home Treatment Teams</h3>
            <p className="text-gray-700 text-sm mb-2">Intensive support during mental health crisis. Available 24/7. GP or emergency referral.</p>
            <p className="text-sm text-purple-600 font-medium">NHS 111 can refer you in a crisis</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-pink-800 mb-3">🏠 Early Intervention Services</h3>
            <p className="text-gray-700 text-sm mb-2">Support for first-episode psychosis and early signs of serious mental illness (typically ages 14-35).</p>
            <p className="text-sm text-pink-600 font-medium">Ask your GP for referral</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 mb-3">🧑‍⚕️ Your GP</h3>
            <p className="text-gray-700 text-sm mb-2">Starting point for most mental health support. GPs can prescribe medication, provide counselling referrals, or refer to specialist services.</p>
            <p className="text-sm text-green-600 font-medium">First appointment recommended</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">🤝 Every Mind Matters</h3>
            <p className="text-gray-700 text-sm mb-2">Free NHS digital mental health support including self-assessments, guided audio programs, and personalized recommendations.</p>
            <p className="text-sm text-yellow-600 font-medium">nhs.uk/every-mind-matters</p>
          </div>
        </div>
      </div>

      {/* Support for Specific Groups */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg p-5 md:p-8 border border-teal-100">
        <h2 className="text-xl md:text-3xl font-semibold text-teal-800 mb-2 text-center">👥 Support for Specific Groups</h2>
        <p className="text-center text-gray-600 mb-6">Tailored support for different communities</p>

        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-pink-400">
            <h3 className="font-bold text-pink-800 mb-2">👩‍👧 Women's Mental Health</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Women's Health Concern:</strong> womenshealthconcern.org.uk</li>
              <li>✓ <strong>Pink Ribbon Foundation:</strong> (postnatal support)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
            <h3 className="font-bold text-blue-800 mb-2">🧑‍🎓 Young People & Teens</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Childline:</strong> 0800 1111 | childline.org.uk</li>
              <li>✓ <strong>YoungMinds:</strong> youngminds.org.uk | 0808 802 5544</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
            <h3 className="font-bold text-green-800 mb-2">🌈 LGBTQ+ Community</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Switchboard:</strong> switchboard.lgbt | 0300 330 0630</li>
              <li>✓ <strong>Gendered Intelligence:</strong> genderedintelligence.co.uk</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
            <h3 className="font-bold text-orange-800 mb-2">🪖 Military & Veterans</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Combat Stress:</strong> combatstress.org.uk | 0800 138 1619</li>
              <li>✓ <strong>Royal British Legion:</strong> britishlegion.org.uk</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
            <h3 className="font-bold text-purple-800 mb-2">🌍 Black, Asian & Ethnic Minorities</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <strong>Baobab Centre:</strong> baobabcentre.org.uk</li>
              <li>✓ <strong>Mind (BAEM Resources):</strong> mind.org.uk</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Self-Help & Coping Resources */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-5 md:p-8 border border-yellow-100">
        <h2 className="text-xl md:text-3xl font-semibold text-orange-800 mb-4 text-center">🛠️ Self-Help & Coping Resources</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">📱 Mental Health Apps</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Headspace—meditation & mindfulness</li>
              <li>✓ Calm—relaxation & sleep</li>
              <li>✓ MindShift—anxiety management</li>
              <li>✓ Sanvello—mood tracking & CBT</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-orange-800 mb-2">📚 Online Courses & Learning</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Coursera—mental health courses</li>
              <li>✓ FutureLearn—free mental health modules</li>
              <li>✓ YouTube—guided relaxation & therapy</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-green-800 mb-2">👥 Online Support Communities</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ 7 Cups—emotional support chat</li>
              <li>✓ Reddit communities—peer support</li>
              <li>✓ Condition-specific forums</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-blue-800 mb-2">📖 Helpful Websites</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ nhs.uk/mental-health</li>
              <li>✓ mind.org.uk</li>
              <li>✓ rethink.org</li>
              <li>✓ mentalhealth.org.uk</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Workplace & Financial Support */}
      <div className="bg-white rounded-lg shadow-md p-5 md:p-8 border border-teal-100">
        <h2 className="text-xl md:text-3xl font-semibold text-teal-800 mb-4 text-center">💼 Workplace & Financial Support</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-teal-800 mb-2">🏢 Workplace Support</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>✓ <strong>ACAS (Advisory, Conciliation and Arbitration Service):</strong> acas.org.uk—employment rights</li>
              <li>✓ <strong>Mind at Work:</strong> mind.org.uk/workplace</li>
              <li>✓ <strong>Employee Assistance Programs (EAP):</strong> Check with your employer</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2">💷 Financial & Benefits Support</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>✓ <strong>Citizens Advice:</strong> citizensadvice.org.uk—benefits guidance</li>
              <li>✓ <strong>Turn2us:</strong> turn2us.org.uk—grants & benefits</li>
              <li>✓ <strong>StepChange:</strong> stepchange.org—debt advice</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Signposting & Starting Points */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-5 md:p-8 border border-indigo-100">
        <h2 className="text-xl md:text-3xl font-semibold text-indigo-800 mb-4 text-center">🚀 Where to Start?</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-400">
            <h3 className="text-lg font-bold text-indigo-800 mb-2">Not Sure? Start Here:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>📞 <strong>Call your GP—</strong>First point of contact for mental health support</li>
              <li>📞 <strong>Call NHS 111—</strong>For urgent (but not emergency) mental health advice</li>
              <li>💬 <strong>Contact Mind—</strong>Free information about mental health conditions</li>
              <li>🌐 <strong>Visit nhs.uk/mental-health—</strong>Comprehensive NHS resources</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
            <h3 className="text-lg font-bold text-red-800 mb-2">In Crisis? Get Help Now:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>📞 <strong>Samaritans: 116 123—</strong>For any emotional distress</li>
              <li>💬 <strong>Text SHOUT to 85258—</strong>Crisis text support</li>
              <li>🚑 <strong>NHS 111—</strong>For urgent mental health crisis</li>
              <li>🚨 <strong>999—</strong>For immediate danger</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
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
