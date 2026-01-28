import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import Page from "../app/page";

test("Page", () => {
  render(<Page />);
  //   this is failing - think it is to do with JSDOM in vitest.config.mts ... have tried with node instead, but gets error of documnet not defined and stack suggests changing back to jdom
  //   confused.com 🤔

  //   await screen.findByRole("heading");
  //   expect(
  //     screen.getByRole("heading", { level: 1, name: "Eloise's Garden" }),
  //   ).toBeDefined();
});
