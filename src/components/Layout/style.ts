import styled from '@emotion/styled';
import { GlobalColor, Horizontal, Vertical } from '@/components/common-style';

export const LayOutContainer = styled(Vertical)`
  height: 100%;
  padding: 20px 50px;
  color: ${GlobalColor.title};
`;

export const NavMenu = styled(Horizontal)`
  gap: 50px;
  height: 50px;
  justify-content: end;
`;

export const NavItem = styled.div`
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: ${GlobalColor.lightTone};
    border-radius: 10%;
  }
`;
