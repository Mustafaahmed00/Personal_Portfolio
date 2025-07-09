import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import { Hero, Navbar, ThemeToggle, About, Experience, Organizations, Tech, Skills, Works, Certifications, Feedbacks, Contact, InteractiveResume, GitHubActivity, MouseTrail, AnimatedBackground, CustomCursor, Blog, BackToTop } from "./components";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <div className='relative z-0 bg-primary'>
            <AnimatedBackground />
            {/* Temporarily disabled to fix button click issues */}
            {/* <MouseTrail /> */}
            {/* <CustomCursor /> */}
            <ThemeToggle />
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            
            <About />
            <Experience />
            <Organizations />
            <Tech />
            <Skills />
            <GitHubActivity />
            <InteractiveResume />
            <Works />
            <Blog />
            <Certifications />
            <Feedbacks />
            
            <div className='relative z-0'>
              <Contact />
            </div>
            
            <BackToTop />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
