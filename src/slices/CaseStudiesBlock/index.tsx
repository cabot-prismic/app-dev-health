import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CaseStudies from "@/components/CaseStudies";

/**
 * Props for `CaseStudiesBlock`.
 */
export type CaseStudiesBlockProps =
  SliceComponentProps<Content.CaseStudiesBlockSlice>;

/**
 * Component for "CaseStudiesBlock" Slices.
 */
const CaseStudiesBlock = ({ slice }: CaseStudiesBlockProps): JSX.Element => {
  return (
    <CaseStudies
      title={slice.primary.title}
      sub_title={slice.primary.sub_title}
      view_all_link={slice.primary.view_all_link}
      studies={slice.items} />
  );
};

export default CaseStudiesBlock;
