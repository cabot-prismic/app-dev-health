import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Faq from "@/components/Faq";
/**
 * Props for `FaqSection`.
 */
export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

/**
 * Component for "FaqSection" Slices.
 */
const FaqSection = ({ slice }: FaqSectionProps): JSX.Element => {
  return (
    <Faq
    title={slice.primary.title}
    sub_title={slice.primary.subtitle}
    qa={slice.items}
    />
  );
};

export default FaqSection;
