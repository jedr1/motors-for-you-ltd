import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollToTopOnNavigate() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = () => {
      // Scroll to the top of the page when navigating
      window.scrollTo(0, 0);
    };

    // Attach the navigation listener
    navigate(handleNavigation);

    // Clean up the listener when the component unmounts
    return () => {
      navigate(); // Remove the navigation listener
    };
  }, [navigate]);

  return null; // This component doesn't render anything
}

export default ScrollToTopOnNavigate;
