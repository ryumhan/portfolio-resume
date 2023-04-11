import styled from '@emotion/styled';
import Image from 'next/image';
import { GlobalColor, Horizontal, ShadowingBox, Vertical } from '@/components/common-style';
import { ProjectType } from '@/model/project';

interface StoreWrapperProps {
  selected: boolean;
  type?: ProjectType;
}

interface ImageContainerProps {
  kiosk: boolean;
}

interface ProjectContainerProps {
  selected: boolean;
}

enum ProjectColor {
  'Web' = '#1478FF',
  '반응형 Web' = '#3296D7',
  'FullStack' = '#14148C',
  'Application' = '#FFD200',
  'Mobile' = '#C65FF9',
  '기타' = 'white',
}

const ProjectImageStyle = {
  width: '400px',
  height: '300px',
  opacity: '1',
};

export const Container = styled(Vertical)`
  height: 100%;
  width: 100%;
  padding: 0px 60px;
  justify-content: center;
`;

export const ProjectContainer = styled.div<ProjectContainerProps>(({ selected }) => ({
  width: '45%',
  height: '50px',
  margin: 'auto',
  cursor: 'pointer',
  opacity: '0.7',
  position: 'relative',

  ':after': {
    transition: '0.5s',
    position: 'absolute',
    marginTop: '25px',
    content: '""',
    width: selected ? '180%' : '100%',
    height: '1.3px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: GlobalColor.contentsTone,
  },

  ':hover': {
    ':after': {
      width: '100%',
      transition: '0.5s',
    },
  },
}));

export const StoreContainer = styled(Horizontal)<StoreWrapperProps>(({ selected }) => ({
  margin: 'auto',
  gap: '10px',
  justifyContent: 'center',
  transition: '0.5s',
  width: selected ? '0%' : '100%',
  height: selected ? '0%' : '100%',
}));

export const StoreWrapper = styled.div<StoreWrapperProps>(({ selected, type }) => ({
  width: '90px',
  height: selected ? '0px' : '300px',
  position: 'relative',
  borderRadius: '10px',
  border: selected ? '0px' : `solid 1px ${GlobalColor.contentsTone}`,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: '0.3s',
  boxShadow: ShadowingBox,
  backgroundColor: type ? ProjectColor[type] : 'white',

  ':hover': ProjectImageStyle,
}));

export const StoreImage = styled(Image)`
  object-fit: cover;
  object-position: top;
`;

export const StoreTitle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const StoreDetailContainer = styled(Horizontal)`
  width: 100%;
  padding: 0 10%;
`;

export const ImageContainer = styled.div<ImageContainerProps>(({ kiosk }) => ({
  margin: '10px',
  position: 'relative',
  border: `solid 2px ${GlobalColor.contentsTone}`,
  bordrRadius: '10px',
  overflow: 'hidden',
  width: kiosk ? '430px' : '660px',
  height: kiosk ? '650px' : '380px',
  boxShadow: ShadowingBox,
  opacity: '1',
}));

export const DetailTitle = styled.div``;

export const DetailContents = styled.div`
  width: 600px;
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
