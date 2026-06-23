/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import CategoriesSection from './components/CategoriesSection';
import FeaturedProductsSection from './components/FeaturedProductsSection';
import VisitUsSection from './components/VisitUsSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

export default function App() {
  return (
    <main className="bg-[#010828] min-h-screen text-cream selection:bg-neon selection:text-[#010828]">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <VisitUsSection />
      <Footer />
      <BackToTopButton />
    </main>
  );
}

