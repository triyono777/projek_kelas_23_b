import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <Header title="Aplikasi React Saya" />
      <ProfileCard
        name="Triyono"
        email="budi@gmail.com"
        bio="programmer"
      />
    </div>
  );
}

export default App;
