import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from '@emotion/react';
import { Text } from 'styles';
import { MoonLoader } from 'react-spinners';

interface IStyledLargeButtonProps {
  maxWidth?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
}

interface ILargeButtonProps extends IStyledLargeButtonProps {
  label: string;
  description: string;
  onClick: () => void;
}

const StyledLargeButton = styled.button<IStyledLargeButtonProps>(
  ({ maxWidth, variant, disabled }) => [
    tw`
    flex
    flex-col
    justify-center
    items-center
    py-8
    px-10
    sm:px-14
    border
    border-primaryPurple
    hover:border-primaryBlue
    transition
    duration-200
    hover:bg-primaryPurple
    w-full`,
    `
    max-width: ${maxWidth};
    &:hover > p {
      color: white;
    }
    `,
    variant === 'primary'
      ? tw`bg-primaryPurple hover:bg-primaryBlue`
      : tw`bg-transparent`,
    disabled ? tw`opacity-50 hover:bg-primaryPurple` : tw``,
    disabled
      ? `
    > p {
      color: white;
    }
    `
      : '',
  ],
);

const ButtonLabel = styled(Text.NormalBold)`
  ${tw`
    tracking-widest
    sm:mb-1
  `}
`;

const Content = styled.div<{ loading: boolean }>(({ loading }) => [
  loading ? tw`invisible` : tw``,
]);

const Loader = styled.div<{ loading: boolean }>(({ loading }) => [
  tw`absolute`,
  loading ? tw`` : tw`invisible`,
]);

const override = css`
  display: flex;
`;

const LargeButton: React.FC<ILargeButtonProps> = ({
  label,
  description,
  maxWidth = '22.875rem',
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
}) => {
  const textColor = variant === 'primary' ? 'white' : '#201547';
  return (
    <StyledLargeButton
      maxWidth={maxWidth}
      variant={variant}
      disabled={disabled}
      onClick={onClick}>
      <Content loading={loading}>
        <ButtonLabel color={textColor} textAlign="center">
          {label}
        </ButtonLabel>
        <Text.Small color={textColor} textAlign="center">
          {description}
        </Text.Small>
      </Content>
      <Loader loading={loading}>
        <MoonLoader
          css={override}
          color="white"
          loading
          size={28}
          speedMultiplier={0.8}
        />
      </Loader>
    </StyledLargeButton>
  );
};

export default LargeButton;
