import './App.css';
import AsideNavBar from './components/AsideNavBar';
import MainView from './components/MainView';

function App() {
  return (
    <div className="App flex min-h-screen">
      <AsideNavBar/>
      <MainView/>      
    </div>
  );
}

export default App;
