import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AboutDetails from "@/components/AboutDetails";


/**
 * Props for `AboutBlock`.
 */
export type AboutBlockProps = SliceComponentProps<Content.AboutBlockSlice>;

/**
 * Component for "AboutBlock" Slices.
 */
const AboutBlock = ({ slice }: AboutBlockProps): JSX.Element => {
  return (
    <>      
      <AboutDetails   
      title={slice.primary.title}
      description={slice.primary.description}
      countDetails={slice.items}/>
    </>
  );
};

export default AboutBlock;
