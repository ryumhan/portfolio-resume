import { MutableRefObject } from 'react';
import { Container } from './style';

interface Props {
  ryuRef: MutableRefObject<HTMLDivElement | null>;
}

const RyuMyungHan = ({ ryuRef }: Props): React.ReactElement => {
  return <Container ref={ryuRef}>RyuMyungHan</Container>;
};

export default RyuMyungHan;
