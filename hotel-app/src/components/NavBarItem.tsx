import React from "react";

interface ItemProps {
  name: string;
  handler: string;
}

const NavBarItem = (props: ItemProps) => {
  return (
    <div className="pr-8 ">
      <a
        className="text-primaryBlue hover:text-slate-500 font-montserrat font-bold transition-all duration-300 ease"
        href={props.handler}
      >
        {props.name}
      </a>
    </div>
  );
};

export default NavBarItem;
