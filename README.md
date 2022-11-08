# Getting Started with Dropdown Menu

Module for generating a list of options of a selection from an array.

## Installation

Using npm :

`npm i @cecigiu2b/dropdown-menu-react`

## Required

- React
- TypeScript
- props options must be array type of string or array of object with a key "name"

## Style

You can style your component by adding a name class to customClass prop

## Exemple

In the project directory, you can run:

```
import { DropdownMenu } from '@cecigiu2b/dropdown-menu'

const departements = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },

  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
]

const Form = () => {
  return (
    <div>
      <form>
        <select name="departement" id="departement">
          {" "}
          <DropdownMenu options={departements} customClass="optionDepartement"/>
        </select>
        <select name="states" id="states">
          {" "}
          <DropdownMenu options={states} />
        </select>
      </form>
    </div>
  );
};
export default Form;

```

## Version history

- v1.5.4
  -Patch add tsconfig
- v1.5.3
  -Patch update browser
- v1.5.2
  -Patch Update babel and update key in component
- v1.5.0
  - Minor Update babel to TypeScript
- v1.4.8
  - Update babel
- v1.4.7
  - Delete webpack and update modern code
- v1.4.3
  - Add webpack config
- v1.4.2
  - Fix TypeScript, update browserslist
- v1.4.1
  - Fix TypeScript, fix types
- v1.4.0
  - Fix TypeScript, fix index.tsx, return JSX.ELEMENT
- v1.3.5
  - Fix TypeScript, fix index.tsx, return string
- v1.3.4
  - Fix TypeScript, fix index.tsx
- v1.3.3
  - Fix TypeScript, add a React option component
- v1.3.2
  - Fix TypeScript, add interfaces
- v1.3.0
  - Add TypeScript
- v1.2.1
  - Fix : add add react dependency
- v1.2.0
  - Feat : add style to option(s)
- v1.0.0
  - Version initiale
