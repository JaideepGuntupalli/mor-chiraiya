import * as React from "react";
import Input from "./Input";

const Form = ({ title }) => {
    return (
        <form action="#" class="flex flex-col gap-4 md:gap-6 p-8 flex-1">
            <h2 className="font-bold text-4xl">{title}</h2>
            <div className="flex gap-4">
                <Input type="text" name="fname" label="First Name" />
                <Input type="text" name="lname" label="Last Name" />
            </div>
            <div className="flex gap-4">
                <Input type="email" name="email" label="Email ID" />
                <Input type="number" name="pnumber" label="Phone Number" />
            </div>
            <Input type="street" name="autocomplete" label="Street" />

            <div className="flex gap-4">
                <Input type="city" name="InputCity" label="City" />

                <Input type="state" name="InputState" label="State" />
            </div>

            <div className="flex gap-4">
                <Input type="zip" name="InputZip" label="Zip" />

                <Input type="country" name="InputCountry" label="Country" />
            </div>
            <p className="text-sm">
                Your shipment will be dispatched in 3 working days. All the
                details will be sent to your email id and mobile number.
            </p>
            <input
                type="submit"
                value="Order it!"
                class="bg-black px-4 py-2 rounded-md font-semibold text-2xl text-white"
            />
        </form>
    );
};

export default Form;
