import React from "react";

interface ItemProps {
  name: string;
  handler: string;
}

const NavBarItem = (props: ItemProps) => {
  return (
    <div className="pr-8 ">
      <a className="text-accentBlue hover:text-primaryYellow font-sans" href={props.handler}>
        {props.name}
      </a>
    </div>
  );
};

export default NavBarItem;
