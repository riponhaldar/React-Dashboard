import React, { useState } from 'react';
import './App.css';

function App() {
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (dropdownId) => {
    if (openDropdowns.includes(dropdownId)) {
      setOpenDropdowns(openDropdowns.filter((id) => id !== dropdownId)); // Close the clicked dropdown
    } else {
      setOpenDropdowns([...openDropdowns, dropdownId]); // Open the clicked dropdown
    }
  };

  const isDropdownOpen = (dropdownId) => {
    return openDropdowns.includes(dropdownId);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <button onClick={() => toggleDropdown('dropdownA')}>
          Toggle Dropdown A
        </button>
        {isDropdownOpen('dropdownA') && (
          <ul>
            <li>Item A1</li>
            <li>Item A2</li>
            <li>Item A3</li>
          </ul>
        )}

        <button onClick={() => toggleDropdown('dropdownB')}>
          Toggle Dropdown B
        </button>
        {isDropdownOpen('dropdownB') && (
          <ul>
            <li>Item B1</li>
            <li>Item B2</li>
            <li>Item B3</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
