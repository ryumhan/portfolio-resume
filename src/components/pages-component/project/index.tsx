import { MutableRefObject } from 'react';
import { PROJECT_CONFIG } from '@/constants';
import PortFolioStore from './port-folio-store';
import { Container } from './style';

interface Props {
  proRef: MutableRefObject<HTMLDivElement | null>;
}

const Project = ({ proRef }: Props): React.ReactElement => {
  return (
    <Container ref={proRef}>
      <PortFolioStore projects={PROJECT_CONFIG} />
    </Container>
  );
};

export default Project;
