
import Hearder from './components/Hearder';
import Prototypes from './components/Prototypes';
import Orders from './components/Orders';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hearder />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
