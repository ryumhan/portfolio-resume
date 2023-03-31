import styled from '@emotion/styled';
import { Vertical } from '../common-style';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  scroll-snap-align: start; /* 자식 적용 */
`;

export const LeftHalfContainer = styled(Vertical)`
  width: 35%;
  height: 100%;
  padding: 12px;
  background: gray;
`;

export const RightHalfContainer = styled(Vertical)`
  width: 65%;
  height: 100%;
  padding: 50px;
  background: #fff;
`;
