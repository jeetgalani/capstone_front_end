import React, {Component} from 'react';

function ScenaryDropDown() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        async function getSeason() {
            const response = await fetch("Backend API")
            const bod = await response.json();
            setItems(bod.results.map(({ season }) => ({label: season, value: season})));
        }
        getSeason();
    }, []);
    return (
      <select disabled={loading}>
        {items.map(item => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    );
  }