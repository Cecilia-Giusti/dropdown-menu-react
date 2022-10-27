# Getting Started with Dropdown Menu

Module for generating a list of options of a selection from an array.

## Installation

Using npm :

`npm i @cecigiu2b/drowpdown-menu`

## Required

- React
- props options must be array type of string or array of object with a key "name"

## Exemple

In the project directory, you can run:

```
import { DropdownMenu } from '@cecigiu2b/drowpdown-menu'

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
          <DropdownMenu options={departements} />
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

- v1.1.0
  - Add babel
  - Delete useless files and dependencies
- v1.0.0
  - Version initiale
