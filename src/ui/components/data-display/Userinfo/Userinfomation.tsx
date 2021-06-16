import React from "react";
import {
  UserinfoContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingSyled,
} from "./Userinfomation.style";
interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}
const Userinformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserinfoContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingSyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserinfoContainer>
  );
};

export default Userinformation;
