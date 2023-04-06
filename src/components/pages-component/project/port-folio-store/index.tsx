import { useState } from 'react';
import { Project } from '@/model/project';
import {
  Container,
  DetailContents,
  DetailTitle,
  GotoUrl,
  ImageContainer,
  StoreContainer,
  StoreDetailContainer,
  StoreImage,
  StoreTitle,
  StoreWrapper,
} from './style';

import {
  CenterContainer,
  GlobalColor,
  Horizontal,
  PaddingContainer,
  TypoGraphy,
  Vertical,
} from '@/components/common-style';

interface Props {
  projects: Project[];
}

const PortFolioStore = ({ projects }: Props): React.ReactElement => {
  const [selected, setSelect] = useState(-1);

  const handleViewOpen = (url: string | undefined) => {
    if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <Container>
      <Vertical gap="150px">
        <StoreContainer>
          {projects.map((project, index) => {
            return (
              <StoreWrapper
                key={project.title}
                clicked={selected === index}
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
          })}
        </StoreContainer>
        {selected !== -1 && (
          <StoreDetailContainer>
            <Vertical gap="10px" style={{ width: '100%' }}>
              <DetailTitle>
                <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
                  {projects[selected].title}
                </TypoGraphy>
              </DetailTitle>

              <PaddingContainer>
                <Horizontal justifyContent="space-between">
                  <Vertical gap="20px">
                    <ImageContainer>
                      <StoreImage src={projects[selected].img[0]} alt={projects[selected].img[0]} fill />
                    </ImageContainer>

                    <DetailTitle>
                      <TypoGraphy style={{ fontSize: '20px', color: GlobalColor.contentsTone }}>
                        {projects[selected].skill.join(', ')}
                      </TypoGraphy>
                    </DetailTitle>

                    {projects[selected].url && (
                      <CenterContainer>
                        <GotoUrl
                          onClick={() => {
                            if (typeof projects[selected]?.url !== 'undefined')
                              handleViewOpen(projects[selected].url);
                          }}
                        >
                          <TypoGraphy style={{ fontSize: '20px', color: 'white' }}>View</TypoGraphy>
                        </GotoUrl>
                      </CenterContainer>
                    )}
                  </Vertical>

                  <Vertical>
                    <DetailTitle>
                      <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
                        역할
                      </TypoGraphy>
                      <PaddingContainer>{projects[selected].role}</PaddingContainer>
                    </DetailTitle>

                    <DetailTitle>
                      <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
                        서비스
                      </TypoGraphy>
                      <PaddingContainer>
                        <Vertical gap="3px">
                          {projects[selected].descriptions.map((desc, idx) => {
                            return (
                              <DetailContents key={desc[0] + idx}>
                                <TypoGraphy>* {desc}</TypoGraphy>
                              </DetailContents>
                            );
                          })}
                        </Vertical>
                      </PaddingContainer>
                    </DetailTitle>

                    <DetailTitle>
                      <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
                        기여점
                      </TypoGraphy>
                      <PaddingContainer>
                        <Vertical gap="3px">
                          {projects[selected].contributions.map((contri, idx) => {
                            return (
                              <DetailContents key={contri[0] + idx}>
                                <TypoGraphy>* {contri}</TypoGraphy>;
                              </DetailContents>
                            );
                          })}
                        </Vertical>
                      </PaddingContainer>
                    </DetailTitle>
                  </Vertical>
                </Horizontal>
              </PaddingContainer>
            </Vertical>
          </StoreDetailContainer>
        )}
      </Vertical>
    </Container>
  );
};

export default PortFolioStore;
