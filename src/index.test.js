import React from "react";
import { render, screen } from "@testing-library/react";
import { Component } from ".";

test("Hi!", () => {
  render(<Component />);

  expect(screen.getByText("Hi!")).toBeVisible();
  expect(screen.getByText("Bye!")).toBeVisible();
});
