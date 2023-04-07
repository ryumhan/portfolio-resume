import {
  Horizontal,
  Vertical,
  TypoGraphy,
  GlobalColor,
  CenterContainer,
  PaddingContainer,
} from '@/components/common-style';
import { Project } from '@/model/project';
import {
  StoreDetailContainer,
  DetailTitle,
  ImageContainer,
  StoreImage,
  GotoUrl,
  DetailContents,
} from './style';

interface Props {
  selected: Project;
}

const StoreDetail = ({ selected }: Props): React.ReactElement => {
  const handleViewOpen = (url: string | undefined) => {
    if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <StoreDetailContainer>
      <Horizontal justifyContent="space-between" style={{ width: '100%' }}>
        <Vertical gap="10px" style={{ width: '550px' }}>
          <DetailTitle>
            <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
              {selected.title}
            </TypoGraphy>
            <br />
            <br />
            <CenterContainer>
              <TypoGraphy style={{ fontSize: '20px', color: GlobalColor.contentsTone }}>
                {selected.skill.join(', ')}
              </TypoGraphy>
            </CenterContainer>
          </DetailTitle>

          <PaddingContainer>
            <Vertical gap="20px" alignItems="center">
              <ImageContainer>
                <StoreImage src={selected.img[0]} alt={selected.img[0]} fill />
              </ImageContainer>

              {selected.url && (
                <GotoUrl
                  onClick={() => {
                    if (typeof selected?.url !== 'undefined') handleViewOpen(selected.url);
                  }}
                >
                  <TypoGraphy style={{ fontSize: '20px', color: 'white' }}>View</TypoGraphy>
                </GotoUrl>
              )}
            </Vertical>
          </PaddingContainer>
        </Vertical>

        <Vertical>
          <DetailTitle>
            <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>역할</TypoGraphy>
            <PaddingContainer>{selected.role}</PaddingContainer>
          </DetailTitle>

          <DetailTitle>
            <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>서비스</TypoGraphy>
            <PaddingContainer>
              <Vertical gap="3px">
                {selected.descriptions.map((desc, idx) => {
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
            <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>기여점</TypoGraphy>
            <PaddingContainer>
              <Vertical gap="3px">
                {selected.contributions.map((contri, idx) => {
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
    </StoreDetailContainer>
  );
};

export default StoreDetail;
