'use client';

export default function EatingDisordersPage() {
  return (
    <div id="top" className="space-y-12">
      <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-rose-800 mb-3 md:mb-4">🍽️ Eating Disorders</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
          Understanding anorexia, bulimia, binge eating disorder, and the path to recovery.
        </p>
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl shadow-lg p-8 border border-rose-100">
        <h2 className="text-3xl font-semibold text-rose-700 mb-8 flex items-center">
          <span className="mr-3">🧠</span> Understanding Eating Disorders
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-rose-600 mb-4">What Are Eating Disorders?</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Eating disorders are serious mental health conditions characterized by problematic eating behaviors, body image concerns, and often significant distress about body weight and shape. They can affect anyone regardless of age, gender, or background, and often co-occur with other mental health conditions like anxiety, depression, or OCD.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These conditions are not simply about food or willpower—they involve complex interactions between psychological, biological, and social factors. With proper treatment and support, recovery is possible.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-rose-600 mb-4">Types of Eating Disorders</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                  <span className="mr-2">⚖️</span> Anorexia Nervosa
                </h4>
                <p className="text-gray-700 mb-3">
                  Characterized by restricted food intake, intense fear of gaining weight, and distorted body image. Individuals often see themselves as overweight even when dangerously underweight.
                </p>
                <div className="space-y-2 text-sm text-rose-600">
                  <p><strong>Restricting type:</strong> Dieting and exercise without binge eating</p>
                  <p><strong>Binge-eating/purging type:</strong> Episodes of eating large amounts followed by purging</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                  <span className="mr-2">🔄</span> Bulimia Nervosa
                </h4>
                <p className="text-gray-700 mb-3">
                  Involves cycles of binge eating followed by compensatory behaviors like vomiting, laxative use, excessive exercise, or fasting to prevent weight gain.
                </p>
                <p className="text-sm text-rose-600">
                  Unlike anorexia, individuals often maintain a normal weight, making it harder to detect
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                  <span className="mr-2">🍔</span> Binge Eating Disorder
                </h4>
                <p className="text-gray-700 mb-3">
                  Recurrent episodes of eating large amounts of food without compensatory behaviors. Often accompanied by feelings of loss of control, shame, and distress.
                </p>
                <p className="text-sm text-rose-600">
                  Most common eating disorder, frequently leads to weight gain
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3 flex items-center">
                  <span className="mr-2">🔍</span> Other Specified Feeding or Eating Disorder (OSFED)
                </h4>
                <p className="text-gray-700 mb-3">
                  Eating disorders that don't meet full criteria for other types but still cause significant distress and impairment.
                </p>
                <p className="text-sm text-rose-600">
                  Includes atypical anorexia, purging disorder, night eating syndrome
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-rose-600 mb-4">Signs and Symptoms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3">Behavioral Signs</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Dramatic weight changes (gain or loss)</li>
                  <li>• Restricting food, skipping meals</li>
                  <li>• Excessive exercise routines</li>
                  <li>• Frequent bathroom visits after meals</li>
                  <li>• Hoarding food</li>
                  <li>• Unusual food rituals</li>
                  <li>• Secretive eating</li>
                  <li>• Extreme concern about body weight/shape</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3">Physical Signs</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Fatigue and weakness</li>
                  <li>• Dizziness and fainting</li>
                  <li>• Hair loss or thinning</li>
                  <li>• Cold intolerance</li>
                  <li>• Dental problems (from vomiting)</li>
                  <li>• Stomach pain and digestive issues</li>
                  <li>• Irregular or absent periods</li>
                  <li>• Poor wound healing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3">Psychological Signs</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Intense fear of weight gain</li>
                  <li>• Distorted body image</li>
                  <li>• Self-worth tied to weight/shape</li>
                  <li>• Anxiety around meal times</li>
                  <li>• Perfectionism</li>
                  <li>• Depression and mood swings</li>
                  <li>• Social withdrawal</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm">
                <h4 className="text-lg font-semibold text-rose-800 mb-3">Warning Signs of Crisis</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Fainting or seizures</li>
                  <li>• Chest pain or irregular heartbeat</li>
                  <li>• Confusion or disorientation</li>
                  <li>• Severe dehydration</li>
                  <li>• Thoughts of self-harm</li>
                  <li>• Inability to eat or drink</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border border-green-100">
        <h2 className="text-3xl font-semibold text-green-700 mb-8 flex items-center">
          <span className="mr-3">💡</span> Recovery and Support
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-green-600 mb-4">Supporting Recovery</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">For Someone with an Eating Disorder</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Acknowledge the severity of your condition</li>
                  <li>• Reach out for professional help</li>
                  <li>• Avoid isolation—stay connected</li>
                  <li>• Challenge harmful thoughts</li>
                  <li>• Be patient with recovery—it's gradual</li>
                  <li>• Build a supportive team</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">For Friends and Family</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Educate yourself about eating disorders</li>
                  <li>• Express concern without judgment</li>
                  <li>• Avoid comments about weight or appearance</li>
                  <li>• Encourage professional treatment</li>
                  <li>• Practice active listening</li>
                  <li>• Take care of your own wellbeing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Building Healthy Habits</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Regular, balanced meals</li>
                  <li>• Intuitive eating practices</li>
                  <li>• Joyful movement, not punitive exercise</li>
                  <li>• Body neutrality over body positivity</li>
                  <li>• Mindfulness around food</li>
                  <li>• Self-compassion practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-100">
        <h2 className="text-3xl font-semibold text-amber-700 mb-8 flex items-center">
          <span className="mr-3">👨‍⚕️</span> Professional Treatment
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-medium text-amber-600 mb-4">Treatment Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm">
                <h4 className="text-lg font-semibold text-amber-800 mb-3">Types of Therapy</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cognitive Behavioral Therapy (CBT-E):</strong> Most evidence-based treatment for eating disorders</li>
                  <li><strong>Family-Based Treatment (FBT):</strong> For adolescents, involves family in recovery</li>
                  <li><strong>Interpersonal Therapy (IPT):</strong> Addresses relationship issues</li>
                  <li><strong>Dialectical Behavior Therapy (DBT):</strong> For emotion regulation</li>
                  <li><strong>Psychodynamic therapy:</strong> Explores underlying emotional issues</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm">
                <h4 className="text-lg font-semibold text-amber-800 mb-3">Medical Support</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Medical monitoring:</strong> Physical health assessment</li>
                  <li><strong>Nutritionist/dietitian:</strong> Meal planning and education</li>
                  <li><strong>Medication:</strong> For co-occurring conditions (depression, anxiety)</li>
                  <li><strong>Inpatient care:</strong> For severe cases requiring medical stabilization</li>
                  <li><strong>Day programs:</strong> Structured treatment while living at home</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-amber-600 mb-4">Finding Help</h3>
            <p className="text-gray-700 mb-4">Steps to getting support:</p>
            <ol className="space-y-2 text-gray-700 ml-4 list-decimal">
              <li>Speak to your GP about your concerns</li>
              <li>Be honest about your symptoms and struggles</li>
              <li>Ask for a referral to a specialist eating disorder service</li>
              <li>Consider NHS or private treatment options</li>
              <li>Contact eating disorder charities for guidance</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-8 border border-red-100">
        <h2 className="text-3xl font-semibold text-red-700 mb-8 flex items-center">
          <span className="mr-3">🚨</span> Medical Emergency
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Seek Immediate Medical Help If:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Fainting or loss of consciousness</li>
              <li>• Chest pain or irregular heartbeat</li>
              <li>• Severe dehydration</li>
              <li>• Confusion or disorientation</li>
              <li>• Difficulty breathing</li>
              <li>• Seizures</li>
            </ul>
            <p className="text-red-600 mt-4 font-semibold">Call 999 or go to A&E</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Crisis Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Samaritans:</strong> 116 123 (24/7)</li>
              <li><strong>Shout:</strong> Text SHOUT to 85258</li>
              <li><strong>NHS 111:</strong> For urgent medical advice</li>
              <li><strong>Emergency:</strong> 999</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              If you're supporting someone in crisis, don't leave them alone and seek immediate medical help.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8 flex items-center">
          <span className="mr-3">📚</span> UK Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Specialized Support</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Beat Eating Disorders:</strong> beateatingdisorders.org.uk - Helpline 0808 801 0677</li>
              <li><strong>Anorexia Nervosa and Bulimia Care (ANBC):</strong> anbc.org.uk</li>
              <li><strong>Men Get Eating Disorders Too:</strong> mengetedstoo.co.uk</li>
              <li><strong>Mind:</strong> mind.org.uk - Infoline 0300 123 3393</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">NHS Services</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>GP:</strong> First step for referral to specialist services</li>
              <li><strong>Community Eating Disorder Services:</strong> Specialized NHS teams</li>
              <li><strong>Hospital treatment:</strong> For severe medical complications</li>
              <li><strong>IAPT:</strong> May offer some eating disorder support</li>
            </ul>
          </div>
        </div>
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
        <a href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
          Back to Home
        </a>
      </div>
    </div>
  )
}
