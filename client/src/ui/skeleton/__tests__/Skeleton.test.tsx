import { render, screen } from "@testing-library/react";
import Skeleton from "../Skeleton";

describe("Skeleton", () => {
  it("renders correctly", () => {
    render(<Skeleton width="50" height="50" />);
    expect(screen.getByTestId("skeleton-mashov")).toBeInTheDocument();
  });

  it("should have width and height as passed in props", () => {
    render(<Skeleton width="50px" height="50px" />);
    expect(screen.getByTestId("skeleton-mashov")).toHaveStyle("width: 50px");
    expect(screen.getByTestId("skeleton-mashov")).toHaveStyle("height: 50px");
  });

  it('should have 100% width and height if no height and width props passed', () => {
    render(<Skeleton />);
    expect(screen.getByTestId("skeleton-mashov")).toHaveStyle("width: 100%");
    expect(screen.getByTestId("skeleton-mashov")).toHaveStyle("height: 100%");
  })
});
