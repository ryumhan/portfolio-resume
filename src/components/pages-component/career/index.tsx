import { MutableRefObject } from 'react';
import { Container } from './style';

interface Props {
  carRef: MutableRefObject<HTMLDivElement | null>;
}

const Career = ({ carRef }: Props): React.ReactElement => {
  return <Container ref={carRef}>Career</Container>;
};

export default Career;
