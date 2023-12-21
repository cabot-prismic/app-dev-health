import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeroComponent from "@/components/HeroComponent";


/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <>
    <HeroComponent
        mainTitle={slice.primary.title}
        subTitle={slice.primary.sub_title}
        menuTitle={slice.primary.menu}
        bannerImage={slice.primary.hero_image} 
        slice_variation={slice.variation} />    
    </>
  );
};

export default HeroSection;
