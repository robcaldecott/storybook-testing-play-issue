import { Meta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";

export default {
  title: "Home",
  component: Home,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/", "/story"]} initialIndex={1}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Home</h1>
                <Link to="/story">Story</Link>
              </>
            }
          />
          <Route path="/story" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Success = Template.bind({});
Success.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("link", { name: /home/i }));
  await canvas.findByRole("heading", { name: /home/i, level: 1 });
};

export const Failure = Template.bind({});
Failure.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("link", { name: /home/i }));
  await canvas.findByRole("heading", { name: /not found/i, level: 1 });
};
