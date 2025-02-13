import { useState, useEffect } from "react";

export default function UpgradesShop() {
  const [shopItems, setShopItems] = useState([]);

  // need to wrap the async fetch function in useEffect to stop it fetching/ hitting the api everytime it renders
  useEffect(() => {
    async function fetchUpgrades() {
      // getting the api data from the url and storing it in response
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // read the response in json and store that in data
      const data = await response.json();
      setShopItems(data);
    }
    fetchUpgrades();
  }, []);

  return (
    <section>
      {shopItems.map(({ id, name, username, email }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      ))}
    </section>
  );
}
