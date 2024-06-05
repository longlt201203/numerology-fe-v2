import { ChangeEventHandler } from "react";

export interface TextInputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ label, type, placeholder, onChange, value }: TextInputProps) {
    return (
        <div className="flex flex-col border-b">
          {label && <label htmlFor="" className="text-sm text-gray-500 font-opensans">{label}</label>}
          <input onChange={onChange} value={value} type={type || "text"} placeholder={placeholder} className="outline-none font-merriweather" />
        </div>
    );
}