function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">TechLearn • QOTD</h1>
        <button className="text-sm text-blue-600 font-semibold hover:underline">
          Subscribe 🔔
        </button>
      </header>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Problem Area */}
        <section className="lg:col-span-2 space-y-6">
          
          {/* Question Header */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Two Sum</h2>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-semibold">
                Easy
              </span>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            </p>
          </div>

          {/* Code Area */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold mb-3">Your Solution</h3>
            <textarea
              placeholder="Write your code here..."
              className="w-full h-40 p-4 rounded-lg border border-slate-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="mt-4 flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Run Code
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                Submit
              </button>
            </div>
          </div>

          {/* Output */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold mb-2">Output</h3>
            <div className="bg-slate-100 rounded-lg p-4 text-sm text-slate-700">
              Output will appear here...
            </div>
          </div>
        </section>

        {/* Right: Engagement Section */}
        <aside className="space-y-6">
          
          {/* Stats */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold mb-4">Statistics</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>👨‍🎓 Attempts: 12,430</li>
              <li>✅ Success Rate: 62%</li>
              <li>🔥 Avg Time: 18 mins</li>
            </ul>
          </div>

          {/* Hint */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-semibold text-blue-700 mb-2">Hint</h3>
            <p className="text-sm text-blue-700">
              Try using a hash map to track visited numbers.
            </p>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold mb-3">Leaderboard</h3>
            <ol className="text-sm space-y-2 text-slate-600">
              <li>🥇 Aditi — 98 pts</li>
              <li>🥈 Rahul — 95 pts</li>
              <li>🥉 Neha — 92 pts</li>
            </ol>
          </div>

        </aside>
      </main>
    </div>
  );
}

export default App;

