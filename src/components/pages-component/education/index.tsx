import { MutableRefObject } from 'react';
import { Container } from './style';

interface Props {
  eduRef: MutableRefObject<HTMLDivElement | null>;
}

const Education = ({ eduRef }: Props): React.ReactElement => {
  return <Container ref={eduRef}>Education</Container>;
};

export default Education;
