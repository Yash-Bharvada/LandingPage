import React from 'react';

const AboutTeam: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/90 to-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About FloatChat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between complex ocean data and accessible insights through innovative AI technology
          </p>
        </div>

        {/* Project Mission */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-blue-100">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              FloatChat was born from the vision to make ocean science accessible to everyone. We believe that understanding 
              our oceans is crucial for addressing climate change, protecting marine ecosystems, and ensuring a sustainable future 
              for our planet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Scientific Excellence</h4>
              <p className="text-sm text-gray-600">Maintaining the highest standards of data accuracy and scientific rigor</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-green-200 transition-colors">
                <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Global Accessibility</h4>
              <p className="text-sm text-gray-600">Making ocean data available to researchers, policymakers, and citizens worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-purple-200 transition-colors">
                <svg className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Leveraging cutting-edge AI to transform how we interact with ocean data</p>
            </div>
          </div>
        </div>

        {/* Development Team */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Development Team
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">AI</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">AI/ML Engineer</h4>
              <p className="text-sm text-gray-600">Natural language processing and machine learning systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">OS</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Ocean Scientist</h4>
              <p className="text-sm text-gray-600">Oceanographic expertise and data validation</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">FE</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Frontend Developer</h4>
              <p className="text-sm text-gray-600">User interface and visualization design</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">BE</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Backend Developer</h4>
              <p className="text-sm text-gray-600">Database architecture and API development</p>
            </div>
          </div>
        </div>

        {/* Acknowledgments & Credits */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Acknowledgments & Data Sources
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Government Partners
              </h4>
              <div className="space-y-3">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Ministry of Earth Sciences (MoES)</h5>
                  <p className="text-sm opacity-90">
                    Supporting ocean research and data accessibility initiatives in India
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Indian National Centre for Ocean Information Services (INCOIS)</h5>
                  <p className="text-sm opacity-90">
                    Providing oceanographic data and research infrastructure support
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Data Sources
              </h4>
              <div className="space-y-3">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Argo Global Data Assembly Centre</h5>
                  <p className="text-sm opacity-90">
                    Global network of autonomous profiling floats measuring ocean temperature and salinity
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">International Argo Program</h5>
                  <p className="text-sm opacity-90">
                    Collaborative effort of over 30 countries to monitor global ocean conditions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Attribution */}
          <div className="border-t border-white/20 pt-6">
            <h4 className="text-lg font-semibold mb-4 text-center">Data Attribution</h4>
            <div className="text-center space-y-2 text-sm opacity-90">
              <p>
                "These data were collected and made freely available by the International Argo Program and the national programs that contribute to it."
              </p>
              <p>
                <a href="https://argo.ucsd.edu" className="underline hover:no-underline">https://argo.ucsd.edu</a> | 
                <a href="https://www.ocean-ops.org" className="underline hover:no-underline ml-2">https://www.ocean-ops.org</a>
              </p>
              <p className="mt-4">
                "The Argo Program is part of the Global Ocean Observing System."
              </p>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
            <div className="text-sm text-gray-600">Project Started</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">Open</div>
            <div className="text-sm text-gray-600">Source Initiative</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">Global</div>
            <div className="text-sm text-gray-600">Data Coverage</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Data Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;