import { MutableRefObject, useCallback, useState } from 'react';
import util from '@/util';

type SelctCallback = (select: number) => void;
type DetectCallback = () => void;

interface Section {
  name: string;
  ref: MutableRefObject<HTMLDivElement | null>;
}

interface Props {
  menus: string[];
  refs: MutableRefObject<HTMLDivElement | null>[];
}

const useSectionControl = ({ menus, refs }: Props): [Section[], DetectCallback, SelctCallback] => {
  const [sectionList] = useState<Section[]>(
    menus.map((menu, idx) => {
      return {
        name: menu,
        ref: refs[idx],
      };
    }),
  );

  const detectScroll = util.debounce(
    useCallback(() => {
      console.log('scroll');
    }, []),
    300,
  );

  const selectCallback = useCallback((select: number) => {
    sectionList[select].ref?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return [sectionList, detectScroll, selectCallback];
};

export default useSectionControl;
