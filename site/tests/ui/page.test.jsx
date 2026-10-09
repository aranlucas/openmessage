import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import HomePage from "../../app/page";

test("home page renders its primary heading", () => {
  render(<HomePage />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /google messages, whatsapp, and signal in one local inbox/i,
    }),
  ).toBeDefined();
});
