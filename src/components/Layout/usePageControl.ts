import { useCallback, useEffect } from 'react';

interface Props {
  currentPath: string;
  nextPath: string;
}

const usePageControl = ({}: Props) => {
  const detectScroll = useCallback((ev: Event) => {}, []);

  useEffect(() => {
    window.addEventListener('scroll', detectScroll);
  }, []);
};
