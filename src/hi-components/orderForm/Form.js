import * as React from "react";
import Input from "./Input";

const Form = () => {
    return (
        <form action="#" class="flex flex-col gap-8 p-8 flex-1">
            <h2 className="font-bold text-4xl">
                तो आइये और अपना योगदान दीजिये
            </h2>
            <Input type="text" name="fname" label="पहला नाम" />
            <Input type="text" name="lname" label="अंतिम नाम" />
            <Input type="email" name="email" label="ईमेल" />
            <Input type="number" name="pnumber" label="फ़ोन नंबर" />
            <input
                type="submit"
                value="इसे आदेश करें!"
                class="bg-black px-4 py-2 rounded-md font-semibold text-2xl text-white"
            />
        </form>
    );
};

export default Form;
