import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Blogs from "@/components/Blogs";

/**
 * Props for `BlogSection`.
 */
export type BlogSectionProps = SliceComponentProps<Content.BlogSectionSlice>;

/**
 * Component for "BlogSection" Slices.
 */
const BlogSection = ({ slice }: BlogSectionProps): JSX.Element => {
  return (
    <Blogs
      title={slice.primary.title}
      sub_title={slice.primary.sub_title}
      blogs={slice.items}
      slice_variation={slice.variation}
      />
  );
};

export default BlogSection;
