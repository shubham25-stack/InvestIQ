import Login from "./components/auth/Login.jsx"
import Signup from "./components/auth/Signup.jsx"
import PieChart from "./components/charts/PieChart.jsx"
import AllocationForm from "./components/portofolio/AllocationForm.jsx"
import ResultsDisplay from "./components/portofolio/ResultsDisplay.jsx"
import StrategySelector from "./components/portofolio/StrategySelector.jsx"
import { PortofolioProvider } from "./contexts/PortofolioContext.jsx"



function App() {
  return(
    <>      
      <PortofolioProvider>
        <div className="bg-gray-50 min-h-screen">
          <header className="p-4 bg-white shadow-sm flex justify-between items-center">
            <h1 className="text-4xl font-bold text-indigo-600">InvestIQ</h1>
            <div className="flex items-center space-x-4 mr-6">
              <a href="#profile" className="text-gray-600 hover:text-indigo-600">Profile</a>
              <a href="#logout" className="text-gray-600 hover:text-indigo-600">Logout</a>
            </div>
          </header>

          <main className="p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
              
                <StrategySelector />
                <AllocationForm />

              {/* right side */}
              <div className="p-8 bg-white rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Allocation Chart</h2>
                  <PieChart />
                </div>
                <ResultsDisplay />
            </div>
          </main>
        </div>
      </PortofolioProvider>
    </>
  )
}

export default App