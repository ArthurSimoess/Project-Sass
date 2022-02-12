import '../src/styles/styles.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
