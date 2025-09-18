import React from "react";
import Input from "@/ui/Input";

interface ContactFieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (val: string) => void;
    required?: boolean;
    placeholder?: string;
    min?: string;
}

const ContactField: React.FC<ContactFieldProps> = ({
    label,
    type = "text",
    value,
    onChange,
    required = false,
    placeholder,
    min,
}) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <Input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            placeholder={placeholder}
            className="h-12"
            min={min}
        />
    </div>
);

export default ContactField;
