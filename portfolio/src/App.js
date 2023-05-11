import { useState } from 'react';
import './App.css';
import { Owner } from './components/Owner';
import { Avatar } from './components/Avatar';
import { Contacts } from './components/Contacts';
import Work from './components/Work';
import { WorkExperience } from './components/WorkExperience';
import { AddExperience } from './components/AddExperience';
import { Counter } from './components/Counter';

import avatar from './assets/avatar.png';
// import avatar370 from './assets/avatar_370.png';
// import avatar360 from './assets/avatar_360.png';

// const Images = [
//   avatar,
//   avatar370,
//   avatar360
// ]
const Image = avatar;


function App() {
  const [workExperienceItems, setWorkExperienceItems] = useState([]);
  function addExperience(newItem) {
    setWorkExperienceItems([...workExperienceItems, newItem]);
  }
  return (
    <main className="main">
      <Owner />
      <Avatar Image={Image} />
      <Contacts />
      <WorkExperience />
      {workExperienceItems.map(item => (
        <Work key={item.name} {...item} />
      ))}
      <AddExperience addExperience={addExperience}/>
      <Counter/>
    </main>
  );
}

export default App;
