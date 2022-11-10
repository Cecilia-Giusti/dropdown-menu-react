import { DropdownMenu, optionsSortOject } from "../lib";
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
    const selectTest2 = screen.getByTestId("nameTest2");
    const otpionsTest3 = screen.getByTestId("option3");
    const otpionsTest4 = screen.getByTestId("option4");

    test("Then a select element should be visible and it has a class", async () => {
      expect(selectTest2).toBeTruthy();
      expect(selectTest2).toHaveClass("customSelect");
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

describe("Given the component is add with an array and an object", () => {
  describe("When all required props are added", () => {
    const dropdownMenuMocked = {
      name: "nameTest3",
      options: [
        { name: "option5", value: 30 },
        { name: "option6", value: 50 },
      ],
    };
    render(
      <DropdownMenu
        name={dropdownMenuMocked.name}
        options={dropdownMenuMocked.options}
      />
    );

    const selectTest3 = screen.getByTestId("nameTest3");
    const otpionsTest5 = screen.getByTestId("option5");
    const otpionsTest6 = screen.getByTestId("option6");

    test("Then a select element should be visible", async () => {
      expect(selectTest3).toBeTruthy();
    });

    test("Then option elements should be added", async () => {
      expect(otpionsTest5).toBeTruthy();
      expect(otpionsTest6).toBeTruthy();

      expect(otpionsTest5).toHaveTextContent("option5");
      expect(otpionsTest5).not.toHaveTextContent("option6");

      expect(otpionsTest6).toHaveTextContent("option6");
      expect(otpionsTest6).not.toHaveTextContent("option5");
    });
  });

  describe("When all props are added", () => {
    const dropdownMenuMocked2 = {
      name: "nameTest4",
      options: [
        { name: "option7", value: 30 },
        { name: "option8", value: 50 },
      ],
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

    const selectTest4 = screen.getByTestId("nameTest4");
    const otpionsTest7 = screen.getByTestId("option7");
    const otpionsTest8 = screen.getByTestId("option8");

    test("Then the array has a name key should be sort", () => {
      const arraySort = dropdownMenuMocked2.options;
      const arrayNotSort = [
        { name: "option8", value: 50 },
        { name: "option7", value: 30 },
      ];

      const sortArray = optionsSortOject(arrayNotSort);

      expect(arraySort).toStrictEqual(sortArray);
    });

    test("Then the array has not a name key should be not sort", () => {
      const arraySort = dropdownMenuMocked2.options;
      const arrayNotSort = [
        { key: "option8", value: 50 },
        { key: "option7", value: 30 },
      ];

      const sortArray = optionsSortOject(arrayNotSort);

      expect(sortArray).not.toStrictEqual(arraySort);
    });

    test("Then a select element should be visible and it has a class", async () => {
      expect(selectTest4).toBeTruthy();
      expect(selectTest4).toHaveClass("customSelect");
    });

    test("Then a option elements should be visible and they have class", async () => {
      expect(otpionsTest7).toBeTruthy();
      expect(otpionsTest8).toBeTruthy();

      expect(otpionsTest7).not.toHaveClass("customSelect");
      expect(otpionsTest7).toHaveClass("customOptions");
      expect(otpionsTest8).not.toHaveClass("customSelect");
      expect(otpionsTest8).toHaveClass("customOptions");
    });
  });
});
