import React from "react";
import { StyledSkeleton } from "./Skeleton.styled";

export interface SkeletonProps
  extends React.ComponentPropsWithoutRef<"div"> {
  height?: number | string;
  width?: number | string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { width, height, className, ...rest } = props;

  return <StyledSkeleton id="skeleton-mashov" data-testid="skeleton-mashov" {...props} {...rest} />;
};

export default Skeleton;
