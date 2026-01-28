import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";

test("Page", async () => {
  render(<PageHeader />);

  const heading = await screen.findByRole("heading", {
    level: 1,
    name: "Eloise's Garden",
  });

  expect(heading).toBeInTheDocument();
});
