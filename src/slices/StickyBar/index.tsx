import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `StickyBar`.
 */
export type StickyBarProps = SliceComponentProps<Content.StickyBarSlice>;

/**
 * Component for "StickyBar" Slices.
 */
const StickyBar = ({ slice }: StickyBarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sticky_bar (variation: {slice.variation}) Slices
    </section>
  );
};

export default StickyBar;
