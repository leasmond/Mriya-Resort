import { ButtonStyle } from "../../../styles/globalStyledComponents";

const Button = ({
  children,
  width,
  maxWidth,
  minWidth,
  minHeight,
  height,
  border,
  borderRadius,
  background,
  outline,
  mr,
  ml,
  mb,
  mbM,
  mt,
  mM,
}) => {
  return (
    <ButtonStyle
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      border={border}
      borderRadius={borderRadius}
      background={background}
      outline={outline}
      m={mM}
      mr={mr}
      ml={ml}
      mb={mb}
      mbM={mbM}
      mt={mt}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
