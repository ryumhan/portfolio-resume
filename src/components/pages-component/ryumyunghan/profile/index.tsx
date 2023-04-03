import React from 'react';

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
}

const Profile = ({ name, email, comment }: Props): React.ReactElement => {
  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <ProfileImage src="/images/profile.jpeg" alt="profile_image.jpeg" fill />
      </ProfileImageContainer>
      <IntroductionBox>
        <IntroduceBox>{comment} </IntroduceBox>
        <EmailBox>{email}</EmailBox>
        <NameBox>{name}</NameBox>
      </IntroductionBox>
    </ProfileContainer>
  );
};

export default Profile;
