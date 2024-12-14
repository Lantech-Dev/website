import { useState, useEffect } from 'react';

export function useScrollSpy(selectors: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = selectors.map(selector => document.querySelector(selector));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const index = elements.findIndex((element) => {
        if (!element) return false;
        const { offsetTop, offsetHeight } = element;
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
      });

      if (index !== -1 && elements[index]) {
        setActiveId(elements[index]?.id || '');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectors, offset]);

  return activeId;
}