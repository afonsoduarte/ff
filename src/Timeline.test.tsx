import "@testing-library/jest-dom/extend-expect";
import { Timeline } from "./Timeline";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { log } from "./data";

it("Should render timeline without blowing up", () => {
  render(<Timeline log={log} />);
  expect(screen.getByText("Timeline")).toBeInTheDocument();
});

it("Should group events by day (all events from 25 May 2021 should show up under the same header)", () => {});

it("Should collapse day events when section is clicked", () => {});
