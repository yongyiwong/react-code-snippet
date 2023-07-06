import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Text } from 'styles';

interface IStyledButtonTextProps {
  color?: string;
  hoverColor?: string;
  disabled?: boolean;
}

interface IButtonTextProps extends IStyledButtonTextProps {
  label?: string;
  onClick: () => void;
}

const StyledButtonText = styled.button<IStyledButtonTextProps>(
  ({ color, hoverColor, disabled }) => [
    tw`
  underline
  transition
  duration-300
  `,
    color
      ? `
    > p {
      color: ${color};
      transition-duration: 0.3s;
    }
  `
      : '',
    hoverColor
      ? `
        &:hover >p {
          color: ${hoverColor};
        }
      `
      : '',
    disabled
      ? tw`text-neutralDarkGrey hover:text-neutralDarkGrey`
      : tw`text-primaryPurple hover:text-primaryBlue`,
  ],
);

const ButtonText: React.FC<IButtonTextProps> = ({
  label,
  color,
  hoverColor,
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButtonText
      disabled={disabled}
      color={color}
      hoverColor={hoverColor}
      onClick={onClick}>
      {children || <Text.SmallBold>{label}</Text.SmallBold>}
    </StyledButtonText>
  );
};

export default ButtonText;
