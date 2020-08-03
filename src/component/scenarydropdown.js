import React, {Component} from 'react';

function ScenaryDropDown() {
    const [items] = React.useState([
      {label: "Urban", value: "Urban"},
      {label: "Woodland", value: "Woodland"},
      {label: "Oceanfront", value: "Oceanfront"},

    ]);
    return (
      <select>
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