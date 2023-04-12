import { Vertical, PaddingContainer, TypoGraphy, GlobalColor, Horizontal } from '@/components/common-style';
import { Project } from '@/model/project';
import { DetailTitle, DetailContents } from './style';

interface Props {
  selected: Project;
}

const EtcProjectDetailContents = ({ selected }: Props): React.ReactElement => {
  return (
    <Vertical>
      <PaddingContainer style={{ paddingTop: '0px' }}>
        <DetailTitle style={{ marginTop: '15px' }}>
          <TypoGraphy style={{ fontSize: '15px', color: GlobalColor.contentsTone }}>
            : {selected.role}
          </TypoGraphy>
        </DetailTitle>
        <DetailTitle>
          <TypoGraphy style={{ fontSize: '15px', color: GlobalColor.contentsTone }}>
            : {selected.skill.join(', ')}
          </TypoGraphy>
        </DetailTitle>
      </PaddingContainer>

      <Horizontal style={{ height: '100%' }}>
        <PaddingContainer style={{ height: '100%' }}>
          <DetailTitle>
            <TypoGraphy style={{ fontSize: '18px', color: GlobalColor.contentsTone }}>
              기타 서비스 및 개발
            </TypoGraphy>
            <PaddingContainer>
              <Vertical gap="12px">
                {selected.descriptions.map((desc, idx) => {
                  return (
                    <Horizontal key={desc[0] + idx} gap="10px">
                      <TypoGraphy>-</TypoGraphy>
                      <DetailContents>
                        <TypoGraphy>{desc}</TypoGraphy>
                      </DetailContents>
                    </Horizontal>
                  );
                })}
              </Vertical>
            </PaddingContainer>
          </DetailTitle>
        </PaddingContainer>

        <PaddingContainer style={{ height: '100%' }}>
          <DetailTitle>
            <TypoGraphy style={{ fontSize: '18px', color: GlobalColor.contentsTone }}>개발 내용</TypoGraphy>
            <PaddingContainer>
              <Vertical gap="12px">
                {selected.contributions.map((contri, idx) => {
                  return (
                    <Horizontal key={contri[0] + idx} gap="10px">
                      <TypoGraphy>-</TypoGraphy>
                      <DetailContents>
                        <TypoGraphy>{contri}</TypoGraphy>
                      </DetailContents>
                    </Horizontal>
                  );
                })}
              </Vertical>
            </PaddingContainer>
          </DetailTitle>
        </PaddingContainer>
      </Horizontal>
    </Vertical>
  );
};

export default EtcProjectDetailContents;
