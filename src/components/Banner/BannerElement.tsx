import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Text } from 'styles';
import { toUpper } from 'lodash';
import { CustomLink, ExternalLink, StyledLinkType } from 'components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LoaderFull } from 'components/Loaders/BannerLoader/LoaderFull';
import { LoaderNoDescription } from 'components/Loaders/BannerLoader/LoaderNoDescription';
import { LoaderNoTitleDescription } from 'components/Loaders/BannerLoader/LoaderNoTitleDescription';
import { BannerType } from 'pages/dashboard';
import { DashboardLinkButton } from 'components/shared/CommonWrappers';
import { deviceSize } from 'components/shared/types';
import { useMediaQuery } from 'react-responsive';

interface IBannerProps {
  banner: BannerType;
  updateMeLoaded: (imageLoaded: boolean) => void;
}

const BannerWrapper = styled.div`
  ${tw`
    relative
    w-full
    sm:h-full
  `}
`;
export const BannerImageWrapper = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    w-full relative
  `};
  img {
    ${tw`
      object-cover
      h-[23.9375rem] md:h-[31.25rem] lg:h-[31.875rem]
    `}
  }
  &:after {
    content: '';
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.48) 0%,
      rgba(0, 0, 0, 0) 144.47%
    );
    ${tw`
      absolute w-full h-full top-0 left-0
    `}
  }
`;

const BannerContentWrapper = styled.div`
  ${tw`
    w-full px-6 md:px-12 text-white absolute bottom-20 md:bottom-28 lg:bottom-32 text-left
  `}
`;
const H1 = styled(Text.H1)`
  font-weight: 400;
  margin-bottom: 0.6rem;
  @media only screen and (max-width: 767px) {
    font-size: 1.625rem;
    line-height: 1.5rem;
  }
`;
const H6 = styled(Text.H6)`
  letter-spacing: 0.02em;
  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
  }
  ${tw`
    font-SohneBuch
  `}
`;

const LearnMoreWrapper = tw.div`mt-5 md:mt-6 lg:mt-8`;

const linkStyle: StyledLinkType = {
  borderWidth: '1px',
  borderColor: 'white',
  paddingVertical: '0.8rem',
  paddingHorizontal: '2rem',
};

const BannerContent: React.FC<{ banner: BannerType }> = ({ banner }) => {
  return (
    <DashboardLinkButton color="white">
      {toUpper(banner.ctaText)}
    </DashboardLinkButton>
  );
};

export const BannerElement: React.FC<IBannerProps> = ({
  banner,
  updateMeLoaded,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({
    minWidth: deviceSize.mobile + 1,
    maxWidth: deviceSize.tablet,
  });

  return (
    <BannerWrapper>
      <BannerImageWrapper>
        <LazyLoadImage
          width="100%"
          src={
            isMobile
              ? banner.mobileImageUrl
              : isTablet
              ? banner.tabletImageUrl
              : banner.imageUrl
          }
          alt={banner.title}
          afterLoad={() => {
            updateMeLoaded(true);
            setImageLoaded(true);
          }}
        />
      </BannerImageWrapper>
      {imageLoaded && (
        <BannerContentWrapper>
          <H1 color="white">{banner.title}</H1>
          <H6 color="white">{banner.body}</H6>
          {banner.ctaLink && banner.ctaText && (
            <LearnMoreWrapper>
              {banner.ctaLinkExternal ? (
                <ExternalLink
                  to={banner.ctaLink}
                  visibleIcon={false}
                  {...linkStyle}
                  color="#201547"
                  justifyContent="center"
                  borderWidth="0.15rem"
                  hoverBorderColor="white">
                  <BannerContent banner={banner} />
                </ExternalLink>
              ) : (
                <CustomLink
                  to={banner.ctaLink}
                  {...linkStyle}
                  color="#201547"
                  hoverBorderColor="white">
                  <BannerContent banner={banner} />
                </CustomLink>
              )}
            </LearnMoreWrapper>
          )}
        </BannerContentWrapper>
      )}
      {!imageLoaded && (
        <>
          {banner.title && banner.body && <LoaderFull />}
          {banner.title && !banner.body && <LoaderNoDescription />}
          {!banner.title && !banner.body && <LoaderNoTitleDescription />}
        </>
      )}
    </BannerWrapper>
  );
};
