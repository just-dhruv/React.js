import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useRef } from 'react';

// register : to get the field value
// handleSubmit : to submit the form
// control : to get the details of the form and its errors, used only for dev mode
// formState : errors : to get the field errors
// validate : to add our custom validation
// defaultValues : to add the default value in the field
// watch : to get the real time value when user entering the value in field
// getValues : using this the component will not re-render every time, works same as watch()
// setValue : use to set the value in field
// isValid : use to disable the submit button if there is any field is not filled or valid
// reset : reset the form
// trigger : only validate when you want

function Form() {
    // const { register, handleSubmit, control, formState } = useForm({
    //     defaultValues: async () => { // to add the default value from the API
    //         const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //         const data = await result.json();
    //         return {
    //             name: data.name,
    //             email: data.email,
    //             age: 18
    //         }
    //     }
    // });
    const { register, handleSubmit, control, formState, watch, getValues, setValue, reset, trigger } = useForm({
        // defaultValues: {
        //   name: " Your name",
        //   email: " Your mail",
        //   age: 18,
        //   social: {
        //     facebook: "",
        //     twitter: "",
        //   },
        //   phonenumber: ["", ""], // used of array
        //   dob: new Date(),
        // },
        mode: 'onBlur', // check the validation without clicking submit button
        // mode: 'onChange',
        // mode: 'onTouched'
        // mode: 'all'
    });
    const { errors, dirtyFields, touchedFields, isDirty, isValid, 
        isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;

    // console.log({ dirtyFields, touchedFields, isDirty }); 
    console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount});

    const useFormData = useForm();
    // console.log(useFormData);
    const logged = useRef(false);
    if (!logged.current) {
        console.log("useForm:", useFormData);
        logged.current = true;
    }

    const onSubmit = (data) => {
        console.log(data);
    };

    const onError = (e) => {
        console.log('Errors: ', e);
    }

    // WATCH()
    // const watchName = watch(['name', 'email']);
    // const watchForm = watch(); // to see the all the values
    // useEffect(() => {
    //     console.log(watchForm);
    // }, [watchForm]) // watch() method render the component every time when the value is changed so it will affect the load timing

    // GETVALUE()
    const getFormValue = () => {
        const value = getValues();
        console.log(value);
    } // we have call this function with event so the component will not rendered every time the value changes

    // SETVALUE()
    const setFormValue = () => {
        setValue('name', 'testing');
        setValue('age', '18', {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        }); // to set the diry and touch value true for DevTool
    }

    // RESET THE FORM AFTER SUBMITING
    useEffect(() => {
        if(isSubmitSuccessful){
            reset();
        }
    },[isSubmitSuccessful]) // form will automatically reset when submit button clicked
    return (
        <div className="p-5 flex justify-center text-center items-center">
            <DevTool control={control} placement="top-left" />

            <form
                action=""
                onSubmit={handleSubmit(onSubmit, onError)}
                className="border border-black p-5 rounded-xl"
            >
                {/* <h1>{watchName}</h1> */}

                {/* <p>{JSON.stringify(watchForm)}</p> */}
                <label htmlFor="name">Name</label>
                <br />
                <input
                    className="border"
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "Name is required",
                        validate: (value) => {
                            // to add your custom validation
                            return value !== "Dhruv" || "enter different name";
                        },
                    })}
                />
                {errors.name && <p className="error">{errors.name?.message}</p>}
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <br />
                <input
                    className="border"
                    type="email"
                    id="email"
                    {...register("email", {
                        // this field will be disabled untill user write something in the name field
                        // disabled:!watch('name'),
                        required: "Email is required",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Invalid Email",
                        },
                        validate: {
                            // you can add multiple validation for same field, just add the function as a object
                            notAdmin: (value) => {
                                return value !== "admin@abc.com" || "enter different email";
                            },
                            notYou: (value) => {
                                return (
                                    !value.endsWith("@abc.com") || "This domain is not allowed"
                                );
                            },
                            // CHECK FOR DUPLICATE EMAIL
                            availableEmail : async (value) => {
                                const result = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
                                const data = await result.json();
                                return (
                                    data.length === 0 || 'Email already exist'
                                )
                            }
                        },
                    })}
                />
                {errors.email && <p className="error">{errors.email?.message}</p>}
                <br />
                <br />

                <label htmlFor="age">Age</label>
                <br />
                <input
                    className="border"
                    type="number"
                    id="age"
                    {...register("age", {
                        required: "Age is required",
                        valueAsNumber: true,
                        // min: {
                        //   value: 18,
                        //   message: "Age must be at least 18",
                        // },
                        // max: {
                        //   value: 100,
                        //   message: "Age must me at most 55",
                        // },
                    })}
                />
                {errors.age && <p className="error">{errors.age?.message}</p>}
                <br />
                <br />

                <label htmlFor="dob">Date of Birth</label>
                <br />
                <input
                    className="border"
                    type="date"
                    id="dob"
                    {...register("dob", {
                        valueAsDate: true,
                    })}
                />
                <br />
                <br />

                <label htmlFor="facebook">Facebook</label>
                <br />
                <input
                    className="border"
                    type="text"
                    id="facebook"
                    {...register("social.facebook")}
                />
                <br />
                <br />

                <label htmlFor="social.twitter">twitter</label>
                <br />
                <input
                    className="border"
                    type="text"
                    id="social.twitter"
                    {...register("social.twitter")}
                />
                <br />
                <br />

                <label htmlFor="primary-phonenumber">Primary Phone Number</label>
                <br />
                <input
                    className="border"
                    type="tel"
                    id="primary-phonenumber"
                    {...register("phonenumber.0")}
                />
                <br />
                <br />
                <label htmlFor="secondary-phonenumber">Secondary Phone Number</label>
                <br />
                <input
                    className="border"
                    type="tel"
                    id="secondary-phonenumber"
                    {...register("phonenumber.1")}
                />
                <br />
                <br />

                <label htmlFor="contry">Select Contry</label>
                <br />
                <select className="border" id="contry" {...register("contry")}>
                    <option value="">Select Contry</option>
                    <option value="indin">india</option>
                    <option value="indin">india</option>
                    <option value="indin">india</option>
                </select>
                <br />
                <br />

                <label htmlFor="gender">Select Gender: </label>
                <label htmlFor="gender">
                    Male
                    <input
                        type="radio"
                        id="gender"
                        value="male"
                        {...register("gender", {
                            required: true,
                        })}
                    />
                </label>

                <label htmlFor="gender">
                    Female
                    <input
                        type="radio"
                        id="gender"
                        value="female"
                        {...register("gender", {})}
                    />
                </label>
                {errors.gender && <p className="error">gender is required</p>}
                <br />
                <br />

                <label >Select Skills: </label>
                <label htmlFor="traveling">
                    {" "}
                    Traveling
                    <input
                        type="checkbox"
                        id="traveling"
                        value="traveling"
                        {...register("skill", {
                            required: true,
                        })}
                    />
                </label>

                <label htmlFor="cricket">
                    {" "}
                    Cricket
                    <input
                        type="checkbox"
                        id="cricket"
                        value="cricket"
                        {...register("skill", {})}
                    />
                </label>
                <label htmlFor="chess">
                    {" "}
                    Chess
                    <input
                        type="checkbox"
                        id="chess"
                        value="chess"
                        {...register("skill", {
                            validate: value =>
                                value.length > 0 || "Choose at lease one skill"
                        })}
                    />
                </label>
                {errors.skill && <p className="error">skills are required</p>}
                <br />
                <br />

                <button type="submit" disabled={!isValid} className="border">Submit</button>
                {/* <button type="submit" disabled={!isValid} className="border">Submit</button> */}

                <button className="border"  type="button" onClick={getFormValue}>Get Value</button>
                <button className="border" type="button" onClick={setFormValue}>Set Value</button>
                <button className="border" type="button" onClick={() => trigger()}>Validate</button>
                <br />
                <button className="border" type="button" onClick={() => reset(
                    {
                        name: 'Dhruv',
                        email: 'dhruv@dot.com'
                    } // reset the form and set this value in that field
                )}>Reset</button>
            </form>
        </div>
    );
}

export default Form;
