import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Home.stories";

const { Success, Failure } = composeStories(stories);

test("success", async () => {
  const { container } = render(<Success />);
  // @ts-ignore
  await Success.play({ canvasElement: container });
});

test("failure", async () => {
  const { container } = render(<Failure />);
  // @ts-ignore
  await Failure.play({ canvasElement: container });
});
