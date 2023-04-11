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
  padding: 50px 18%;
`;

export const SectionWrapper = styled(Vertical)`
  gap: 24px;
  width: 100%;
`;

export const SectionTitle = styled.div``;

export const CareerDurationContainer = styled(Horizontal)`
  height: 40px;
`;

export const CareerTotal = styled.div(() => ({
  width: '100%',
  paddingBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  borderBottom: `1px dashed ${lineBorderFill}`,
  position: 'relative',
  transform: 'translateY(-47%)',
}));

export const CareerCircleContainer = styled(Horizontal)`
  justify-content: space-between;
  position: relative;
  width: 100%;

  ::before {
    // 다음 자식 전
    content: '';
    background-color: ${lineBorderFill};
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    height: 2px;
    width: calc(100% - 40px);
  }
`;

export const Circle = styled.div<CircleProps>(({ isActive, size, descripton, relation }) => ({
  cursor: 'pointer',
  height: `${isActive ? size : 150}px`,
  width: `${isActive ? size : 150}px`,
  background: relation ? relationColor[relation] : '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1.5px solid',
  transition: 'all ease 0.4s 0s',
  borderColor: isActive ? lineBorderFill : lineBorderEmpty,
  borderRadius: '50%',
  position: 'relative',
  zIndex: 1,

  '::before': {
    content: descripton,
    top: `${0 + size / 2 + 120}px`,
    left: '0',
    textAlign: 'center',
    position: 'absolute',
    width: '220px',
    height: '50px',
    fontSize: '15px',
    fontWeight: '500',
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
  width: 100%;
`;

export const SkillBarWrapper = styled(Horizontal)`
  height: 42px;
  background-color: #fff;
  border: solid 2px ${GlobalColor.generalTone};
  border-radius: 5px;
  padding: 3px;
  width: 80%;
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
  transform: translateY(-150%);
`;

export const SkillElementImage = styled(Image)`
  object-fit: 'cover';
  object-position: 'center';
`;
