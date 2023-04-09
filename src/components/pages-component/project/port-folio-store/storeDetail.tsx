import {
  Horizontal,
  Vertical,
  TypoGraphy,
  GlobalColor,
  CenterContainer,
  PaddingContainer,
} from '@/components/common-style';
import { Project } from '@/model/project';
import { useEffect, useState } from 'react';
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
  const [image, setImage] = useState<string>();

  const handleViewOpen = (url: string | undefined) => {
    if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener, noreferrer');
  };

  const initImage = () => {
    setImage(selected.img[0] || '');
  };

  const imageTimer = () => {
    let idx = 0;
    let timeInst;

    const max = selected.img.length;
    if (max) {
      timeInst = setInterval(() => {
        const next = ++idx % max;
        setImage(selected.img[next]);
      }, 3 * 1000);
    }

    return timeInst;
  };

  useEffect(() => {
    initImage();

    const timeInst = imageTimer();
    return () => {
      clearInterval(timeInst);
    };
  }, [selected]);

  return (
    <StoreDetailContainer justifyContent="space-between" style={{ width: '100%' }}>
      <Vertical style={{ width: '100%' }}>
        <DetailTitle>
          <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
            {selected.title}
          </TypoGraphy>
        </DetailTitle>

        <Horizontal justifyContent="space-between" style={{ height: '100%' }}>
          {/* left side */}
          <Vertical>
            <PaddingContainer>
              <Vertical gap="10px">
                <DetailTitle>
                  <TypoGraphy style={{ fontSize: '15px', color: GlobalColor.contentsTone }}>
                    : {selected.role}
                  </TypoGraphy>
                </DetailTitle>

                <DetailTitle>
                  <TypoGraphy style={{ fontSize: '15px', color: GlobalColor.contentsTone }}>
                    : {selected.skill.join(', ')}
                  </TypoGraphy>
                </DetailTitle>

                <ImageContainer kiosk={selected.imgType === 'kiosk'}>
                  {image && <StoreImage src={image} alt={selected.img[0]} fill />}
                </ImageContainer>

                <CenterContainer>
                  {selected.url && (
                    <GotoUrl
                      onClick={() => {
                        if (typeof selected?.url !== 'undefined') handleViewOpen(selected.url);
                      }}
                    >
                      <TypoGraphy style={{ fontSize: '20px', color: 'white' }}>View</TypoGraphy>
                    </GotoUrl>
                  )}
                </CenterContainer>
              </Vertical>
            </PaddingContainer>
          </Vertical>

          {/* right side */}
          <Vertical gap="20px">
            <DetailTitle>
              <TypoGraphy style={{ fontSize: '18px', color: GlobalColor.contentsTone }}>주요 기능</TypoGraphy>
              <PaddingContainer>
                <Vertical gap="3px">
                  {selected.descriptions.map((desc, idx) => {
                    return (
                      <DetailContents key={desc[0] + idx}>
                        <TypoGraphy>- {desc}</TypoGraphy>
                      </DetailContents>
                    );
                  })}
                </Vertical>
              </PaddingContainer>
            </DetailTitle>

            <DetailTitle>
              <TypoGraphy style={{ fontSize: '18px', color: GlobalColor.contentsTone }}>기여점</TypoGraphy>
              <PaddingContainer>
                <Vertical gap="3px">
                  {selected.contributions.map((contri, idx) => {
                    return (
                      <DetailContents key={contri[0] + idx}>
                        <TypoGraphy>- {contri}</TypoGraphy>
                      </DetailContents>
                    );
                  })}
                </Vertical>
              </PaddingContainer>
            </DetailTitle>
          </Vertical>
        </Horizontal>
      </Vertical>
    </StoreDetailContainer>
  );
};

export default StoreDetail;
