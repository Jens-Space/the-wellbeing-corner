'use client';

import Link from 'next/link';

export default function TeenStressPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 md:p-8 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-4 md:mb-6">📚 Managing School & Life Stress</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto mb-4 md:mb-6">
          School, friends, family, and your future can feel like a lot. Stress is normal, but too much can overwhelm you.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          Let's learn practical ways to handle stress before it handles you.
        </p>
      </div>

      {/* What is Stress */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-xl shadow-lg p-5 md:p-8 border border-purple-200">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">🤔 What is Stress?</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Stress is your body's response to pressure or challenges. Some stress is normal and can even help you perform better.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            But too much stress, or stress that won't go away, can harm your mental and physical health. For teens, common stress comes from school, relationships, family, social media, and worrying about the future.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            The key is learning to manage stress before it manages you.
          </p>
        </div>
      </div>

      {/* Signs of Stress */}
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-violet-200">
        <h2 className="text-3xl font-semibold text-violet-800 mb-6 text-center">⚡ Signs You're Stressed</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-violet-700 mb-4 flex items-center">
              <span className="mr-2">💭</span>Mental Signs
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Difficulty concentrating</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Racing thoughts or worry</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Forgetfulness</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Anxiety about the future</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-violet-700 mb-4 flex items-center">
              <span className="mr-2">🏥</span>Physical Symptoms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Tension in muscles and headaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Fatigue or difficulty sleeping</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Stomach aches or digestive issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2">•</span>
                <span>Changes in appetite</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stress Management Techniques */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg p-8 border border-pink-200">
        <h2 className="text-3xl font-semibold text-pink-800 mb-6 text-center">🎯 Stress Management Techniques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-pink-700 mb-3 flex items-center">
              <span className="mr-2">🧘</span>Breathing Exercises
            </h3>
            <p className="text-gray-700 mb-3">
              Try the 4-7-8 technique: Breathe in for 4 counts, hold for 7, exhale for 8. This calms your nervous system instantly.
            </p>
            <p className="text-sm text-pink-600">Practice daily, especially before exams</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-pink-700 mb-3 flex items-center">
              <span className="mr-2">⏰</span>Time Management
            </h3>
            <p className="text-gray-700 mb-3">
              Break big projects into smaller tasks. Use a planner or app to organize your time and reduce feeling overwhelmed.
            </p>
            <p className="text-sm text-pink-600">Start assignments early, not the night before</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-pink-700 mb-3 flex items-center">
              <span className="mr-2">🚫</span>Learn to Say No
            </h3>
            <p className="text-gray-700 mb-3">
              You can't do everything. It's okay to decline activities or commitments that would overwhelm you.
            </p>
            <p className="text-sm text-pink-600">Your well-being comes first</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-pink-700 mb-3 flex items-center">
              <span className="mr-2">📱</span>Limit Social Media
            </h3>
            <p className="text-gray-700 mb-3">
              Social media can increase stress and comparison anxiety. Set time limits and take breaks when needed.
            </p>
            <p className="text-sm text-pink-600">Your real life matters more than likes</p>
          </div>
        </div>
      </div>

      {/* Healthy Habits */}
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">💪 Build Healthy Habits</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-3 flex items-center">
              <span className="mr-2">🏃</span>Exercise Regularly
            </h3>
            <p className="text-gray-700">
              Physical activity reduces stress hormones and releases mood-boosting chemicals. Aim for 30 minutes most days - even a walk helps!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-3 flex items-center">
              <span className="mr-2">🍎</span>Eat Well
            </h3>
            <p className="text-gray-700">
              Your diet affects your mood. Eat balanced meals with plenty of fruits, vegetables, and proteins. Stay hydrated!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-yellow-700 mb-3 flex items-center">
              <span className="mr-2">😴</span>Prioritize Sleep
            </h3>
            <p className="text-gray-700">
              Sleep is crucial for stress resilience. Keep a consistent schedule, avoid screens before bed, and aim for 8-9 hours.
            </p>
          </div>
        </div>
      </div>

      {/* When to Get Support */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-8 border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">🆘 When to Get Support</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4">Talk to a trusted adult or counselor if:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>Stress is affecting your sleep or eating</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You're skipping school or activities</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>You're feeling overwhelmed most days</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>Your coping strategies aren't working</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">✓</span>
              <span>Stress is leading to anxiety or depression</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            Many schools have counselors who can help for free. Your parents or teachers can connect you with support.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mr-4"
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
