import styled from '@emotion/styled';
import Image from 'next/image';
import { GlobalColor, Horizontal, Vertical } from '@/components/common-style';

const lineBorderFill = GlobalColor.generalTone;
const lineBorderEmpty = '#e0e0e0';

const relationColor = ['#fff', '#FF4646', '#3CB4FF', '#FFAA28', '#64DB99'];

interface CircleProps {
  isActive: boolean;
  size: number;
  descripton: string;
  relation: number;
}

interface SkillComponentProps {
  weight: number;
  relation: number;
}

export const Container = styled(Vertical)`
  height: 100%;
  padding: 10px;
`;

export const SectionWrapper = styled(Vertical)`
  gap: 30px;
`;

export const SectionTitle = styled.div``;

export const CareerCircleContainer = styled(Horizontal)`
  justify-content: space-between;
  position: relative;
  width: 80%;

  ::before {
    // 다음 자식 전
    content: '';
    background-color: ${lineBorderFill};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 3px;
    width: 100%;
  }
`;

export const Circle = styled.div<CircleProps>(({ isActive, size, descripton, relation }) => ({
  cursor: 'pointer',
  background: relation ? relationColor[relation] : '#fff',
  height: `${isActive ? size : 150}px`,
  width: `${isActive ? size : 150}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid',
  transition: 'all ease 0.4s 0s',
  borderColor: isActive ? lineBorderFill : lineBorderEmpty,
  borderRadius: '45%',
  position: 'relative',
  zIndex: 1,

  '::before': {
    content: descripton,
    top: `${0 + size / 2 + 120}px`,
    left: '0',
    position: 'absolute',
    width: '100px',
    fontSize: '14px',
    color: GlobalColor.contentsTone,
  },

  '&:hover': {
    height: `${(isActive ? size : 150) * 1.05}px`,
    width: `${(isActive ? size : 150) * 1.05}px`,
  },
}));

export const SkillBarContainer = styled(Vertical)`
  align-items: center;
  padding: 20px;
  height: 100%;
  width: 85%;
`;

export const SkillBarWrapper = styled(Horizontal)`
  height: 40px;
  background-color: #fff;
  border: solid 2px ${GlobalColor.generalTone};
  border-radius: 5px;
  padding: 3px;
  width: 80%;
  cursor: pointer;
`;

export const SkillTitle = styled.div``;

export const SkillElementComponent = styled.div<SkillComponentProps>(({ weight, relation }) => ({
  backgroundColor: relation ? relationColor[relation] : `rgb(110,110,110,${weight + 0.2})`,
  width: `calc(100% * ${weight})`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${GlobalColor.contentsTone}`,
  position: 'relative',
  transition: 'all ease 0.4s 0s',
}));

export const SkillElementContainer = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: white;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  opacity: 0.5;
`;

export const SkillElementImage = styled(Image)`
  object-fit: 'cover';
  object-position: 'center';
`;
