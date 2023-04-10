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
      }, 2.5 * 1000);
    }

    return timeInst;
  };

  console.log(image);
  useEffect(() => {
    initImage();

    const timeInst = imageTimer();
    return () => {
      clearInterval(timeInst);
    };
  }, [selected]);

  return (
    <StoreDetailContainer justifyContent="space-between" style={{ width: '100%' }}>
      <Vertical style={{ width: '100%', height: '100%' }}>
        <DetailTitle>
          <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
            {selected.title}
          </TypoGraphy>
          <TypoGraphy style={{ fontSize: '20px', color: GlobalColor.contentsTone }}>
            {selected.url ? `(${selected.url})` : ''}
          </TypoGraphy>
        </DetailTitle>

        <Horizontal justifyContent="space-between" style={{ height: '100%' }}>
          {/* left side */}
          <Vertical gap="10px" style={{ height: '100%' }}>
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

            <ImageContainer kiosk={selected.imgType === 'kiosk'}>
              {image && <StoreImage src={image} alt={image} fill />}
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

          {/* right side */}
          <Vertical gap={'10px'}>
            <DetailTitle>
              <TypoGraphy style={{ fontSize: '18px', color: GlobalColor.contentsTone }}>주요 기능</TypoGraphy>
              <PaddingContainer>
                <Vertical gap="12px">
                  {selected.descriptions.map((desc, idx) => {
                    return (
                      <Horizontal key={desc[0] + idx} gap={'10px'}>
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

            <DetailTitle>
              <TypoGraphy style={{ fontSize: '18px', color: GlobalColor.contentsTone }}>기여점</TypoGraphy>
              <PaddingContainer>
                <Vertical gap="12px">
                  {selected.contributions.map((contri, idx) => {
                    return (
                      <Horizontal key={contri[0] + idx} gap={'10px'}>
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
          </Vertical>
        </Horizontal>
      </Vertical>
    </StoreDetailContainer>
  );
};

export default StoreDetail;
