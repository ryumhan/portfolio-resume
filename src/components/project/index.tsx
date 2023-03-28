import { MutableRefObject } from 'react';
import { Container } from './style';

interface Props {
  proRef: MutableRefObject<HTMLDivElement | null>;
}

const Project = ({ proRef }: Props): React.ReactElement => {
  return <Container ref={proRef}>Project</Container>;
};

export default Project;
