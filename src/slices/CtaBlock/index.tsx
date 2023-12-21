import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CtaComponent from "@/components/CtaComponent";

/**
 * Props for `CtaBlock`.
 */
export type CtaBlockProps = SliceComponentProps<Content.CtaBlockSlice>;

/**
 * Component for "CtaBlock" Slices.
 */
const CtaBlock = ({ slice }: CtaBlockProps): JSX.Element => {
  return (
    <CtaComponent
      title={slice.primary.title}
      sub_title={slice.primary.sub_title}
      image={slice.primary.image} />
  );
};

export default CtaBlock;
