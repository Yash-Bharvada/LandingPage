import React from 'react';

const SolutionOverview: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/90 to-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet FloatChat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI-powered ocean data discovery that transforms complex NetCDF files into conversational insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* FloatChat Logo/Visual */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6">FloatChat</h3>
            <p className="text-gray-600">AI-Powered Ocean Data Discovery</p>
          </div>

          {/* Solution Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              What FloatChat Does
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              FloatChat revolutionizes ocean data access by combining AI intelligence with intuitive interfaces, 
              making complex oceanographic data accessible to everyone.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">The Magic Behind FloatChat</h4>
              <p className="text-gray-700">
                We transform raw Argo float data into a conversational experience where you can ask questions 
                in plain English and get instant, visual answers about ocean conditions worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group hover:bg-blue-200 transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              NetCDF to Database
            </h4>
            <p className="text-gray-600 text-center">
              Converts complex NetCDF files into structured, queryable databases for lightning-fast access
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group hover:bg-green-200 transition-colors">
              <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              AI Chatbot Interface
            </h4>
            <p className="text-gray-600 text-center">
              Ask questions in natural language and get intelligent responses about ocean data patterns
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto group hover:bg-purple-200 transition-colors">
              <svg className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Interactive Dashboards
            </h4>
            <p className="text-gray-600 text-center">
              Beautiful geospatial visualizations with maps, depth plots, and timeline comparisons
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto group hover:bg-orange-200 transition-colors">
              <svg className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Visual Comparisons
            </h4>
            <p className="text-gray-600 text-center">
              Side-by-side analysis of temperature, salinity, and pressure data across regions and time
            </p>
          </div>
        </div>

        {/* Key Value Proposition */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              From Complex Data to Simple Conversations
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              FloatChat bridges the gap between raw oceanographic data and actionable insights, 
              making ocean science accessible to researchers, policymakers, and curious minds alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;