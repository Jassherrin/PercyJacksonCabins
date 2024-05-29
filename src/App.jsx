import React, { useState } from 'react';
import './App.css';
import Cabins from './cabins';
import ToDoList from './ToDoList';
import Pomodoro from './Pomodoro';

const App = () => {
  const [selectedCabin, setSelectedCabin] = useState(null);

  const handleCabinSelect = (cabinName) => {
    setSelectedCabin(cabinName);
  };

  return (
    <div className="app">
      <header>
        <h1>Percy Jackson Cabins</h1>
      </header>
      <main>
        <Cabins onSelect={handleCabinSelect} />
        {selectedCabin && (
          <div className="selected-cabin">
            <h2>{selectedCabin}</h2>
            {/* You can add more details about the selected cabin here */}
          </div>
        )}
        <ToDoList />
        <Pomodoro />
      </main>
    </div>
  );
};

export default App;
