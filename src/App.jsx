import { useState, useEffect } from "react";
// import CookieButton from "./components/CookieButton";
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

  return (
    <>
      <p>Total Cookies</p>
      <br />
      <p>{cookies}</p>
      <img
        src="./src/assets/cookie-svgrepo-com.svg"
        onClick={() => setCookies(cookies + 1)}
      />
      <UpgradesShop />
    </>
  );
}

// button to increment cookie - try refactor code so logic is stored in CookieButton component
// fetch shop data and display
// local storage
