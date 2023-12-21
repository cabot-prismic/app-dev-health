import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Overview from "@/components/Overview";
import StickyBar from "@/components/StickyBar";

/**
 * Props for `FeatureSection`.
 */
export type FeatureSectionProps =
  SliceComponentProps<Content.FeatureSectionSlice>;

/**
 * Component for "FeatureSection" Slices.
 */
const FeatureSection = ({ slice }: FeatureSectionProps): JSX.Element => {
  return (
    <>
    <StickyBar />
    <Overview
        title={slice.primary.title}
        description={slice.primary.description}
        featureImage={slice.primary.feature_image} />
    
    </>
    
  );
};

export default FeatureSection;
