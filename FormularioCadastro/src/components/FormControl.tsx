import React from 'react';

interface FormControlProps {
    label: string;
    name: string;
    value: string|number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number';
    placeholder?: string;
    required?: boolean;
}

const FormControl: React.FC<FormControlProps> = ({
    label,
    name,
    value,
    onChange,
    type = 'text',
    placeholder,
    required=false,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
            >
                {label}
                {required && <span style={{color: 'red', marginLeft: '0.25rem'}}>*</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            ></input>
        </div>
    )
}

export default FormControl;