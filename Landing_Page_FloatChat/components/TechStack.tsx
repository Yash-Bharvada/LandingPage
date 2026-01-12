import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white/90 to-gray-100/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Architecture & Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built with cutting-edge technologies for scalable, intelligent ocean data processing
          </p>
        </div>

        {/* Architecture Pipeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Data Processing Pipeline
          </h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-4">
            {/* Step 1: NetCDF Input */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">NetCDF Files</h4>
              <p className="text-sm text-gray-600 max-w-32">Raw Argo float data from global ocean</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block text-gray-400 text-2xl">→</div>
            <div className="lg:hidden text-gray-400 text-2xl rotate-90">→</div>

            {/* Step 2: Database Processing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">PostgreSQL</h4>
              <p className="text-sm text-gray-600 max-w-32">Structured data storage & SQL queries</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block text-gray-400 text-2xl">→</div>
            <div className="lg:hidden text-gray-400 text-2xl rotate-90">→</div>

            {/* Step 3: Vector Database */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">FAISS</h4>
              <p className="text-sm text-gray-600 max-w-32">Vector similarity search & embeddings</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block text-gray-400 text-2xl">→</div>
            <div className="lg:hidden text-gray-400 text-2xl rotate-90">→</div>

            {/* Step 4: AI Processing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">RAG + LLM</h4>
              <p className="text-sm text-gray-600 max-w-32">Intelligent query processing & responses</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block text-gray-400 text-2xl">→</div>
            <div className="lg:hidden text-gray-400 text-2xl rotate-90">→</div>

            {/* Step 5: User Interface */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Chat + Dashboard</h4>
              <p className="text-sm text-gray-600 max-w-32">Interactive UI with visualizations</p>
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend Technologies */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 hover:bg-blue-200 transition-colors duration-300">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Frontend</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">React + TypeScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Streamlit/Dash</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Visualization</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Plotly</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Leaflet Maps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">D3.js</span>
              </div>
            </div>
          </div>

          {/* Backend & Database */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:border-purple-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 hover:bg-purple-200 transition-colors duration-300">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Backend</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Python/FastAPI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700">PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700">FAISS Vector DB</span>
              </div>
            </div>
          </div>

          {/* AI & ML */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 hover:bg-orange-200 transition-colors duration-300">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">AI & ML</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700">OpenAI GPT</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700">LangChain</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Sentence Transformers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Processing Details */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Advanced Data Processing Capabilities
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-all duration-300">
                <svg className="w-8 h-8 text-yellow-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Real-time Processing</h4>
              <p className="text-gray-600 text-sm">
                Process and index new Argo data as it becomes available from global float networks
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Scalable Architecture</h4>
              <p className="text-gray-600 text-sm">
                Microservices design supports horizontal scaling for growing data volumes
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-all duration-300">
                <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Data Quality</h4>
              <p className="text-gray-600 text-sm">
                Automated quality control and validation ensures reliable scientific insights
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Technology Showcase */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Interactive Technology Explorer
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Real-time Processing</h4>
                    <p className="text-blue-100 text-sm">Live data ingestion and analysis</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Lightning Fast</h4>
                    <p className="text-green-100 text-sm">Sub-second query responses</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Enterprise Grade</h4>
                    <p className="text-purple-100 text-sm">99.9% uptime guarantee</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Massive Scale</h4>
                    <p className="text-orange-100 text-sm">Petabyte-scale data handling</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-6 py-3 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-800 text-sm font-medium">System Status: All Services Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;