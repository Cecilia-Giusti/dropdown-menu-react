export interface DropdownMenuProps {
  name: string;
  options: Array<string | optionObjectInt>;
  customClassSelect?: string;
  customClassOption?: string;
}

export interface optionObjectInt {
  sort(
    arg0: (
      a: { name: string | number },
      b: { name: string | number }
    ) => 0 | 1 | -1
  ): unknown;
  name: string;
}
