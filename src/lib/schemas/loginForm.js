import * as yup from 'yup'

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  password: yup.string().required('Password is required')
})
