import { Suspense, useEffect, useState } from "react";
import "./App.css";
import CustomerTickets from "./components/CustomerTickets";
import TasksSection from "./components/TasSection";
import ResolvedSection from "./components/ResolvedSection";
import InProgress from "./components/InProgress";
import Resolved from "./components/Resolved";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Container from "./components/Container";



import { toast,ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [tick, setTick] = useState([]);
  const [taskSection, setTaskSection] = useState([]);
  const [resolvedData, setResolvedData] = useState([]);

  useEffect(() => {
    async function fetchTickets() {
      const res = await fetch("/Details.json");
      const data = await res.json();
      console.log("fetch data",data);
      
      setTick(data);
    }
    fetchTickets();
  }, []);



  const handleCardClick = (card) => {
    setInProgress(inProgress + 1);
    setTaskSection([...taskSection, card]);
    toast("In-Progress..!");
  };

  const handleResolveTask = (card) => {
    if (inProgress > 0) {
      setResolved(resolved + 1);
      setInProgress(inProgress - 1);
      const newCardDetail = taskSection.filter((ss) => ss.id !== card.id);
      setTaskSection(newCardDetail);
      setResolvedData([...resolvedData, card]);

      const newCardDetail2 = tick.filter((ss) => ss.id !== card.id);
      setTick(newCardDetail2);
      toast("Completed");
    } else {
      return;
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <main className="px-4 max-w-7xl mx-auto ">
        <div className=" grid grid-cols-2 gap-8 mt-11">
          <InProgress inProgress={inProgress} />
          <Resolved resolved={resolved} />
        </div>



        <div className="flex md:grid flex-col-reverse  md:grid-cols-12 justify-between w-full mt-11 gap-2 ">
          <div className="md:col-span-9">
          <Suspense fallback={<p>Loading To Customer Tickets... </p>}>
  <CustomerTickets
              ticketss={tick}
              handleCardClick={handleCardClick}
            />
</Suspense>
          </div>
          <div className="md:col-span-3">
            <TasksSection
              taskSection={taskSection}
              handleResolveTask={handleResolveTask}
            />
            <ResolvedSection resolvedData={resolvedData} />
          </div>
        </div>

        
      </main>
      
      <Footer />
      <ToastContainer
        position="top-right"
        style={{ width: "40%", marginLeft: "59%" }}
      />
    </>
  );
}

export default App;



















// SM