import axios from "axios";
import React, { useEffect, useState } from "react";
import Creation from "./components/Creation/Creation";
import Filter from "./components/Filter/Filter";

const App = () => {
  const [showCreation, setShowCreation] = useState(false);
  const [colors, setColors] = useState([]);

  const [creatives, setCreatives] = useState([]);

  const [filteredCreatives, setFilteredCreatives] = useState(creatives);

  const MAX_CREATIVES = 5;

  useEffect(() => {
    getColors();
  }, []);

  useEffect(() => {
    setFilteredCreatives(creatives);
  }, [creatives]);

  const toggleCreation = () => {
    setShowCreation(!showCreation);
  };

  const getColors = async () => {
    const {
      data: { colors },
    } = await axios.get(
      "https://random-flat-colors.vercel.app/api/random?count=5"
    );
    setColors(colors);
  };

  return (
    <main>
      <div className="topbar">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="content">
        {colors.length > 0 ? (
          <>
            <Filter
              toggleCreation={toggleCreation}
              showCreation={showCreation}
              filteredCreatives={filteredCreatives}
              setFilteredCreatives={setFilteredCreatives}
              colors={colors}
              creatives={creatives}
              totalCreatives={MAX_CREATIVES}
            />
            {showCreation && (
              <Creation
                colors={colors}
                setCreatives={setCreatives}
                creatives={creatives}
                toggleCreation={toggleCreation}
              />
            )}
          </>
        ) : (
          <h1 style={{ margin: "25vh auto" }}> Loading...</h1>
        )}
      </div>
    </main>
  );
};

export default App;
