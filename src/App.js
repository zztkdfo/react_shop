
import Hearder from './components/Hearder';
import Prototypes from './components/Prototypes';
import Orders from './components/Orders';
import Footer from './components/Footer';
import AppStateProvider from './providers/AppStateProvider';

function App() {
  return (
    <AppStateProvider>
      <Hearder />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
      
  );
}

export default App;
