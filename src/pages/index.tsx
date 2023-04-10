import { NextPage } from 'next';

import { useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import Career from '@/components/pages-component/career';
import Education from '@/components/pages-component/education';
import Project from '@/components/pages-component/project';
import RyuMyungHan from '@/components/pages-component/ryumyunghan';
import Layout from '@/components/Layout';
import useSectionControl from '@/components/Layout/useSectionController';
import { MENU_CONFIG } from '@/constants';

const PageConatiner = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory; /* 부모 적용 */
  height: calc(100% - 70px);
`;

const Home: NextPage = () => {
  const root = useRef<HTMLDivElement>(null);

  const eduRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const proRef = useRef<HTMLDivElement>(null);
  const ryuRef = useRef<HTMLDivElement>(null);

  const [sections, detectScroll, selectCallback] = useSectionControl({
    menus: MENU_CONFIG,
    refs: [ryuRef, carRef, proRef, eduRef],
  });

  return (
    <Layout
      menuList={useMemo(() => sections.map((section) => section.name), [])}
      selectCallback={selectCallback}
    >
      <PageConatiner ref={root} onScroll={detectScroll}>
        <RyuMyungHan ryuRef={ryuRef} />
        <Career carRef={carRef} />
        <Project proRef={proRef} />
      </PageConatiner>
    </Layout>
  );
};

export default Home;
