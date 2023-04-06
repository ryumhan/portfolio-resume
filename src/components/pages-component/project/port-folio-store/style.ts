import styled from '@emotion/styled';
import Image from 'next/image';
import { GlobalColor, Horizontal, Vertical } from '@/components/common-style';

interface StoreWrapperProps {
  clicked: boolean;
}

const ProjectImageStyle = {
  width: '400px',
  height: '300px',
  opacity: '1',
};

export const Container = styled(Vertical)`
  height: 100%;
  width: 100%;
  padding: 50px;
`;

export const StoreContainer = styled(Horizontal)`
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const StoreWrapper = styled.div<StoreWrapperProps>(({ clicked }) => ({
  width: clicked ? '65px' : '130px',
  height: clicked ? '150px' : '300px',
  position: 'relative',
  borderRadius: '10px',
  border: `solid 2px ${GlobalColor.contentsTone}`,
  overflow: 'hidden',
  cursor: 'pointer',

  transition: '0.2s',

  ':hover': ProjectImageStyle,
}));

export const StoreImage = styled(Image)`
  object-fit: cover;
  object-position: 'center';
`;

export const StoreTitle = styled.div`
  position: absolute;
  top: 65%;
  width: 100%;
  background-color: rgb(110, 110, 110, 0.5);
`;

export const StoreDetailContainer = styled(Horizontal)`
  width: 100%;
  padding: 0% 15%;
`;

export const ImageContainer = styled.div`
  position: relative;
  border: solid 2px ${GlobalColor.contentsTone};
  border-radius: 10px;
  overflow: hidden;

  ${ProjectImageStyle}
`;

export const DetailTitle = styled.div``;

export const DetailContents = styled.div`
  width: 460px;
`;

export const DetailImage = styled.div``;

export const GotoUrl = styled.div`
  width: 200px;
  height: 40px;
  background-color: blue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
