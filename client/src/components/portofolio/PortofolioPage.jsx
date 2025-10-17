//starts ffrom here tomorow the work is simple switch everything in this and then take to the next..

import { useContext } from "react";
import { PortofolioProvider } from "../../contexts/PortofolioContext";
import PieChart from "../charts/PieChart";
import AllocationForm from "./AllocationForm";
import ResultsDisplay from "./ResultsDisplay";
import StrategySelector from "./StrategySelector";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function PortofolioPage (){
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate;

    const handleLogout = ()=>{
        logout();
        navigate('/login');
    };
    return (
        <>
        <PortofolioProvider>
        <div className="bg-gray-50 min-h-screen">
          <header className="p-4 bg-white shadow-sm flex justify-between items-center">
            <h1 className="text-4xl font-bold text-indigo-600">InvestIQ</h1>
            <div className="flex items-center space-x-4 mr-6">
              <a href="#profile" className="text-gray-600 hover:text-indigo-600">Profile</a>
              <a href="#logout" className="text-gray-600 hover:text-indigo-600" onClick={handleLogout}>Logout</a>
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

export default PortofolioPage;