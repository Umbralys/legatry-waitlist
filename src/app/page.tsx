"use client";

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleJoinWaitlist = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (!email) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred. Please try again.');
      }

      setMessage(data.message);
      setEmail(''); // Clear input on success
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-light text-sm">LT</span>
              </div>
              <span className="text-lg font-light tracking-wide text-gray-900">Legatry</span>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="#features" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors hidden md:block">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors hidden md:block">
                How It Works
              </Link>
              <Link href="#security" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors hidden md:block">
                Security
              </Link>
              {/* Updated Link */}
              <a href="#demo" className="text-sm font-light text-gray-900 hover:text-gray-600 transition-colors">
                Request Demo
              </a>
              {/* Updated Link */}
              <a href="#join-waitlist" className="text-sm font-light bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="join-waitlist" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6">
                Your Family's Legacy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Protected Forever
                </span>
              </h1>
              <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
              Legatry is a Legacy Management Platform that's transforming how Black families preserve, organize, and transfer their complete legacy. Join the waitlist to be the first to know when we launch.
              </p>
              {/* Waitlist Form */}
              <form onSubmit={handleJoinWaitlist} className="w-full">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="input-premium flex-grow"
                      disabled={loading}
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-light rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Joining...' : 'Join Waitlist'}
                      {!loading && (
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      )}
                    </button>
                </div>
                {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
              </form>
            </div>

            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-lg font-light text-gray-900 mb-6 text-center">The Value of Preparedness</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900">70%</div>
                  <div className="text-sm font-light text-gray-500 mt-1">Black Families Without Wills</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900">18</div>
                  <div className="text-sm font-light text-gray-500 mt-1">Minutes Per Document Search</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900">60%</div>
                  <div className="text-sm font-light text-gray-500 mt-1">Household's Don't Have an Emergency Plan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900">$68T</div>
                  <div className="text-sm font-light text-gray-500 mt-1">Black Wealth Transfer at Risk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Document Hub Section */}
      <section id="unified-hub" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              One Platform, Everything Connected
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Your Complete Family Picture
              </span>
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">
              Stop hunting through filing cabinets, email attachments, and different websites. 
              Bring all your important documents from every source into one secure place where 
              your family can collaborate and build a lasting legacy together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">From Scattered to Streamlined</h3>
              <p className="text-md font-light text-gray-600 mb-8 leading-relaxed">
                Whether it's your car insurance policy from State Farm, tax documents from H&R Block, 
                your will from the family attorney, property deeds from the courthouse, or business 
                records from your CPA—everything lives safely in one place.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Insurance Policies</h4>
                  <p className="text-xs font-light text-gray-600">Auto, home, life, health—all in one searchable location</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Property Records</h4>
                  <p className="text-xs font-light text-gray-600">Deeds, mortgages, property assessments</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Tax Documents</h4>
                  <p className="text-xs font-light text-gray-600">Returns, W-2s, 1099s, receipts</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Legal Documents</h4>
                  <p className="text-xs font-light text-gray-600">Wills, trusts, power of attorney</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <h4 className="text-lg font-light text-gray-900 mb-6 text-center">Before vs. Legatry</h4>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-200 pl-4">
                    <h5 className="text-sm font-medium text-gray-800 mb-2">Before: Chaos & Lost Opportunities</h5>
                    <ul className="text-xs font-light text-gray-600 space-y-1">
                      <li>• Spending hours searching for documents</li>
                      <li>• Missing tax deductions worth thousands</li>
                      <li>• Family members can't find important papers</li>
                      <li>• Duplicating insurance coverage unnecessarily</li>
                      <li>• Estate planning delayed due to missing info</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h5 className="text-sm font-medium text-gray-800 mb-2">After: Organized & Wealth-Building</h5>
                    <ul className="text-xs font-light text-gray-600 space-y-1">
                      <li>• Find any document in under 30 seconds</li>
                      <li>• Maximize tax benefits with complete records</li>
                      <li>• Family collaborates on financial planning</li>
                      <li>• Optimize insurance to save $1000s annually</li>
                      <li>• Accelerate estate planning with organized docs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition Grid */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-light text-white mb-8 text-center">
                How Organization Builds Generational Wealth
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3">Maximize Every Dollar</h4>
                  <p className="text-sm font-light text-gray-300">
                    Complete financial visibility helps you claim every tax deduction, avoid duplicate 
                    coverage, and identify investment opportunities others miss.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3">Accelerate Decisions</h4>
                  <p className="text-sm font-light text-gray-300">
                    When opportunities arise—buying property, starting a business, refinancing—having 
                    organized documents means you can move fast while others are still searching.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3">Protect the Legacy</h4>
                  <p className="text-sm font-light text-gray-300">
                    Organized estates transfer faster and preserve more wealth. Your heirs won't lose 
                    assets to bureaucracy or pay penalties for missing deadlines.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-8 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-light">18 min</div>
                    <div className="text-sm font-light text-gray-300">Average time to find documents before</div>
                  </div>
                  <div className="text-4xl font-extralight text-gray-400">→</div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-green-400">30 sec</div>
                    <div className="text-sm font-light text-gray-300">Average time to find documents after</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Empowering Your Family's Future: Knowledge and Security */}
      <section id="demo" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Request a Demo
          </h2>
          <p className="text-lg font-light text-gray-700 max-w-3xl mx-auto mb-12">
          Want to see Legatry in action? Request a personalized demo to see how our platform can help you protect your family’s assets and build a lasting legacy.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-md-2">
              <img
                src="https://legatrytest.blob.core.windows.net/familylegacystorage/waitlist-pic.png"
                alt="Secure digital documents and family financial protection"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div className="text-left order-md-1">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Your Family Safe: Protect What Matters</h3>
              <p className="text-md font-light text-gray-600 mb-4">
                Many families have faced losses due to missing or misunderstood legal documents. Our Smart Document Vault provides a secure place for everything from property deeds to important policies, safeguarding your inheritance and business records.
              </p>
              <h3 className="text-2xl font-light text-gray-900 mb-4 mt-6">Breaking Down Barriers: Understand Your Finances</h3>
              <p className="text-md font-light text-gray-600">
                Financial and legal information can be overwhelming. Our Knowledge Translator converts complex jargon into plain language, offering culturally relevant examples and alerts about potentially discriminatory practices, so you can make informed decisions with peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Designed for Modern Families
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              Every feature built with your family's needs in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Smart Organization</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                Categorize documents into Financial, Legal, Insurance, Property, Business, and General categories. Multi-category support for documents that fit multiple purposes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Family Collaboration</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                Invite family members with different access levels. Everyone can contribute while maintaining privacy and control over sensitive documents.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Bank-Level Security</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                Your documents are protected with 256-bit encryption and stored in Microsoft Azure's secure cloud infrastructure. Only your family has access.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Easy Upload</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                Drag and drop support for PDFs, Word documents, and images. Upload multiple files at once and organize them instantly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Quick Access</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                Find what you need instantly with category filtering and document search. Access your documents from any device, anywhere.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Monthly Insights</h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                Track your family's document uploads, storage usage, and activity. Stay informed about your digital legacy's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="family-circle" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
        <h2 className="text-4xl font-light text-gray-900 mb-4">
          The Family Circle
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Access Control That Understands Our Families
          </span>
        </h2>
        <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
          Black families often have complex family structures with play cousins, church family, 
          and extended networks that need different levels of access. We built The Family Circle 
          to honor these relationships while keeping your documents secure.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Extended Family Structures</h3>
              <p className="text-sm font-light text-gray-600">
                Recognizes godparents and chosen family—because family isn't just about blood.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Church Family Access</h3>
              <p className="text-sm font-light text-gray-600">
                Special permissions for church members or pastors who've been part of your journey.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Matriarch/Patriarch Controls</h3>
              <p className="text-sm font-light text-gray-600">
                Respects family hierarchies with family admins having the final say on who sees what.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Community Helper Roles</h3>
              <p className="text-sm font-light text-gray-600">
                Grant temporary access to trusted helpers during tax season or estate planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform -rotate-3"></div>
        <div className="relative bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-xl font-light text-gray-900 mb-6 text-center">Your Family Structure</h3>
          
          <div className="space-y-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm font-medium text-gray-700 mb-1">Matriarch/Patriarch</div>
              <div className="text-xs text-gray-500">Full control & oversight</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-sm font-medium text-gray-700 mb-1">Kids/Grand-kids</div>
                <div className="text-xs text-gray-500">Special access</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-sm font-medium text-gray-700 mb-1">Community Helpers</div>
                <div className="text-xs text-gray-500">Time-limited access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="village-vault" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Village Vault
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Community Wisdom Network
              </span>
            </h2>
            <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">
              Black communities have always shared knowledge for survival. Village Vault digitizes that tradition, 
              creating a trusted network where families share what worked, connect with mentors, and build together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Vetted Advice Exchange</h3>
              <p className="text-sm font-light text-gray-600">
                Community members share proven strategies for property transfers, business succession, and financial planning.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Business Directory</h3>
              <p className="text-sm font-light text-gray-600">
                Find trusted Black-owned services: lawyers, accountants, financial advisors who understand our unique needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Mentorship Matching</h3>
              <p className="text-sm font-light text-gray-600">
                Connect with elders and professionals who've successfully navigated estate planning and wealth building.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Success Story Library</h3>
              <p className="text-sm font-light text-gray-600">
                Real examples from families who've protected their assets and built generational wealth.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-light text-white mb-8 text-center">Built-In Community Safety Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Identity Protection</h4>
                <p className="text-sm font-light text-gray-300">
                  Share wisdom without exposing personal details
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Community Verification</h4>
                <p className="text-sm font-light text-gray-300">
                  Multi-layer verification for trusted members
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Elder Wisdom Verification</h4>
                <p className="text-sm font-light text-gray-300">
                  Experienced members validate shared advice
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">Anti-Scam Education</h4>
                <p className="text-sm font-light text-gray-300">
                  Learn to spot and avoid predatory schemes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Living History Section */}
      <section id="living-history" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-black">
                        <img src="https://legatrytest.blob.core.windows.net/familylegacystorage/Screenshot 2025-08-06 at 11.03.09 PM.png" alt="An elder sharing a story with a younger family member" className="w-full h-full object-cover opacity-60"/>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <h3 className="text-white text-4xl font-light text-center leading-snug"> </h3>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-light text-gray-900 mb-4">
                        Capture Your Living History 
                    </h2>
                    <p className="text-lg font-light text-gray-600 mb-6 leading-relaxed">
                        Our histories are incredible stories of resilience and wisdom that are rarely documented.  We make it easy to record, preserve, and pass down the oral histories that define your family.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            <div>
                                <h4 className="font-medium text-gray-800">Oral History, Simplified</h4>
                                <p className="text-sm font-light text-gray-600">Designed for our elders who prefer talking to typing, so no story is lost. </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                             <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            <div>
                                <h4 className="font-medium text-gray-800">Culturally-Specific Prompts</h4>
                                <p className="text-sm font-light text-gray-600">Inspire deep conversations with questions tailored to the Black experience. </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                             <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            <div>
                                <h4 className="font-medium text-gray-800">Preserve Survival Wisdom</h4>
                                <p className="text-sm font-light text-gray-600">Document the invaluable lessons of how your family survived and thrived despite barriers. </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Cultural Celebration Tools Section */}
      <section id="cultural-celebrations" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-light text-gray-900 mb-4">
                Cultural Celebration Tools
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Where Heritage Meets Wealth Building
                </span>
              </h2>
              <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
                Important cultural events are opportunities for wealth building and knowledge transfer. 
                Transform your celebrations into legacy-building moments that strengthen family bonds 
                while securing your financial future.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Family Reunion Planning</h3>
                    <p className="text-sm font-light text-gray-600">
                      Turn reunions into high-level summits with financial pooling tools and structured knowledge sharing sessions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Kwanzaa Principle Integration</h3>
                    <p className="text-sm font-light text-gray-600">
                      Build wealth through Nguzo Saba with guided activities for Ujamaa (cooperative economics) and Kuumba (creativity).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Juneteenth Legacy Projects</h3>
                    <p className="text-sm font-light text-gray-600">
                      Create freedom-focused financial planning initiatives that honor our ancestors while building future prosperity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Black History Month Challenges</h3>
                    <p className="text-sm font-light text-gray-600">
                      Engage your family in legacy-building activities that celebrate our history while creating new financial milestones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-xl font-light text-gray-900 mb-6 text-center">Transform Celebrations Into Legacy</h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl">
                    <h4 className="font-medium text-gray-800 mb-2">Family Reunion Summit</h4>
                    <p className="text-sm font-light text-gray-600">Investment circles • Business networking • Youth financial literacy</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                    <h4 className="font-medium text-gray-800 mb-2">Kwanzaa Wealth Week</h4>
                    <p className="text-sm font-light text-gray-600">Ujamaa marketplace • Kujichagulia planning • Imani trust funds</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl">
                    <h4 className="font-medium text-gray-800 mb-2">Juneteenth Freedom Fund</h4>
                    <p className="text-sm font-light text-gray-600">Liberation savings • Property acquisition • Business launches</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl">
                    <h4 className="font-medium text-gray-800 mb-2">Heritage Month Challenges</h4>
                    <p className="text-sm font-light text-gray-600">Daily wealth tips • Family competitions • Legacy milestones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Start in Minutes
            </h2>
            <p className="text-lg font-light text-gray-600">
              Building your family's legacy vault is simple
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gray-700">1</span>
              </div>
              <h4 className="text-lg font-light text-gray-900 mb-2">Create Your Family Account</h4>
              <p className="text-sm font-light text-gray-600">Sign up and establish your secure family space.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gray-700">2</span>
              </div>
              <h4 className="text-lg font-light text-gray-900 mb-2">Record Your History</h4>
              <p className="text-sm font-light text-gray-600">Use your voice to capture stories from every generation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gray-700">3</span>
              </div>
              <h4 className="text-lg font-light text-gray-900 mb-2">Secure Your Documents</h4>
              <p className="text-sm font-light text-gray-600">Upload deeds, policies, and photos into the vault.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gray-700">4</span>
              </div>
              <h4 className="text-lg font-light text-gray-900 mb-2">Share With Your Circle</h4>
              <p className="text-sm font-light text-gray-600">Give access to family and trusted community members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Security You Can Trust
              </h2>
              <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed">
                We understand the importance of keeping your family's documents safe. 
                That's why we've implemented enterprise-grade security measures to protect 
                your digital legacy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">256-bit Encryption</h4>
                    <p className="text-sm font-light text-gray-600">All documents encrypted at rest and in transit</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Microsoft Azure Storage</h4>
                    <p className="text-sm font-light text-gray-600">Enterprise cloud infrastructure with 99.9% uptime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Role-Based Access</h4>
                    <p className="text-sm font-light text-gray-600">Control who sees what within your family</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">Secure Authentication</h4>
                    <p className="text-sm font-light text-gray-600">Protected login with session management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">How Your Data is Protected</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-light text-gray-600">Top-Tier Security</span>
                  <span className="text-sm font-medium text-gray-900">AES-256 Encryption</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-light text-gray-600">Where Your Data Lives</span>
                  <span className="text-sm font-medium text-gray-900">Microsoft Azure Servers</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-light text-gray-600">How You Log In Safely</span>
                  <span className="text-sm font-medium text-gray-900">Secure MFA Authentication</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-light text-gray-600">Our Data Storage Partner</span>
                  <span className="text-sm font-medium text-gray-900">MongoDB Atlas</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-light text-gray-600">Who Can See Your Information</span>
                  <span className="text-sm font-medium text-gray-900">Invited Members Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-white mb-6">
          Amplify the Brilliance and Resilience in Your Family
          </h2>
          <p className="text-lg font-light text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the community of families taking control of their narrative, securing their assets, and building a legacy that will last for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join-waitlist" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-light rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Join The Waitlist
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#demo" className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-light rounded-lg hover:bg-gray-800 transition-colors">
              Request a Demo
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L14.25 12L9.75 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-light text-sm">FL</span>
                </div>
                <span className="text-lg font-light tracking-wide text-gray-900">Legatry</span>
              </div>
              <p className="text-sm font-light text-gray-600">
                Protecting your family's legacy for generations to come.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-sm font-light text-gray-600 hover:text-gray-900">Contact</Link></li>
                <li><Link href="/help" className="text-sm font-light text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link href="/faq" className="text-sm font-light text-gray-600 hover:text-gray-900">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm font-light text-gray-600 hover:text-gray-900">About Us</Link></li>
                <li><Link href="/blog" className="text-sm font-light text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="/careers" className="text-sm font-light text-gray-600 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm font-light text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm font-light text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-center text-sm font-light text-gray-500">
              © {new Date().getFullYear()} Legatry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
