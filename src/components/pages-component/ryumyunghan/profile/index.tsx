import React from 'react';
import { TypoGraphy } from '@/components/common-style';

import {
  EmailBox,
  IntroduceBox,
  IntroductionBox,
  NameBox,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
} from './style';

interface Props {
  name: string;
  email: string;
  comment: string;
  hobby: string;
}

const Profile = ({ name, email, comment, hobby }: Props): React.ReactElement => {
  return (
    <ProfileContainer>
      <IntroduceBox>
        <TypoGraphy style={{ fontSize: '25px' }}>"{comment}"</TypoGraphy>
      </IntroduceBox>
      <ProfileImageContainer>
        <ProfileImage src="/images/profile.jpeg" alt="profile_image.jpeg" fill />
      </ProfileImageContainer>
      <IntroductionBox>
        <NameBox>
          <TypoGraphy style={{ fontSize: '25px' }}>{name}</TypoGraphy>
        </NameBox>
        <NameBox>
          <TypoGraphy style={{ fontSize: '25px' }}>{hobby}</TypoGraphy>
        </NameBox>
        <EmailBox>
          <TypoGraphy style={{ fontSize: '25px' }}>{email}</TypoGraphy>
        </EmailBox>
      </IntroductionBox>
    </ProfileContainer>
  );
};

export default Profile;
