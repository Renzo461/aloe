import './App.css';
import AsideNavBar from './components/Aside/AsideNavBar';
import MainView from './components/MainView';

const App =()=> {
  const name="laura"
  return (
    <div className="App flex flex-nowrap min-h-screen">
      <AsideNavBar nombre={name}/>
      <MainView nombre={name}/>      
    </div>
  );
}

export default App;
