import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultsChart from "./Components/ResultsChart/ResultsChart";
import axios from "axios";
import PassengerChart from "./Components/PassengerChart/PassengerChart";


const pricingPromise = fetch('pricingData.json').then(res=>res.json());
const passengerPromise = axios.get('passengerData.json');



function App() {
  return (
    <>
      

      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
              <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                  <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
              </Suspense>
       <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PassengerChart passengerPromise={passengerPromise}></PassengerChart>
       </Suspense>
      <ResultsChart></ResultsChart>        
      </main>
    </>
  );
}

export default App;
