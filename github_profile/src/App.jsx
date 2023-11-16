// App.jsx
import  { useState } from 'react';
import NavBar from './componets/NavBar';
import Search from './componets/Search';
import GitHubProfile from './componets/GitHubProfile';

function App() {
  const [screen, setScreen] = useState('search');
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`GitHub API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setUserData(data);
      setScreen('profile');
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  };

  const handleNavClick = (targetScreen) => {
    setScreen(targetScreen);
  };

  return (
    <div className="App">
      <NavBar onNavClick={handleNavClick} />
      {screen === 'search' && <Search onSearch={handleSearch} />}
      {screen === 'profile' && (
        <GitHubProfile userData={userData} onBackToSearch={() => setScreen('search')} />
      )}
    </div>
  );
}

export default App;
