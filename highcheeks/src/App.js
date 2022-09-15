import "./App.css";
import Header from './Component/Header';
import MainVisual from './Component/MainVisual';
import MainContent from "./Component/MainContent";


const App = () => {
  return (
    <div className="Wrap">
      <Header />

      <main>
        <MainVisual />
        <MainContent />
      </main>

    </div>
  )
}
export default App;
