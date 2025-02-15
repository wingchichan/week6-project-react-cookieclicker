import "./App.css";
import { useState, useEffect } from "react";
import UpgradesShop from "./components/UpgradesShop";

export default function App() {
  const [totalCookies, setTotalCookies] = useState(1000);
  const [cps, setCPS] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval is working");
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

  // useEffect(() => {}, [cps]);

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
      <section id="page-container">
        <p>Total Cookies</p>
        <p>{totalCookies}</p>
        <p>Cookies per Second</p>
        <p>{cps}</p>
        <img
          width={"300px"}
          className="cookie-image"
          src="./src/assets/cookie-svgrepo-com.svg"
          onClick={() => setTotalCookies(totalCookies + 1)}
        />
        <UpgradesShop handleTransaction={handleTransaction} />
      </section>
    </>
  );
}

// button to increment cookie - try refactor code so logic is stored in CookieButton component
// fetch shop data and display
// local storage
