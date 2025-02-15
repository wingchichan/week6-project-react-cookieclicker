import "./App.css";
import { useState, useEffect } from "react";
import UpgradesShop from "./components/UpgradesShop";

export default function App() {
  const [cookies, setCookies] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval is working");
      // setCookies(cookies + 1) only renders once so it will only ever display original state+1
      // interval will still run after the inital run of cookies+1 but display doesn't because it only renders once at this point
      // passing a function of prevState to setCookies updates the display because  receives the previous state as an argument and returns the new state value to trigger a re-render
      setCookies((prevState) => prevState + 1);
    }, 1000);
    return () => {
      // prevents multiple setIntervals being set each time it renders
      clearInterval(interval);
    };
  }, []);

  function handleTransaction() {
    console.log("buy me");
    setCookies(cookies - );
  }

  return (
    <>
      <section id="page-container">
        <p>Total Cookies</p>
        <p>{cookies}</p>
        <img
          width={"300px"}
          className="cookie-image"
          src="./src/assets/cookie-svgrepo-com.svg"
          onClick={() => setCookies(cookies + 1)}
        />
        <button onClick={handleTransaction}>Click here</button>
        <UpgradesShop handleTransaction={handleTransaction}/>
      </section>
    </>
  );
}

// button to increment cookie - try refactor code so logic is stored in CookieButton component
// fetch shop data and display
// local storage
