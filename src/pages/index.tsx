import styled from '@emotion/styled';
import { NextPage } from 'next';
import Career from '@/components/career';
import Education from '@/components/education';
import Project from '@/components/project';
import RyuMyungHan from '@/components/ryumyunghan';

const PageConatiner = styled.div`
  overflow: scroll;
  height: calc(100% - 50px);
`;

const Home: NextPage = () => {
  return (
    <PageConatiner>
      <Education />
      <Career />
      <Project />
      <RyuMyungHan />
    </PageConatiner>
  );
};

export default Home;
