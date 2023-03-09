import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("You must include a name."),
    email: yup
      .string()
      .email("Please provide a valid email address.")
      .required("You must include an email address."),
    role: yup
      .string()
      .required('You must choose a role.')
  });

export default formSchema