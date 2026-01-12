import React from 'react';

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white/90 to-blue-50/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            The Ocean Data Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ocean data is vast and critical for understanding our planet, but accessing and analyzing it remains incredibly complex.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Current Reality</h3>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Complex NetCDF files requiring specialized knowledge</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Scattered data across multiple repositories</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Time-consuming manual data processing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span>Barrier for non-technical researchers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Raw Data Example:</h4>
              <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <div>temperature_data.nc</div>
                <div className="text-gray-500">├── dimensions: lat(180), lon(360), depth(50)</div>
                <div className="text-gray-500">├── variables: temp, salinity, pressure</div>
                <div className="text-gray-500">└── metadata: 847 attributes...</div>
              </div>
            </div>
          </div>

          {/* Solution Preview */}
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">What If You Could...</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ask questions in plain English</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Get instant visual insights</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Access all ocean data in one place</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 group">
                    <svg className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>No coding or technical expertise required</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Simple Query Example:</h4>
              <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 italic">
                      "Show me salinity levels near the equator in March 2023"
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-blue-600">
                  → Instant map visualization with data points
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-blue-100 px-8 py-4 rounded-full">
            <div className="group">
              <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-blue-800">
              Argo data is vast, but shouldn't be hard to access
            </span>
            <div className="group">
              <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;