/* eslint-disable no-console */
import React, { FormEvent, ChangeEventHandler } from 'react';

interface IFields {
  email: HTMLInputElement;
  message: HTMLInputElement;
}

const Form = () => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as typeof event.target & IFields;

    console.log(target.email);
  };

  const validateEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
    // email validation
  };

  return (
    <form name="signup" onSubmit={submit}>
      <input type="email" name="email" onChange={validateEmail} />
      <input type="text" name="message" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
