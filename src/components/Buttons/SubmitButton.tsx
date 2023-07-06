import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import 'styled-components/macro';
import {
  IStyledButtonProps,
  buttonColors,
  ISubmitButtonProps,
} from './ButtonStyles';

const StyledButton = styled.button<IStyledButtonProps>(
  ({
    variant,
    disabled,
    borderWidth,
    borderColor,
    hoverBorderColor,
    width,
    maxWidth,
    paddingHorizontal,
    paddingVertical,
    fontWeight,
  }) => [
    tw`
    flex
    justify-center
    items-center
    border-2
    transition
    duration-200
    tracking-widest
    uppercase
    `,
    buttonColors(variant, disabled),
    `
    width: ${width};
    border-width: ${borderWidth};
    border-color: ${borderColor};
    max-width: ${maxWidth};
    font-weight: ${fontWeight};
    padding: ${paddingVertical} ${paddingHorizontal};
    &:hover {
      border-color ${hoverBorderColor}
    }
    `,
  ],
);

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  variant = 'primary',
  disabled = false,
  borderWidth = '0',
  borderColor = '#201547',
  hoverBorderColor = '#201547',
  width = '10rem',
  maxWidth = '11.75rem',
  paddingHorizontal = '0.875rem',
  paddingVertical = '0.875rem',
  value = 'submit',
  type = 'submit',
  fontWeight = 600,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      borderWidth={borderWidth}
      borderColor={borderColor}
      hoverBorderColor={hoverBorderColor}
      width={width}
      maxWidth={maxWidth}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      type={type}
      value={value}
      fontWeight={fontWeight}
      {...props}>
      {value}
    </StyledButton>
  );
};

export default SubmitButton;
