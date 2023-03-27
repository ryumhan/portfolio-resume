import styled from '@emotion/styled';
import { Horizontal, Vertical } from '@/components/common-style';

export const LayOutContainer = styled(Vertical)`
  height: 100%;
  padding: 15px;
`;

export const NavMenu = styled(Horizontal)`
  gap: 50px;
  height: 50px;
  justify-content: end;
`;

export const NavItem = styled.div`
  cursor: pointer;
`;
