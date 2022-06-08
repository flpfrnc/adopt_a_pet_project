import { MainTitle, SubTitle } from "./Title.style";

interface TitleProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
}


const Title = (props:TitleProps) => {
  return (
    <>
      <MainTitle>{props.title}</MainTitle>
      <SubTitle>{props.subtitle}</SubTitle>
    </>
  );
};

export default Title;
