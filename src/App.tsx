import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { FeaturedCollections } from './components/featured-collections';
import { NewArrivals } from './components/new-arrivals';
import { HowItWorks } from './components/how-it-works';
import { BrandValues } from './components/brand-values';
import { Testimonials } from './components/testimonials';
import { Newsletter } from './components/newsletter';
import { FAQ } from './components/qestion';
import { Footer } from './components/footer';
import { CustomerRegistration } from './components/customer-registration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <FeaturedCollections />
                <NewArrivals />
                <HowItWorks />
                <BrandValues />
                <Testimonials />
                <Newsletter />
                <FAQ />
              </main>
              <Footer />
            </>
          } />
          <Route path="/register" element={<CustomerRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
