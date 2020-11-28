import { useState, useEffect } from 'react';

export function usePageWidth() {
  const [pageWidth, setWidth] = useState();

  useEffect(() => {
      const width = Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
      );
      setWidth(width);
  }, []);

  return pageWidth;
}
