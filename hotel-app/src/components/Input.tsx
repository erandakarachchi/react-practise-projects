import React from "react";

interface PropTypes {
  type: string;
  id: string;
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
      <input id={props.id} className="border h-10 mt-2 w-[250px] p-2 font-montserrat rounded" type={props.type}></input>
    </div>
  );
};

export default Input;
