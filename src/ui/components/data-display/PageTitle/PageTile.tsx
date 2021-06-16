import React from "react";

import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";
interface PagetitleProps {
  title: string;
  subtitle: string;
}
const PageTitle: React.FC<PagetitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled> {props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle} </PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
