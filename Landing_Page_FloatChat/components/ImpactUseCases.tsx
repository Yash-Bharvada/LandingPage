import React from 'react';

const ImpactUseCases: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-100/90 to-blue-50/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Transforming Ocean Science
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            FloatChat empowers diverse communities to unlock ocean insights and drive meaningful change
          </p>
        </div>

        {/* Main Use Cases */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Scientists & Researchers */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto group hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              For Scientists & Researchers
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Accelerate research with instant access to global ocean data and intelligent analysis tools
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Quick Insights</h4>
                <p className="text-sm text-blue-700">
                  "Show me temperature anomalies in the North Atlantic during the last El Niño event"
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Rapid hypothesis testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Cross-regional comparisons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Publication-ready visualizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Collaborative data exploration</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <strong>Impact:</strong> Reduce data analysis time from weeks to minutes
              </div>
            </div>
          </div>

          {/* Policy Makers */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto group hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              For Policy Makers
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Make informed decisions with clear, accessible ocean data insights and simplified reports
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Simplified Reports</h4>
                <p className="text-sm text-green-700">
                  "Generate a climate impact summary for coastal regions in my jurisdiction"
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Climate change indicators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Environmental monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Risk assessment tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Evidence-based policy support</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <strong>Impact:</strong> Bridge the gap between science and policy
              </div>
            </div>
          </div>

          {/* Students & General Public */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              For Students & Public
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Discover ocean science through interactive exploration and accessible educational content
            </p>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Accessible Knowledge</h4>
                <p className="text-sm text-purple-700">
                  "How do ocean temperatures affect marine life in my local area?"
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Interactive learning experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Curiosity-driven exploration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Educational visualizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-gray-700">Ocean literacy promotion</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <strong>Impact:</strong> Democratize ocean science education
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Real-World Applications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Climate Research</h4>
              <p className="text-sm text-gray-600">Track ocean warming and sea level rise patterns</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Marine Conservation</h4>
              <p className="text-sm text-gray-600">Monitor ecosystem health and biodiversity</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-orange-200 transition-colors">
                <svg className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Weather Prediction</h4>
              <p className="text-sm text-gray-600">Improve hurricane and storm forecasting</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Maritime Operations</h4>
              <p className="text-sm text-gray-600">Optimize shipping routes and safety</p>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Global Impact Potential
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90 mb-2">Ocean Researchers</div>
              <div className="text-sm opacity-75">Worldwide who could benefit from faster data access</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">195</div>
              <div className="text-lg opacity-90 mb-2">Countries</div>
              <div className="text-sm opacity-75">With coastal regions needing ocean data insights</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3.5B</div>
              <div className="text-lg opacity-90 mb-2">People</div>
              <div className="text-sm opacity-75">Living in coastal areas affected by ocean changes</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              FloatChat democratizes ocean science, making critical environmental data accessible to everyone who needs it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactUseCases;