import { useState, ChangeEvent } from "react";

interface Category {
  category: string;
  options: Record<string, string | undefined>;
}
interface PropsType {
  label: string;
  noValue: string;
  value: string | number | undefined;
  options: Record<string, string> | Array<Category>;
  onChange: (value: string | undefined) => void;
}

export default function SelectField({
  label,
  noValue,
  value,
  options,
  onChange,
}: PropsType) {
  return (
    <div className="select_field">
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value == noValue ? undefined : e.target.value)
        }
      >
        <option value={undefined}>{noValue}</option>
        {Array.isArray(options)
          ? options.map((category) => {
              return (
                <optgroup key={category.category} label={category.category}>
                  {Object.keys(category.options).map((value) => {
                    return (
                      <option key={value} value={value}>
                        {category.options[value]}
                      </option>
                    );
                  })}
                </optgroup>
              );
            })
          : Object.keys(options).map((value) => {
              return (
                <option key={value} value={value}>
                  {options[value]}
                </option>
              );
            })}
      </select>
    </div>
  );
}
