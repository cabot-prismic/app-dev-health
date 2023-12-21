import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import KeepInTouch from "@/components/KeepInTouch";

/**
 * Props for `BlockonImage`.
 */
export type BlockonImageProps = SliceComponentProps<Content.BlockonImageSlice>;

/**
 * Component for "BlockonImage" Slices.
 */
const BlockonImage = ({ slice }: BlockonImageProps): JSX.Element => {
  return (
    <KeepInTouch
    title={slice.primary.title}
    description={slice.primary.description}
    image={slice.primary.image}
    keepInTouch={slice.items}
    />
  );
};

export default BlockonImage;