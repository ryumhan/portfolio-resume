import styled from '@emotion/styled';

interface ArrowProps {
  direction: 'left' | 'right';
  size?: string;
}

interface FlexProps {
  gap?: string;
  justifyContent?: 'space-between' | 'center' | 'end' | 'left' | 'right' | 'flex-start' | 'flex-end';
  alignItems?: 'center';
}

export const GlobalColor = {
  title: '#3c3c3c',
  generalTone: '#6e6e6e',
  contentsTone: '#828282',
  lightTone: '#3CB4FF',
  text: '#3c3c3c',
};

export const ShadowingBox = `0px 2px 4px 0px ${GlobalColor.generalTone}`;

export const Horizontal = styled.div<FlexProps>(({ gap, justifyContent }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap,
  justifyContent,
}));

export const Vertical = styled.div<FlexProps>(({ gap, justifyContent, alignItems }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap,
  justifyContent,
  alignItems,
}));

export const CenterContainer = styled(Horizontal)`
  display: 'flex';
  align-items: 'center';
  flex-direction: 'row';
  justify-content: center;
`;

export const PaddingContainer = styled.div`
  padding: 24px;
`;

export const TypoGraphy = styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const ArrowDiv = styled.div<ArrowProps>(({ direction, size }) => ({
  width: size || '15px' /* 사이즈 */,
  height: size || '15px' /* 사이즈 */,
  borderTop: `1px solid ${GlobalColor.contentsTone}` /* 선 두께 */,
  borderRight: `1px solid ${GlobalColor.contentsTone}` /* 선 두께 */,
  transform: direction === 'left' ? 'rotate(225deg)' : 'rotate(45deg)' /* 각도 */,
}));
