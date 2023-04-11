import React, { useState } from 'react';
import { GlobalColor, PaddingContainer, TypoGraphy, Vertical } from '@/components/common-style';

import {
  AppealBox,
  HoverBoxTitle,
  AppealContainer,
  ContactIconContainer,
  ContactImage,
  Container,
  EducationContainer,
  EmailBox,
  IntroduceBox,
  IntroductionBox,
  PhoneBox,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
  EducationBox,
} from './style';
import { Introduce } from '@/model/introduce';

interface Props {
  introduce: Introduce;
}

const Profile = ({ introduce }: Props): React.ReactElement => {
  const { appeal, email, comment, phone, education } = introduce;
  const [onhover, setOnHover] = useState(false);

  return (
    <Container>
      {/* left */}
      <EducationContainer style={{ visibility: onhover ? 'visible' : 'hidden', marginTop: '320px' }}>
        <HoverBoxTitle>
          <TypoGraphy style={{ fontSize: '24px' }}>Education..?</TypoGraphy>
        </HoverBoxTitle>
        <EducationBox>
          {education.map((item, index) => {
            return (
              <Vertical key={item.location + index}>
                <TypoGraphy style={{ fontSize: '22px', color: GlobalColor.contentsTone }}>
                  {item.location}
                </TypoGraphy>
                <TypoGraphy style={{ fontSize: '22px', color: GlobalColor.contentsTone }}>
                  {item.duration[0]} ~ {item.duration[1]}
                </TypoGraphy>
              </Vertical>
            );
          })}
        </EducationBox>
      </EducationContainer>

      {/* center */}
      <ProfileContainer>
        <IntroduceBox>
          <TypoGraphy style={{ fontSize: '24px' }}>"{comment}"</TypoGraphy>
        </IntroduceBox>

        {/* <IntroduceBox></IntroduceBox> */}
        <ProfileImageContainer onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
          <ProfileImage src="/images/profile.jpeg" alt="profile_image.jpeg" fill />
        </ProfileImageContainer>

        <IntroductionBox>
          <TypoGraphy style={{ fontSize: '24px', color: GlobalColor.title }}>Contact</TypoGraphy>
          <PaddingContainer>
            <Vertical gap="12px">
              <PhoneBox gap="10px">
                <ContactIconContainer>
                  <ContactImage src="/images/phone.png" fill alt="/images/phone.png" />
                </ContactIconContainer>
                <TypoGraphy style={{ fontSize: '22px', color: GlobalColor.contentsTone }}>{phone}</TypoGraphy>
              </PhoneBox>
              <EmailBox gap="10px">
                <ContactIconContainer>
                  <ContactImage src="/images/email.jpeg" fill alt="/images/email.jpeg" />
                </ContactIconContainer>
                <TypoGraphy style={{ fontSize: '22px', color: GlobalColor.contentsTone }}>{email}</TypoGraphy>
              </EmailBox>
            </Vertical>
          </PaddingContainer>
        </IntroductionBox>
      </ProfileContainer>

      {/* right */}
      <AppealContainer style={{ visibility: onhover ? 'visible' : 'hidden' }} gap="50px">
        <HoverBoxTitle>
          <TypoGraphy style={{ fontSize: '24px' }}>About me..?</TypoGraphy>
        </HoverBoxTitle>
        <AppealBox>
          {appeal.map((item, index) => {
            return (
              <TypoGraphy key={item[0] + index} style={{ fontSize: '22px', color: GlobalColor.contentsTone }}>
                "{item}"
              </TypoGraphy>
            );
          })}
        </AppealBox>
      </AppealContainer>
    </Container>
  );
};

export default Profile;
