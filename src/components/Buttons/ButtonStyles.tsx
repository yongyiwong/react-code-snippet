import tw from 'twin.macro';
import 'styled-components/macro';

export interface IStyledButtonProps {
  variant?: 'primary' | 'secondary';
  borderWidth?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  width?: string;
  maxWidth?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;
  disabled?: boolean;
  letterSpacing?: string;
  fontWeight?: string | number;
}

export interface IButtonProps extends IStyledButtonProps {
  onClick?: () => void;
}

export interface ISubmitButtonProps extends IStyledButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  value: string;
}

const nonSecondaryStyle = tw`
    text-white
    bg-primaryPurple
    border-primaryPurple
    hover:bg-primaryBlue
    hover:border-primaryBlue
    cursor-pointer
  `;

const secondaryStyle = tw`
    text-primaryPurple
    bg-transparent
    border-primaryPurple
    cursor-pointer
    hover:bg-primaryPurple
    hover:text-primaryPurple
    hover:border-primaryPurple
  `;

const disabledAndNonSecondaryStyle = tw`
    text-white
    bg-neutralDarkGrey
    border-neutralDarkGrey
  `;

const disabledAndSecondaryStyle = tw`
    text-neutralDarkGrey
    bg-transparent
    border-neutralDarkGrey
  `;

export const buttonColors = (
  variant: IStyledButtonProps['variant'],
  disabled: IStyledButtonProps['disabled'],
) => {
  if (!disabled && variant !== 'secondary') return nonSecondaryStyle;
  if (!disabled && variant === 'secondary') return secondaryStyle;
  if (disabled && variant !== 'secondary') return disabledAndNonSecondaryStyle;
  if (disabled && variant === 'secondary') return disabledAndSecondaryStyle;
};

export const childrenColors = (
  variant: IStyledButtonProps['variant'],
  disabled: IStyledButtonProps['disabled'],
) => {
  let color: string = 'white';
  let hoverColor: string = 'white';
  if (!disabled && variant !== 'secondary') {
    [color, hoverColor] = ['white', 'white'];
  } else if (!disabled && variant === 'secondary') {
    [color, hoverColor] = ['#201547', 'white'];
  } else if (disabled && variant !== 'secondary') {
    [color, hoverColor] = ['white', 'white'];
  } else if (disabled && variant === 'secondary') {
    [color, hoverColor] = ['#A1A1A1', '#A1A1A1'];
  }
  return `
  > p, > svg {
    color: ${color};
    transition-duration: 0.3s;
  }
  :hover > p, :hover > svg {
    color: ${hoverColor};
  }
  :hover > div {
    filter: invert(1);
  }
  `;
};
