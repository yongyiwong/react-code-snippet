import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BannerElement } from './BannerElement';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../scss/custom.banner.scss';
import { useDashboardService } from 'pages/dashboard';
import { LoaderFull } from 'components/Loaders/BannerLoader/LoaderFull';

const BannerWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    relative
  `}
`;
const PageIndicator = styled.div`
  top: 85.5%;
  @media only screen and (max-width: 800px) {
    top: 87%;
  }
  ${tw`
    flex absolute text-white text-sm px-6 md:px-12 items-center -translate-y-1/2
  `}
`;
const Line = styled.span`
  ${tw`
    w-4 h-0.5 m-2 mt-2 bg-white
  `}
`;
const EmptyLoaderWrapper = styled.div`
  ${tw`
    relative
    w-full
    max-h-[445px]
    overflow-hidden
  `}
`;
const EmptyLoaderInnerWrapper = styled.div`
  padding-top: 36.5%;
  @media only screen and (max-width: 800px) {
    padding-top: 80%;
  }
  ${tw`
    w-full
  `}
`;
export function Banner() {
  const { data } = useDashboardService();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  return (
    <BannerWrapper>
      {(!data || !imageLoaded) && (
        <EmptyLoaderWrapper>
          <EmptyLoaderInnerWrapper>
            <LoaderFull />
          </EmptyLoaderInnerWrapper>
        </EmptyLoaderWrapper>
      )}
      {data && data.banners && (
        <Carousel
          dynamicHeight={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          onChange={setCurrentIndex}>
          {data?.banners?.map((b, index) => (
            <BannerElement
              key={`banner_${index}`}
              banner={b}
              updateMeLoaded={setImageLoaded}
            />
          ))}
        </Carousel>
      )}
      {data && (
        <PageIndicator>
          {currentIndex + 1}
          <Line />
          {data?.banners?.length}
        </PageIndicator>
      )}
    </BannerWrapper>
  );
}
