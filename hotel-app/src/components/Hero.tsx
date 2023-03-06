import React from "react";
import { Input, Select } from "./index";

const Hero = () => {
  return (
    <div className="h-200 bg-homeImage rounded-xl bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="opacity-80 h-48 w-3/5 rounded-lg bg-white mb-12 flex items-center justify-evenly flex-nowrap">
        <Input label="Check in" id="checkin" type="date"></Input>
        <Input label="Check out" id="checkout" type="date"></Input>
        <Select
          label="Guests"
          id="guest"
          name="guest"
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        ></Select>
      </div>
    </div>
  );
};

export default Hero;
