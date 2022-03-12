import * as React from "react";
import Input from "./Input";

const Form = ({ title, isEng }) => {
    return (
        <form
            action="#"
            class="flex flex-col gap-4 md:gap-6 p-8 flex-1 font-sans"
        >
            <h2
                className={`font-bold text-[2rem] ${
                    isEng ? "font-sans" : "font-serif"
                }`}
            >
                {title}
            </h2>
            <div className="flex gap-4">
                <Input type="text" name="name" label="Name" />
                <Input type="email" name="email" label="Email ID" />
            </div>
            <div className="flex gap-4">
                <Input type="number" name="pnumber" label="Phone No." />
                <div class="flex flex-col gap-2 flex-1">
                    <label
                        htmlFor="quantity"
                        class="font-semibold text-xl md:text-2xl"
                    >
                        Quantity
                    </label>
                    <select
                        name="quantity"
                        id="quantity"
                        className="block bg-slate-300 w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-slate-300 focus:ring-slate-300 focus:ring-1 sm:text-lg"
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <Input type="street" name="autocomplete" label="Street" />

            <div className="flex gap-4">
                <Input type="city" name="InputCity" label="City" />

                <Input type="state" name="InputState" label="State" />
            </div>

            <div className="flex gap-4">
                <Input type="country" name="InputCountry" label="Country" />

                <Input type="pincode" name="InputPincode" label="Pincode" />
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
