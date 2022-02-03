/* eslint-disable @typescript-eslint/no-shadow */
import React, { FormEvent, useState } from 'react';

/* Example of Select component */

type OptionValue = string | number;

interface IOption<T extends OptionValue> {
  value: T;
  label: string;
}

interface IProps<T extends OptionValue> {
  options: IOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

function Select<T extends OptionValue>(props: IProps<T>) {
  const { options, onChange, value } = props;

  function updateValue(e: FormEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = options[selectedIndex];

    onChange(selectedOption.value);
  }

  return (
    <select value={value} onChange={updateValue}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

/* useage */
const Form = () => {
  const options = [
    { value: 'PL', label: 'Poland' },
    { value: 'DE', label: 'Germany' },
    { value: 'US', label: 'United States' },
  ];

  const [option, setOption] = useState('PL');

  return (
    <div>
      <p>Selected option: {option}</p>

      <Select options={options} value={option} onChange={setOption} />
    </div>
  );
};

export default Form;
