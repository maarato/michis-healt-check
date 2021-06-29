import Header from './Header';
import Footer from './Footer';
import DataPuller from './DataPuller';

function App() {
  return (
    <div className="App container">
	    <Header/>
      <div className="row mt-5 pt-4">
        <DataPuller />
      </div>
	    <Footer/>
    </div>
  );
}

export default App;
