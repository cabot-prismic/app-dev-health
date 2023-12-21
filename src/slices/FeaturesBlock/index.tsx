import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Features from "@/components/Features";

/**
 * Props for `FeaturesBlock`.
 */
export type FeaturesBlockProps =
  SliceComponentProps<Content.FeaturesBlockSlice>;

/**
 * Component for "FeaturesBlock" Slices.
 */
const FeaturesBlock = ({ slice }: FeaturesBlockProps): JSX.Element => {
  return (
    <Features
      title={slice.primary.title}
      sub_title={slice.primary.sub_title}
      features={slice.items} 
      backgroundColor={slice.primary.block_background}/>
  );
};

export default FeaturesBlock;
