import React, { useMemo } from 'react';
import { GlobalColor, PaddingContainer, TypoGraphy, Vertical } from '@/components/common-style';

import {
  ContactIconContainer,
  ContactImage,
  EmailBox,
  IntroduceBox,
  IntroductionBox,
  PhoneBox,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
} from './style';

interface Props {
  education: {};
  email: string;
  comment: string;
  phone: string;
}

const Profile = ({ education, email, comment, phone }: Props): React.ReactElement => {
  return (
    <ProfileContainer>
      <IntroduceBox>
        <TypoGraphy style={{ fontSize: '25px' }}>"{comment}"</TypoGraphy>
      </IntroduceBox>
      <ProfileImageContainer>
        <ProfileImage src="/images/profile.jpeg" alt="profile_image.jpeg" fill />
      </ProfileImageContainer>
      <IntroductionBox>
        <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.title }}>Contact</TypoGraphy>
        <PaddingContainer>
          <Vertical gap="12px">
            <PhoneBox gap="10px">
              <ContactIconContainer>
                <ContactImage src={'/images/phone.png'} fill alt={'/images/phone.png'}></ContactImage>
              </ContactIconContainer>
              <TypoGraphy style={{ fontSize: '22px', color: GlobalColor.title }}>{phone}</TypoGraphy>
            </PhoneBox>
            <EmailBox gap="10px">
              <ContactIconContainer>
                <ContactImage src={'/images/email.jpeg'} fill alt={'/images/email.jpeg'}></ContactImage>
              </ContactIconContainer>
              <TypoGraphy style={{ fontSize: '22px', color: GlobalColor.title }}>{email}</TypoGraphy>
            </EmailBox>
          </Vertical>
        </PaddingContainer>
      </IntroductionBox>
    </ProfileContainer>
  );
};

export default Profile;
