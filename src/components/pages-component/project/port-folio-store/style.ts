import styled from '@emotion/styled';
import Image from 'next/image';
import { GlobalColor, Horizontal, Vertical } from '@/components/common-style';

interface StoreWrapperProps {
  selected: boolean;
}

interface ImageContainerProps {
  kiosk: boolean;
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

export const ProjectContainer = styled.div(() => ({
  backgroundColor: GlobalColor.contentsTone,
  width: '100px',
  height: '50px',
  borderRadius: '50%',
  margin: 'auto',
  transition: '0.4s',
  cursor: 'pointer',

  ':hover': {
    width: '300px',
    height: '50px',
    borderRadius: '20px',
  },
}));

export const StoreContainer = styled(Horizontal)`
  gap: 10px;
  justify-content: center;
`;

export const StoreWrapper = styled.div<StoreWrapperProps>(() => ({
  width: '80px',
  height: '300px',
  position: 'relative',
  borderRadius: '10px',
  border: `solid 2px ${GlobalColor.contentsTone}`,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: '0.3s',

  ':hover': ProjectImageStyle,
}));

export const StoreImage = styled(Image)`
  object-fit: cover;
  object-position: left;
`;

export const StoreTitle = styled.div`
  position: absolute;
  top: 65%;
  width: 100%;
  background-color: rgb(110, 110, 110, 0.5);
`;

export const StoreDetailContainer = styled(Horizontal)`
  width: 100%;
  padding: 0% 17%;
`;

export const ImageContainer = styled.div<ImageContainerProps>(({ kiosk }) => ({
  margin: '10px',
  position: 'relative',
  border: `solid 2px ${GlobalColor.contentsTone}`,
  bordrRadius: '10px',
  overflow: 'hidden',
  width: kiosk ? '350px' : '550px',
  height: kiosk ? '600px' : '380px',
  opacity: '1',
}));

export const DetailTitle = styled.div``;

export const DetailContents = styled.div`
  width: 500px;
  display: flex;
  line-height: normal;
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
