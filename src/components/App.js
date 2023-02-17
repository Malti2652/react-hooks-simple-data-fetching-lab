// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImg, setDogImg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImg(data.message);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImg} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
