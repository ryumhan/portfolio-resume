import styled from '@emotion/styled';
import Image from 'next/image';
import { GlobalColor, Horizontal, Vertical } from '@/components/common-style';

export const Container = styled(Horizontal)`
  height: 100%;
`;

export const ProfileContainer = styled(Vertical)`
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: 33%;
`;

export const EducationContainer = styled(Vertical)`
  width: 33%;
  transition: 0.4s;
  align-items: end;
`;

export const AppealContainer = styled(Vertical)`
  width: 33%;
  transition: 0.4s;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  cursor: pointer;
  transition: ease 0.2s;

  &:hover {
    background-color: skyblue;
    width: 460px;
    height: 460px;
    border-radius: 50%;
  }
`;

export const ProfileImage = styled(Image)`
  object-fit: 'cover';
  object-position: 'center';
  filter: opacity(0.6) drop-shadow(0 0 0 #828282);
  &:hover {
    opacity: 1;
  }
`;

export const IntroductionBox = styled(Vertical)`
  gap: 6px;
`;

export const NameBox = styled.div``;

export const EmailBox = styled(Horizontal)``;

export const PhoneBox = styled(Horizontal)``;

export const IntroduceBox = styled(Vertical)`
  text-align: center;
`;

export const EducationBox = styled(Vertical)`
  line-height: 1.5;
  gap: 30px;
  width: 500px;
  margin-top: 40px;
`;

export const HoverBoxTitle = styled.div`
  text-align: center;
  line-height: 2;
  width: 150px;
  padding-bottom: 2px;
  border-bottom: solid;
  border-color: ${GlobalColor.contentsTone};
  border-width: 2px;
`;

export const AppealBox = styled(Vertical)`
  text-align: center;
  line-height: 2;
  gap: 50px;
  width: 500px;
  margin-left: 100px;
`;

export const ContactIconContainer = styled.div`
  position: relative;
  width: 24px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ContactImage = styled(Image)`
  object-fit: 'cover';
  object-position: 'center';
`;
