import { useState, ChangeEvent } from "react";
import Button from "../../controls/Button";
import SelectField from "../../controls/SelectField";
import { makeOptions, modelOptions, yearOptions, priceOptions } from "./const";

interface PropsType {
  onSearch: (
    make: string | undefined,
    model: string | undefined,
    year: string | undefined,
    price: string | undefined
  ) => void;
}

export default function Search({ onSearch }: PropsType) {
  const [make, setMake] = useState<string | undefined>(undefined);
  const [model, setModel] = useState<string | undefined>(undefined);
  const [year, setYear] = useState<string | undefined>(undefined);
  const [price, setPrice] = useState<string | undefined>(undefined);
  return (
    <div>
      <div className="search_group">
        <SelectField
          label={"Make"}
          noValue={"All makes"}
          value={make}
          options={makeOptions}
          onChange={setMake}
        />
        <SelectField
          label={"Model"}
          noValue={"All models"}
          value={model}
          options={modelOptions}
          onChange={setModel}
        />
        <SelectField
          label={"Year"}
          noValue={"Any"}
          value={year}
          options={yearOptions}
          onChange={setYear}
        />
        <SelectField
          label={"Price"}
          noValue={"No max price"}
          value={price}
          options={priceOptions}
          onChange={setPrice}
        />
        <Button
          label={"Search"}
          onClick={() => {
            onSearch(make, model, year, price);
          }}
        />
      </div>
    </div>
  );
}
