import React from "react";

interface PropTypes {
  name: string;
  id: string;
  items: Array<any>;
  label: string;
}

const Input = (props: PropTypes) => {
  return (
    <div className="flex flex-col items-center">
      <label
        className="text-primaryBlue font-montserrat font-bold"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <select className="h-10 w-[250px] border p-2 mt-2 font-montserrat rounded" id={props.id} name={props.name}>
        {props.items.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Input;
