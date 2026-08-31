import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

/**
 * Custom React hook to detect mobile, tablet, and desktop viewports,
 * orientation, and touch capability with performant resize listener.
 */
export function useMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    isTouch: typeof window !== 'undefined' ? ('ontouchstart' in window || navigator.maxTouchPoints > 0) : false,
  }));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const isMobile = dimensions.width < breakpoint;
  const isTablet = dimensions.width >= breakpoint && dimensions.width < TABLET_BREAKPOINT;
  const isDesktop = dimensions.width >= TABLET_BREAKPOINT;
  const isLandscape = dimensions.width > dimensions.height;

  return {
    isMobile,
    isTablet,
    isDesktop,
    windowWidth: dimensions.width,
    windowHeight: dimensions.height,
    isLandscape,
    isTouchDevice: dimensions.isTouch,
    breakpoint,
  };
}

export default useMobile;
