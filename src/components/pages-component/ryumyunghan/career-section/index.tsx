import React, { useCallback, useMemo, useState } from 'react';
import { Company } from '@/model/company';
import {
  CareerCircleContainer,
  Circle,
  Container,
  SectionTitle,
  SectionWrapper,
  SkillBarContainer,
  SkillBarWrapper,
  SkillElementComponent,
  SkillElementContainer,
  SkillElementImage,
  SkillTitle,
} from './style';
import { CenterContainer, Horizontal, TypoGraphy } from '@/components/common-style';
import { SkillSet } from '@/model/skill';

const YEAR_WEIGHT = 55;

interface Props {
  careerPath: Company[];
  skillSets: SkillSet[];
}

const CareerSection = ({ careerPath, skillSets }: Props): React.ReactElement => {
  const [onHover, setHover] = useState<number[]>([]);

  const handleUpdateHoverList = useCallback((list: number[]) => {
    setHover(list);
  }, []);

  return (
    <Container gap="140px">
      <SectionWrapper>
        <SectionTitle>
          <TypoGraphy style={{ fontSize: '20px' }}>Career</TypoGraphy>
        </SectionTitle>
        <CenterContainer>
          <CareerCircleContainer>
            {useMemo(
              () =>
                careerPath.map((company) => (
                  <Circle
                    isActive={!!company.duration}
                    size={company.duration ? company.duration * YEAR_WEIGHT : 150}
                    descripton={company.description}
                    key={company.name}
                    relation={onHover?.includes(company.relation) ? company.relation : 0}
                    onMouseEnter={() => {
                      handleUpdateHoverList([company.relation]);
                      [];
                    }}
                    onMouseLeave={() => {
                      handleUpdateHoverList([]);
                    }}
                  >
                    {company.name}
                  </Circle>
                )),
              [careerPath, onHover],
            )}
          </CareerCircleContainer>
        </CenterContainer>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>
          <TypoGraphy style={{ fontSize: '20px' }}>Skill</TypoGraphy>
        </SectionTitle>
        <CenterContainer>
          <SkillBarContainer gap="25px">
            {useMemo(
              () =>
                skillSets.map((skillSet) => {
                  return (
                    <Horizontal key={skillSet.title} justifyContent="space-between" style={{ width: '100%' }}>
                      <SkillTitle>
                        <TypoGraphy>{skillSet.title}</TypoGraphy>
                      </SkillTitle>
                      <SkillBarWrapper>
                        {skillSet.skillSet.map((skill) => {
                          return (
                            <SkillElementComponent
                              key={skill.skillName}
                              weight={skill.duration / skillSet.total}
                              relation={
                                onHover.filter((element) => {
                                  return skill.relations?.includes(element);
                                }).length
                                  ? onHover.filter((element) => {
                                      return skill.relations?.includes(element);
                                    })[0]
                                  : 0
                              }
                              onMouseEnter={() => {
                                handleUpdateHoverList(skill.relations);
                              }}
                              onMouseLeave={() => {
                                handleUpdateHoverList([]);
                              }}
                            >
                              <TypoGraphy
                                style={{
                                  fontSize: '10px',
                                  fontWeight: 'bold',
                                  color: 'black',
                                  overflow: 'hidden',
                                }}
                              >
                                {skill.skillName}
                              </TypoGraphy>
                              {skill.img && (
                                <SkillElementContainer>
                                  <SkillElementImage src={skill.img} alt="skill_image" fill />
                                </SkillElementContainer>
                              )}
                            </SkillElementComponent>
                          );
                        })}
                      </SkillBarWrapper>
                    </Horizontal>
                  );
                }),
              [skillSets, onHover],
            )}
          </SkillBarContainer>
        </CenterContainer>
      </SectionWrapper>
    </Container>
  );
};

export default CareerSection;
