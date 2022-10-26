import React from "react";
import DropdownMenu from "./lib";
import { departements } from "./data/departments";
import { states } from "./data/states";

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
