import React, { useEffect, useState } from "react";
import "../styles/From.css";

import Image from "./Image";
import Image2 from "./Image2";
function From() {
  const [value, setValue] = useState("");
  const [results, setresult] = useState(null);
  const [random, setRandom] = useState(false);

  function fet(e) {
    e.preventDefault();
    if (!value) return;
    async function fetchdata() {
      setRandom(false);
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
      );
      const data = await resp.json();
      const requireddata = data.meals;
      setRandom(requireddata);
      setValue("");
    }
    fetchdata();
  }

  function fet2(e) {
    e.preventDefault();
    async function fetchdata() {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const data = await resp.json();
      const requireddata = data.meals;
      setRandom(requireddata);
    }
    fetchdata();
  }

  useEffect(() => {
    if (value) {
      setValue("");
      fet();
    } else if (random) {
      fet2();
    }
    setRandom("");
  }, []);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Your Recipies...."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <ion-icon name="search" id="search-btn1">
          <button onClick={fet}>Search</button>
          <button onClick={fet2}> shffle </button>
        </ion-icon>
      </form>
      <div className="search-result">
        {results &&
          results.map((ele, index) => <Image key={index} ele={ele} />)}
      </div>
      <div className="search-result">
        {random && random.map((ele, index) => <Image2 key={index} ele={ele} />)}
      </div>
    </>
  );
}
export default From;
