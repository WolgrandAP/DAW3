import React from "react";

interface TextAreaControlProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    rows?: number;
}

const TextAreaControl: React.FC<TextAreaControlProps> = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    required,
    rows = 4,
}) => {
    return (
        <div>
            <label htmlFor={name}>
                {label}
                {required && <span style={{color: 'red', marginLeft: '0.25rem'}}>*</span>}
            </label>
            <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            style={{
                resize: 'none',
                minHeight: '100px',   
                maxHeight: '100px',
            }}
            />
        </div>
    )
}

export default TextAreaControl;