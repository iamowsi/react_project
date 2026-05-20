import React from 'react';
import Car from './Car';   // این خط را اضافه کن

function App() {
  return (
    <div>
      <Car make="toyota" model="camry" year="2012" color="blue" money="$5000"/>
      <Car make="honda" model="125cdi" year="2025" color="red" money="$500"/>
    </div>
  );
}

export default App;