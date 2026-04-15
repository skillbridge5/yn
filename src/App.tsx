/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Experience, Education, Projects, Skills, Contact, Footer } from "./components/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
