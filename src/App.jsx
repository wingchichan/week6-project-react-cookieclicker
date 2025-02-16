import "./App.css";
import { useState, useEffect } from "react";
import UpgradesShop from "./components/UpgradesShop";

export default function App() {
  let [totalCookies, setTotalCookies] = useState(() => {
    // returns starting value
    const existingTotalCookies = localStorage.getItem("totalCookies");
    if (existingTotalCookies !== null) {
      return +existingTotalCookies;
    } else {
      return 0;
    }
  });
  const [cps, setCPS] = useState(() => {
    const existingCPS = localStorage.getItem("cps");
    if (existingCPS !== null) {
      return existingCPS;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("setInterval is working");
      // setCookies(cookies + 1) only renders once so it will only ever display original state+1
      // interval will still run after the inital run of cookies+1 but display doesn't because it only renders once at this point
      // passing a function of prevState to setCookies updates the display because  receives the previous state as an argument and returns the new state value to trigger a re-render
      setTotalCookies((prevState) => prevState + 1);
    }, 1000);
    return () => {
      // prevents multiple setIntervals being set each time it renders
      clearInterval(interval);
    };
  }, []);

  // monitor when total cookies updates then save it to local storage
  useEffect(() => {
    localStorage.setItem("totalCookies", totalCookies);
  }, [totalCookies]);

  useEffect(() => {
    localStorage.setItem("cps", cps);
  }, [cps]);

  function handleTransaction(event) {
    const productCost = event.currentTarget.dataset.cost;
    const cpsIncrease = event.currentTarget.dataset.increase;

    console.log(event.target.dataset);
    if (totalCookies < productCost) {
      alert("You don't have enough cookies - keep clicking!!!");
    } else {
      setTotalCookies(totalCookies - productCost);
      console.log(`cps - ${cps}`);
      console.log(`cpsIncrease - ${cpsIncrease}`);

      const newCPS = parseInt(cps) + parseInt(cpsIncrease);
      setCPS(newCPS);
    }
  }

  return (
    <>
      <main id="page-container">
        <section id="scoreboard">
          <div>
            <h3>Total Cookies</h3>
            <p id="total-number">{totalCookies}</p>
            <p id="cps-number">
              Cookies per second: <span>{cps}</span>
            </p>
          </div>
          <img
            width={"300px"}
            className="cookie-image"
            src="./src/assets/cookie-svgrepo-com.svg"
            onClick={() => setTotalCookies(totalCookies + 1)}
          />
        </section>

        <UpgradesShop handleTransaction={handleTransaction} />
      </main>
    </>
  );
}

// button to increment cookie - try refactor code so logic is stored in CookieButton component
// fetch shop data and display
// local storage
