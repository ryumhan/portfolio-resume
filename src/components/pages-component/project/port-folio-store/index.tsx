import { useMemo, useState } from 'react';
import { Project } from '@/model/project';
import { Container, StoreContainer, StoreImage, StoreTitle, StoreWrapper } from './style';

import { TypoGraphy, Vertical } from '@/components/common-style';
import StoreDetail from './storeDetail';

interface Props {
  projects: Project[];
}

const PortFolioStore = ({ projects }: Props): React.ReactElement => {
  const [selected, setSelect] = useState(-1);

  return (
    <Container>
      <Vertical gap="130px">
        <StoreContainer>
          {useMemo(() => {
            return projects
              .filter((project, index) => {
                return selected === -1 ? true : index !== selected;
              })
              .map((project, index) => {
                return (
                  <StoreWrapper
                    key={project.title + index}
                    selected={selected !== -1}
                    onClick={() => {
                      setSelect(index);
                    }}
                  >
                    <StoreImage src={project.img[0]} alt={project.img[0]} fill />
                    <StoreTitle>
                      <TypoGraphy>{project.title}</TypoGraphy>
                    </StoreTitle>
                  </StoreWrapper>
                );
              });
          }, [projects, selected])}
        </StoreContainer>
        {/* Detail appear only clicked */}
        {selected !== -1 && <StoreDetail selected={projects[selected]} />}
      </Vertical>
    </Container>
  );
};

export default PortFolioStore;
