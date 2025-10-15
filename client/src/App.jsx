import Login from "./components/auth/Login.jsx"
import Signup from "./components/auth/Signup.jsx"
import AllocationForm from "./components/portofolio/AllocationForm.jsx"
import StrategySelector from "./components/portofolio/StrategySelector.jsx"
import { PortofolioProvider } from "./contexts/PortofolioContext.jsx"


function App() {
  return(
    <>
      {/* <Login />
      {/* <Signup /> */}
      {/* <AllocationForm /> */}
      {/* <PortofolioProvider>
        <main className="bg-gray-100 min-h-screen p-4 md:p-8">
          <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Portofolio Allocator</h1>
        <StrategySelector />
        <AllocationForm />
          </div>
        </main>
      </PortofolioProvider>  work starts from here tommorow*/} 
    </>
  )
}

export default App
