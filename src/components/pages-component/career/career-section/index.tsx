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
import { CenterContainer, GlobalColor, Horizontal, TypoGraphy } from '@/components/common-style';
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
    <Container gap="120px">
      {/* upper wrapper */}
      <SectionWrapper>
        <SectionTitle>
          <TypoGraphy style={{ fontSize: '20px', color: GlobalColor.title, fontWeight: '500' }}>
            Experience
            <TypoGraphy style={{ fontSize: '18px', color: GlobalColor.title }}>
              (
              {
                careerPath.reduce((prev, next) => {
                  return {
                    name: 'total',
                    duration: prev.duration + next.duration,
                    description: '',
                    relation: 0,
                  };
                }).duration
              }
              년)
            </TypoGraphy>
          </TypoGraphy>
        </SectionTitle>

        <CenterContainer style={{ padding: '20px', color: GlobalColor.contentsTone }}>
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

      {/* bottom wrapper */}
      <SectionWrapper>
        <CenterContainer>
          <SkillBarContainer gap="40px">
            {useMemo(
              () =>
                skillSets.map((skillSet) => {
                  return (
                    <Horizontal key={skillSet.title} justifyContent="space-between" style={{ width: '100%' }}>
                      <SkillTitle>
                        <TypoGraphy style={{ fontSize: '16px', color: GlobalColor.contentsTone }}>
                          {skillSet.title}
                        </TypoGraphy>
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
                            >
                              <TypoGraphy
                                style={{
                                  fontSize: '13px',
                                  fontWeight: '500',
                                  overflow: 'hidden',
                                  color: GlobalColor.text,
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
