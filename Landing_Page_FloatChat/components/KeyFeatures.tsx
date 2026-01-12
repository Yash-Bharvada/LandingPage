import React from 'react';

const KeyFeatures: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white/90 to-blue-50/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI technology meets intuitive design to revolutionize ocean data exploration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feature 1: Conversational Querying */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Conversational Querying</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ask questions in natural language and get intelligent responses. No need to learn complex query languages or data formats.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">Q</span>
                  </div>
                  <p className="text-sm text-gray-700 italic">"What's the temperature at 500m depth near Hawaii?"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">A</span>
                  </div>
                  <p className="text-sm text-gray-700">Instant visualization with temperature data and location markers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Smart Data Retrieval */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Smart Data Retrieval</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Advanced AI combines SQL databases, vector search, and retrieval-augmented generation for lightning-fast, accurate results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <span className="text-sm text-gray-700">PostgreSQL for structured queries</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span className="text-sm text-gray-700">FAISS vector database for similarity search</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span className="text-sm text-gray-700">RAG-powered LLM for intelligent responses</span>
              </div>
            </div>
          </div>

          {/* Feature 3: Visual Insights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Visual Insights</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform complex data into beautiful, interactive visualizations including maps, depth profiles, and temporal analysis.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-center group hover:bg-blue-100 transition-colors">
                <div className="w-8 h-8 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-blue-800">Interactive Maps</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center group hover:bg-green-100 transition-colors">
                <div className="w-8 h-8 mx-auto mb-2 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-green-800">Depth Plots</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-center group hover:bg-purple-100 transition-colors">
                <div className="w-8 h-8 mx-auto mb-2 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-purple-800">Time Series</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg text-center group hover:bg-orange-100 transition-colors">
                <div className="w-8 h-8 mx-auto mb-2 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-orange-800">Comparisons</div>
              </div>
            </div>
          </div>

          {/* Feature 4: Extensible Platform */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Extensible Platform</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Built for the future with modular architecture supporting multiple ocean data sources and expanding capabilities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Argo Floats</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Satellite Data</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Coming Soon</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Glider Networks</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Planned</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Buoy Systems</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Roadmap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Powered by Cutting-Edge AI
              </h3>
            </div>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              FloatChat combines the latest in natural language processing, vector databases, and geospatial visualization 
              to create an unprecedented ocean data exploration experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;