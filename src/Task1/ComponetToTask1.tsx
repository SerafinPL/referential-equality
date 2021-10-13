import React from "react";
import { useForm } from "./customHook";

import { Input } from "./GenericInput";

const Container = () => {
  const { handledFieldUpdate, validators } = useForm();

  return (
    <div>
      <Input label='name' onChange={event => handledFieldUpdate('name', event)} valid={validators.name}/>
      <Input label='email' onChange={event => handledFieldUpdate('email', event)} valid={validators.email}/>
      <Input label='password' onChange={event => handledFieldUpdate('pass', event)} valid={validators.pass}/>
      <Input label='re-password' onChange={event => handledFieldUpdate('repass', event)} valid={validators.repass}/>
    </div>
  ); 
};

export default Container;
