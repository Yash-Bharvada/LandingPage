import React from 'react';

const DemoPreview: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/90 to-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            See FloatChat in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of conversational ocean data discovery with our interactive demo
          </p>
        </div>

        {/* Main Demo Interface */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Chatbot Interface */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">FloatChat Assistant</h3>
                <div className="ml-auto flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm opacity-90">Online</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 h-96 overflow-y-auto bg-gray-50">
              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm text-gray-800">Hello! I'm your ocean data assistant. Ask me anything about Argo float data!</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Show me salinity levels near the equator in March 2023</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-sm">
                    <p className="text-sm text-gray-800 mb-2">Great question! I found 847 Argo measurements near the equator (±5°) in March 2023.</p>
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      <div className="flex justify-between mb-1">
                        <span>Avg Salinity:</span>
                        <span className="font-semibold">34.7 PSU</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Depth Range:</span>
                        <span className="font-semibold">0-2000m</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Floats:</span>
                        <span className="font-semibold">156 active</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Can you show this on a map?</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm text-gray-800">Absolutely! Check the visualization panel →</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <input 
                  type="text" 
                  placeholder="Ask about ocean data..." 
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
                <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
                  <span className="text-sm">Send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Visualization Dashboard */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Interactive Dashboard</h3>
                <div className="ml-auto flex space-x-2">
                  <span className="text-sm opacity-90">Live Data</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 h-96 bg-gray-50">
              {/* Map Visualization */}
              <div className="bg-blue-100 rounded-lg h-48 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-blue-800">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold">Equatorial Pacific Ocean</div>
                    <div className="text-xs opacity-75">Salinity Distribution - March 2023</div>
                  </div>
                </div>
                
                {/* Simulated data points */}
                <div className="absolute top-16 left-20 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-24 left-32 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div className="absolute top-20 left-44 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-28 left-56 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Data Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Temperature Range</div>
                  <div className="text-lg font-bold text-blue-600">18.5°C - 28.2°C</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Salinity Range</div>
                  <div className="text-lg font-bold text-green-600">33.8 - 35.4 PSU</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Active Floats</div>
                  <div className="text-lg font-bold text-purple-600">156</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Data Points</div>
                  <div className="text-lg font-bold text-orange-600">847</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Queries */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Try These Example Queries
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 group hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Temperature Analysis</h4>
              <p className="text-sm text-gray-600 italic">
                "What's the average temperature at 1000m depth in the Atlantic Ocean?"
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 group hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Salinity Patterns</h4>
              <p className="text-sm text-gray-600 italic">
                "Show me salinity changes in the Mediterranean over the last year"
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 group hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Comparative Studies</h4>
              <p className="text-sm text-gray-600 italic">
                "Compare ocean conditions between El Niño and La Niña years"
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Explore Ocean Data?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Experience the future of ocean data discovery with FloatChat's intelligent interface
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Try Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;