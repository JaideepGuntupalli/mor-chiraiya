import * as React from "react";

const Input = ({ type, name, label }) => {
    return (
        <div class="flex flex-col gap-2">
            <label htmlFor={name} class="font-semibold text-2xl">
                {label}
            </label>
            <input
                class="placeholder:italic placeholder:text-slate-700 block bg-slate-300 w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-slate-300 focus:ring-slate-300 focus:ring-1 sm:text-lg"
                type={type}
                name={name}
                id={name}
                placeholder={label}
                required
            />
        </div>
    );
};

export default Input;