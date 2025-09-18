import React from "react";
import Select from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface ContactSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

const ContactSelect: React.FC<ContactSelectProps> = ({
  label,
  options,
  value,
  onChange,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <Select
      options={options}
      value={options.find((o) => o.value === value) || null}
      onChange={(selected) => onChange(selected?.value || "")}
      placeholder={`Select ${label}`}
    />
  </div>
);

export default ContactSelect;
