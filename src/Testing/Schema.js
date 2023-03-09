import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "name must be at least 2 characters")
      .required("You must include a name."),
    size: yup
      .string()
      .required("You must choose a size."),
    sauce: yup
      .string()
      .required('You must choose a sauce.')
  });

export default formSchema