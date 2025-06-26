import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import { Hero, Navbar, ThemeToggle, About, Experience, Tech, Skills, Works, Certifications, Feedbacks, Contact, InteractiveResume, GitHubActivity, MouseTrail, AnimatedBackground, CustomCursor } from "./components";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <div className='relative z-0 bg-primary'>
            <AnimatedBackground />
            <MouseTrail />
            <CustomCursor />
            <ThemeToggle />
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            
            <About />
            <Experience />
            <Tech />
            <Skills />
            <GitHubActivity />
            <InteractiveResume />
            <Works />
            <Certifications />
            <Feedbacks />
            
            <div className='relative z-0'>
              <Contact />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
