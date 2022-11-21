import './App.css';
import { ProfileCard } from './Components/profileCard';
import alexa from './Images/alexa.png';
import cortana from './Images/cortana.png';
import siri from './Images/siri.png';

function App() {
  return (
    <div className="app">
      <h1>Personal Digital Assistants</h1>
      <div className="card">
        <div className="card-1">
          <ProfileCard title="Alexa" handle="@alexa99" image={alexa} />
        </div>
        <div className="card-2">
          <ProfileCard title="Cortana" handle="@cortana31" image={cortana} />
        </div>
        <div className="card-3">
          <ProfileCard title="Siri" handle="@siri01" image={siri} />
        </div>
      </div>
    </div>
  );
}

export default App;
