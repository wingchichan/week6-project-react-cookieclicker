import { useState, useEffect } from "react";
import "./UpgradesShop.css";

export default function UpgradesShop({ handleTransaction }) {
  const [shopItems, setShopItems] = useState([]);

  // need to wrap the async fetch function in useEffect to stop it fetching/ hitting the api everytime it renders
  useEffect(() => {
    async function fetchUpgrades() {
      // getting the api data from the url and storing it in response
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      // read the response in json and store that in data
      const data = await response.json();
      setShopItems(data);
    }
    fetchUpgrades();
  }, []);

  return (
    <section className="shop-area">
      {shopItems.map(({ id, name, cost, increase }) => (
        // using data-attributes to pass back the cost to deduct from total cookies
        <button
          key={id}
          onClick={handleTransaction}
          data-cost={cost}
          data-increase={increase}
        >
          <h4>{name}</h4>
          <p>Price: {cost}</p>
          <p>Additional cookies: {increase}</p>
        </button>
      ))}
    </section>
  );
}
