# Getting Started with Dropdown Menu

Module for generating a component select with a options list from an array.

## Installation

Using npm :

`npm i @cecigiu2b/dropdown-menu-react`

## Required

- React

## TypeScript

a file dropdown-menu-react.d.ts is available in the module.
configuration is required in the file tsconfig.json.

## Props required

| Props    | Types                  |
| -------- | ---------------------- |
| name     | string                 |
| options  | Array                  |
| getValue | SetStateAction<string> |

**props options must be array type of string or array of object with a key "name"**
The prop getValue returns the value of the option chosen by the user.

## Style

You can style your component by adding :

- customClassSelect prop (select element)
- customClassOption prop (option elements)

See in the example above

## Exemple

In the project directory, you can run:

```
import { DropdownMenu } from '@cecigiu2b/dropdown-menu'
import { useState } from 'React'

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

const [valueSelect, setValueSelect] = useState(null)

const Form = () => {
   return (
    <div>
      <form>
        <DropdownMenu
          name="departements"
          options={departements}
          customClassSelect="dropdownSelect"
          customClassOption="dropdownOption"
          getValue={setValueSelect}
        />
        <DropdownMenu name="states" options={states} />
      </form>
    </div>
  );
};
export default Form;

```

## Version history

- v1.7.11
  - Docs: update licence and keywords
- v1.7.10
  - Fix, change text in option default
- v1.7.9
  - Patch, add an option to choose
- v1.7.8
  - Patch, fix onChange for object
- v1.7.7
  - Patch, update file d.ts
- v1.7.6
  - Patch, update exemple in README
- v1.7.5
  - Patch, get value with state
- v1.7.4
  - Patch,refactoring Dropdown
- v1.7.3
  - Patch, add test jest, coverage and refactoring Dropdown
- v1.7.2
  - Patch, add test jest
- v1.7.1
  - Patch, add github repo
- v1.7.0
  - Minor, add style in select, data-test-id and update README
- v1.6.1
  - Patch, update export
- v1.6.0
  - Minor Export index.js and types
- v1.5.0
  - Minor Update babel to TypeScript
- v1.4.0
  - Fix TypeScript, fix index.tsx, return JSX.ELEMENT
- v1.3.0
  - Add TypeScript
- v1.2.0
  - Feat : add style to option(s)
- v1.0.0
  - Version initiale
