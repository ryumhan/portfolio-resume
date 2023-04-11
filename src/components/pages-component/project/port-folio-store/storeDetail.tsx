import { Vertical, TypoGraphy, GlobalColor } from '@/components/common-style';

import { Project } from '@/model/project';
import { StoreDetailContainer, DetailTitle } from './style';
import EtcProjectDetailContents from './etcProjectDetailContents';
import ProjectDetailContents from './projectDetailContents';

interface Props {
  selected: Project;
}

const StoreDetail = ({ selected }: Props): React.ReactElement => {
  return (
    <StoreDetailContainer justifyContent="space-between" style={{ width: '100%' }}>
      <Vertical style={{ width: '100%', height: '100%' }}>
        <DetailTitle>
          <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.contentsTone }}>
            {selected.title}
          </TypoGraphy>
          <TypoGraphy style={{ fontSize: '20px', color: GlobalColor.contentsTone }}>
            {selected.url ? `(${selected.url})` : ''}
          </TypoGraphy>
        </DetailTitle>

        {selected.type === '기타' ? (
          <EtcProjectDetailContents selected={selected} />
        ) : (
          <ProjectDetailContents selected={selected} />
        )}
      </Vertical>
    </StoreDetailContainer>
  );
};

export default StoreDetail;
