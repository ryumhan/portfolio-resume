import styled from '@emotion/styled';
import { Horizontal } from '@/components/common-style';

const lineBorderFill = '#3498db';
const lineBorderEmpty = '#e0e0e0';

interface CircleProps {
  isActive: boolean;
  size: number;
  descripton: string;
}

export const CareerCircleContainer = styled(Horizontal)`
  justify-content: space-between;
  position: relative;
  height: 500px;

  ::before {
    // 다음 자식 전
    content: '';
    background-color: ${lineBorderFill};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
  }
`;

export const Circle = styled.div<CircleProps>(({ isActive, size, descripton }) => ({
  background: '#fff',
  color: '#999',
  borderRadius: '50%',
  height: `${isActive ? size : 150}px`,
  width: `${isActive ? size : 150}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px solid',
  transition: 'all ease 0.4s 0s',
  borderColor: isActive ? lineBorderFill : lineBorderEmpty,
  zIndex: 1,
  position: 'relative',

  '::before': {
    content: descripton,
    top: `${0 + size / 2 + 150}px`,
    left: '0',
    position: 'absolute',
    width: '100px',
  },
}));
