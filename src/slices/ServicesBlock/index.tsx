import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import OurServices from "@/components/OurServices";

/**
 * Props for `ServicesBlock`.
 */
export type ServicesBlockProps =
  SliceComponentProps<Content.ServicesBlockSlice>;

/**
 * Component for "ServicesBlock" Slices.
 */
const ServicesBlock = ({ slice }: ServicesBlockProps): JSX.Element => {
  return (
      <OurServices
          title={slice.primary.title}
          sub_title={slice.primary.sub_title}
          service_Image={slice.primary.image}
          services={slice.items}
          slice_variation={slice.variation}/>
  );
};

export default ServicesBlock;
