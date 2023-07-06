import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import 'styled-components/macro';
import {
  IStyledButtonProps,
  IButtonProps,
  buttonColors,
  childrenColors,
} from './ButtonStyles';

const StyledButton = styled.button<IStyledButtonProps>(
  ({
    variant,
    disabled,
    borderWidth,
    borderColor,
    hoverBorderColor,
    maxWidth,
    paddingHorizontal,
    paddingVertical,
    letterSpacing,
  }) => [
    tw`
    flex
    justify-center
    items-center
    border-2
    transition
    duration-200
    w-full
    uppercase
    `,
    buttonColors(variant, disabled),
    childrenColors(variant, disabled),
    `
    border-width: ${borderWidth};
    border-color: ${borderColor};
    max-width: ${maxWidth};
    padding: ${paddingVertical} ${paddingHorizontal};
    letter-spacing:${letterSpacing};
    &:hover {
      border-color ${hoverBorderColor}
    }
    `,
  ],
);

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  disabled = false,
  borderWidth = '0',
  borderColor = '#201547',
  hoverBorderColor = '#201547',
  maxWidth = '11.75rem',
  paddingHorizontal = '0.875rem',
  paddingVertical = '0.875rem',
  letterSpacing = '0',
  onClick,
  children,
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      borderWidth={borderWidth}
      borderColor={borderColor}
      hoverBorderColor={hoverBorderColor}
      maxWidth={maxWidth}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      letterSpacing={letterSpacing}
      onClick={() => onClick?.()}>
      {children}
    </StyledButton>
  );
};

export default Button;
