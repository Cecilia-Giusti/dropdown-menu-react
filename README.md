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
