/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Experience, Education, Projects, Skills, Contact, Footer, MouseGlow, CustomCursor } from "./components/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-black overflow-x-hidden cursor-none">
      <CustomCursor />
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
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
