import React, { useEffect, useMemo, useState } from "react";
import ColorSelector from "../ColorSelector/ColorSelector";
import Creative from "../Creative/Creative";
import "./Filter.css";

const Filter = ({
  toggleCreation,
  showCreation,
  colors,
  filteredCreatives,
  setFilteredCreatives,
  totalCreatives,
  creatives,
}) => {
  const [filterColor, setFilterColor] = useState("");
  const [filterText, setFilterText] = useState("");

  const width = useMemo(() => {
    return (filteredCreatives.length / totalCreatives) * 100;
  }, [filteredCreatives]);

  useEffect(() => {
    filterPosts();
  }, [filterColor, filterText]);

  const filterPosts = () => {
    let updatedList = creatives;
    if (filterColor.length > 0) {
      updatedList = updatedList.filter(
        (creative) => creative.color === filterColor
      );
    }
    if (filterText.trim().length > 0) {
      updatedList = updatedList.filter((creative) => {
        return (
          creative.title.includes(filterText.toLowerCase().trim()) ||
          creative.title.includes(filterText.toLowerCase().trim())
        );
      });
    }
    setFilteredCreatives(updatedList);
  };

  const handleAddClick = () => {
    setFilterText("");
    setFilterColor("");
    toggleCreation();
  };

  return (
    <section className="filter">
      {/* First Container Starts */}
      <h3>Filter By:</h3>
      {/* First Container Ends */}
      {/* Second Container Starts */}
      <div className="filter__input">
        <div>
          <label className="subtitle">color</label>
          <ColorSelector
            disabled={showCreation || creatives.length === 0}
            colors={colors}
            type="filter"
            selectedColor={filterColor}
            selectColor={setFilterColor}
          />
        </div>
        <div
          style={{
            width: "60%",
          }}
        >
          <label htmlFor="filterText" className="subtitle">
            title / subtitle :
          </label>
          <input
            type="text"
            id="filterText"
            name="filterText"
            placeholder="search across title and subtitle"
            style={{ padding: "4px" }}
            value={filterText}
            disabled={showCreation || creatives.length === 0}
            onChange={(e) => {
              setFilterText(e.target.value);
            }}
          />
        </div>
      </div>
      {/* Second Container Ends */}
      {/* Third Container Starts */}
      <div className="filter__bar">
        <div>
          <div style={{ width: `${width}%` }}></div>
        </div>
        <div className="subtitle">{`${filteredCreatives.length} / ${totalCreatives}  Creatives`}</div>
      </div>
      {/* Third Container Ends */}
      {/* Fourth Container Starts */}
      <button
        className="filter__button"
        onClick={handleAddClick}
        disabled={showCreation || creatives.length === totalCreatives}
      >
        + Add Creative
      </button>
      {/* Fourth Container Ends */}
      {/* Fifth Container Starts */}
      {filteredCreatives.length > 0 ? (
        <ul className="filter__creatives">
          {filteredCreatives.map(({ title, subtitle, color }, index) => {
            return (
              <Creative
                key={color + index}
                title={title}
                subtitle={subtitle}
                color={color}
              />
            );
          })}
        </ul>
      ) : (
        <h3>No Creatives Found</h3>
      )}

      {/* Fifth Container Ends */}
    </section>
  );
};

export default Filter;
