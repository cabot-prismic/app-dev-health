import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import StoryBlockComponent from "@/components/StoryBlockComponent";
/**
 * Props for `StoryBlock`.
 */
export type StoryBlockProps = SliceComponentProps<Content.StoryBlockSlice>;

/**
 * Component for "StoryBlock" Slices.
 */
const StoryBlock = ({ slice }: StoryBlockProps): JSX.Element => {
  return (
    <StoryBlockComponent
    title={slice.primary.title}
    description={slice.primary.description}
    image={slice.primary.image}
    category={slice.primary.category}
    heading={slice.primary.heading}
    subheading={slice.primary.subheading}
    author={slice.primary.author}
    publish_label={slice.primary.publishlabel}
    author_image={slice.primary.authorimage}
    author_name={slice.primary.authorname}
    publish_date={slice.primary.publishdate}
    slice_variation={slice.variation}
    />  
  );
};

export default StoryBlock;
