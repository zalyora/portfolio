import './App.css';
import { Owner } from './components/Owner';
import { Avatar } from './components/Avatar';
import { Contacts } from './components/Contacts';
import { WorkExperience } from './components/WorkExperience';

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
  return (
    <main className="main">
      <Owner />
      <Avatar Image={Image} />
      <Contacts />
      <WorkExperience />
    </main>
  );
}

export default App;
