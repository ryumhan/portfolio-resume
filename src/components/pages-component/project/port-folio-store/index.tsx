import { useMemo, useState } from 'react';
import { Project } from '@/model/project';
import { Container, ProjectContainer, StoreContainer, StoreImage, StoreTitle, StoreWrapper } from './style';

import { CenterContainer, GlobalColor, TypoGraphy, Vertical } from '@/components/common-style';
import StoreDetail from './storeDetail';

interface Props {
  projects: Project[];
}

const PortFolioStore = ({ projects }: Props): React.ReactElement => {
  const [selected, setSelect] = useState(-1);
  const [projectOnHover, setProjectOnHover] = useState(-1);

  const isSelect = useMemo(() => {
    return selected !== -1;
  }, [selected]);

  return (
    <Container>
      <Vertical gap="25px">
        <ProjectContainer selected={isSelect} onMouseEnter={() => setSelect(-1)}>
          <CenterContainer>
            <TypoGraphy style={{ fontSize: '24px' }}>{isSelect ? 'PROJECT' : 'PROJECT LIST'}</TypoGraphy>
          </CenterContainer>
        </ProjectContainer>

        <StoreContainer selected={isSelect}>
          {useMemo(() => {
            return projects.map((project, index) => {
              return (
                <StoreWrapper
                  selected={isSelect}
                  key={project.title + index}
                  onClick={() => {
                    setSelect(index);
                  }}
                  onMouseEnter={() => setProjectOnHover(index)}
                  onMouseLeave={() => setProjectOnHover(-1)}
                  type={project.type}
                >
                  {projectOnHover === index && project.img[0] && (
                    <StoreImage src={project.img[0]} alt={project.img[0]} fill />
                  )}
                  {projectOnHover !== index && (
                    <StoreTitle>
                      <TypoGraphy
                        style={{
                          fontSize: '16px',
                          fontWeight: '500',
                          color: project.type === '기타' ? GlobalColor.contentsTone : 'white',
                        }}
                      >
                        {project.type}
                      </TypoGraphy>
                      <TypoGraphy
                        style={{
                          fontSize: '12px',
                          fontWeight: '400',
                          color: project.type === '기타' ? GlobalColor.contentsTone : 'white',
                        }}
                      >
                        ({project.title})
                      </TypoGraphy>
                    </StoreTitle>
                  )}
                </StoreWrapper>
              );
            });
          }, [projects, isSelect, projectOnHover])}
        </StoreContainer>

        {/* Detail appear only clicked */}
        {isSelect && <StoreDetail selected={projects[selected]} />}
      </Vertical>
    </Container>
  );
};

export default PortFolioStore;
