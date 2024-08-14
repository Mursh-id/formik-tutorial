import React from 'react'
import { useFormik } from "formik"
import * as Yup from 'yup';

const TestForm = () => {
    const initialValues = { name: "", email: "", channel: "" }

    const submitFunction = (values) => {
        console.log("Submitting ...........");
        console.log("form data == ", values)
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name cannot exceed 50 characters'),

        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),

        channel: Yup.string()
            .required('Channel is required')
            .min(2, 'Channel must be at least 2 characters')
            .max(50, 'Channel cannot exceed 50 characters'),
    });

    // formik takes empty object as an argument.
    // when we invoke handleSubmit method the onSubmit inside useFormik will call.
    // there is a validate method to manually validate the form fields and manage error.
    // the error object and values objects updates on each onchange. and each click in the input element if we added onBlur
    const { handleChange, values, handleSubmit, errors, handleBlur , touched } = useFormik({
        initialValues: initialValues,
        onSubmit: submitFunction,
        validationSchema: validationSchema,
    })

    console.log(values, "==values");
    console.log(errors, "==errors");
    console.log(touched, "==touched or visited Fields");



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='mb-4' >
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' onChange={handleChange} value={values.name} onBlur={handleBlur} />
                    {errors.name && touched.name ? <div className='text-red-700 text-sm '>{errors.name}</div> : null}
                </div>

                <div className='mb-4'>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id='email' name='email' onChange={handleChange} value={values.email} onBlur={handleBlur} />
                    {errors.email && touched.email ? <div className='text-red-700 text-sm '>{errors.email}</div> : null}
                </div>
                <div className='mb-4'>
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id='channel' name='channel' onChange={handleChange} value={values.channel} onBlur={handleBlur} />
                    {errors.channel && touched.channel ? <div className='text-red-700 text-sm '>{errors.channel}</div> : null}
                </div>



                <button type='submit' className=' bg-slate-500 p-1 rounded-sm ' >Submit</button>
            </form>

        </div>
    )
}

export default TestForm
