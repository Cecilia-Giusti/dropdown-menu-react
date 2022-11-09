import { DropdownMenu } from "../lib";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Given the component is add with an array and string", () => {
  describe("When all required props are added", () => {
    const dropdownMenuMocked = {
      name: "nameTest",
      options: ["option1", "option2"],
    };
    render(
      <DropdownMenu
        name={dropdownMenuMocked.name}
        options={dropdownMenuMocked.options}
      />
    );

    const selectTest = screen.getByTestId("nameTest");
    const otpionsTest1 = screen.getByTestId("option1");
    const otpionsTest2 = screen.getByTestId("option2");

    test("Then a select element should be visible", async () => {
      expect(selectTest).toBeTruthy();
    });

    test("Then option elements should be added", async () => {
      expect(otpionsTest1).toBeTruthy();
      expect(otpionsTest2).toBeTruthy();

      expect(otpionsTest1).toHaveTextContent("option1");
      expect(otpionsTest1).not.toHaveTextContent("option2");

      expect(otpionsTest2).toHaveTextContent("option2");
      expect(otpionsTest2).not.toHaveTextContent("option1");
    });
  });
  describe("When all props are added", () => {
    const dropdownMenuMocked2 = {
      name: "nameTest2",
      options: ["option3", "option4"],
      customClassSelect: "customSelect",
      customClassOptions: "customOptions",
    };

    render(
      <DropdownMenu
        name={dropdownMenuMocked2.name}
        options={dropdownMenuMocked2.options}
        customClassSelect={dropdownMenuMocked2.customClassSelect}
        customClassOption={dropdownMenuMocked2.customClassOptions}
      />
    );
    const selectTest = screen.getByTestId("nameTest2");
    const otpionsTest3 = screen.getByTestId("option3");
    const otpionsTest4 = screen.getByTestId("option4");

    test("Then a select element should be visible and it has a class", async () => {
      expect(selectTest).toBeTruthy();
      expect(selectTest).toHaveClass("customSelect");
    });

    test("Then a option elements should be visible and they have class", async () => {
      expect(otpionsTest3).toBeTruthy();
      expect(otpionsTest4).toBeTruthy();

      expect(otpionsTest3).not.toHaveClass("customSelect");
      expect(otpionsTest3).toHaveClass("customOptions");
      expect(otpionsTest4).not.toHaveClass("customSelect");
      expect(otpionsTest4).toHaveClass("customOptions");
    });
  });
});
