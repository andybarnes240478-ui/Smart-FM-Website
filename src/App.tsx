import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Sectors } from './components/Sectors';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';
import { ProductsPage } from './components/ProductsPage';

function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (targetPage: string, targetSection?: string) => {
    setPage(targetPage);
    
    if (targetPage === 'home') {
      if (targetSection) {
        setTimeout(() => {
          const element = document.getElementById(targetSection === 'home' ? 'home-hero' : targetSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
             window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="font-sans text-charcoal selection:bg-primary/20">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {page === 'home' && (
          <>
            <div id="home-hero"><Hero /></div>
            <Services onNavigate={handleNavigate} />
            <Sectors />
            <About />
            <Contact />
          </>
        )}

        {page === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {page === 'products' && (
          <ProductsPage onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
