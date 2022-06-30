import styled, {keyframes} from "styled-components";
import { SkeletonProps } from "./Skeleton";

export const skeletonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  
  50% {
    opacity: 0.4;
  }
  
  100% {
    opacity: 1;
  }
`;

export const StyledSkeleton = styled.div<SkeletonProps>`
  background: hsla(0, 0%, 92%, 1);
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  animation: 1.5s linear infinite alternate ${skeletonAnimation};
`;
