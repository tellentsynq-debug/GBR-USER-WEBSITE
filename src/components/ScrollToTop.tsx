import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const smoothScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Use scroll-margin-top on sections for header offset
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    smoothScrollTop();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
