import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  // validation function
  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password should be at-least 6 characters.";
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
    ) {
      return "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group m-3">
        <input
          type="text"
          placeholder="الإسم الأول"
          name="LastName"
          ref={register({
            validate: validatePassword,
          })}
          className="form-control text-right "
        />
        <span className="text-danger float-right  m-3">
          {errors.LastName && errors.LastName.message}
        </span>

        <input
          type="text"
          placeholder="الاميل"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          className="form-control text-right"
        />
        <span className="text-danger float-right  m-3">
          {errors.Email && "Email is required"}
        </span>
        <input
          type="text"
          placeholder="الإسم الأخير"
          name="FirstName"
          ref={register({ required: true, maxLength: 80 })}
          className="form-control text-right "
        />
        <span className="text-danger float-right  m-3">
          {errors.FirstName && "First Name is required"}
        </span>
        <input
          type="tel"
          placeholder="رقم الهاتف"
          name="MobileNumber"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
          className="form-control text-right"
        />
        <span className="text-danger float-right  m-3">
          {errors.MobileNumber && "Mobile Number is required"}
        </span>
        <select
          name="Title"
          ref={register({ required: true })}
          className="form-control"
          dir="rtl"
        >
          <option value="Mr">أختر</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <span className="text-danger float-right  m-3">
          {errors.Title && "Title select is required"}
        </span>
        <div className="float-right">
          <input
            name="Developer"
            type="radio"
            value="Yes"
            ref={register({ required: true })}
            className="m-2"
          />
          <input
            name="Developer"
            type="radio"
            value="No"
            ref={register({ required: true })}
            className="m-2"
          />
        </div>
        <span className="text-danger float-right  m-3">
          {errors.Developer && "radio select is required"}
        </span>
        <input className="btn btn-primary m-5 float-right" type="submit" />
      </div>
    </form>
  );
}
