import Image from 'next/image';
import React from 'react';
import {
  EmailBox,
  IntroduceBox,
  IntroductionBox,
  NameBox,
  ProfileContainer,
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
        <Image
          src="/images/profile.jpeg"
          alt="사진"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
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
