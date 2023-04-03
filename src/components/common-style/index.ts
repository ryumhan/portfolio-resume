import styled from '@emotion/styled';

interface FlexProps {
  gap?: string;
  justifyContent?: 'space-between' | 'center' | 'end' | 'left' | 'right' | 'flex-start' | 'flex-end';
}

export const GlobalColor = {
  generalTone: '#6e6e6e',
  contentsTone: '#828282',
};

export const Horizontal = styled.div<FlexProps>(({ gap, justifyContent }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap,
  justifyContent,
}));

export const Vertical = styled.div<FlexProps>(({ gap, justifyContent }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap,
  justifyContent,
}));

export const CenterContainer = styled(Horizontal)`
  display: 'flex';
  align-items: 'center';
  flex-direction: 'row';
  justify-content: center;
`;

export const TypoGraphy = styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
`;
