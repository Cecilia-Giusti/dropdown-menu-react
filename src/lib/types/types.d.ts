export interface DropdownMenuProps {
  name: string;
  options: Array<string | optionObjectInt>;
  customClassSelect?: string;
  customClassOption?: string;
}

export interface optionObjectInt {
  name: string;
}
