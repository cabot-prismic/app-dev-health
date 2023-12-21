import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SolutionsComponent from "@/components/SolutionsComponent";

/**
 * Props for `SolutionsBlock`.
 */
export type SolutionsBlockProps =
  SliceComponentProps<Content.SolutionsBlockSlice>;

/**
 * Component for "SolutionsBlock" Slices.
 */
const SolutionsBlock = ({ slice }: SolutionsBlockProps): JSX.Element => {
  return (
    <SolutionsComponent 
      title={slice.primary.title}
      sub_title={slice.primary.sub_title}
      primary_solution={slice.primary.primary_solution}
      primary_solution_description={slice.primary.primary_solution_description}
      primary_solution_link={slice.primary.primary_solution_link}
      primary_solution_image={slice.primary.image}
      solutions={slice.items}
    />
  );
};

export default SolutionsBlock;
