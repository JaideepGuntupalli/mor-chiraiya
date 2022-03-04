import * as React from "react";
import Input from "./Input";

const Form = ({ title }) => {
    return (
        <form action="#" class="flex flex-col gap-8 p-8 flex-1">
            <h2 className="font-bold text-4xl">{title}</h2>
            <Input type="text" name="fname" label="First Name" />
            <Input type="text" name="lname" label="Last Name" />
            <Input type="email" name="email" label="Email ID" />
            <Input type="number" name="pnumber" label="Phone Number" />
            <input
                type="submit"
                value="Order it!"
                class="bg-black px-4 py-2 rounded-md font-semibold text-2xl text-white"
            />
        </form>
    );
};

export default Form;
