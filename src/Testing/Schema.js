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
      .required('You must choose a sauce.'),
    extraCheese: yup
      .boolean(),
    sausage: yup
    .boolean(),
    pepperoni: yup
      .boolean(),
    bacon: yup
      .boolean(),
    ham: yup
      .boolean(),
    onion: yup
      .boolean(),
    mushroom: yup
      .boolean(), 
    greenPeppers: yup
      .boolean(),   
    spinach: yup
      .boolean(), 
    olives: yup
      .boolean(),
    gluten: yup
      .bool(),
    special: yup
      .string(),
    quantity: yup
      .number()
      .positive()
      .max(10, "You can only order up to 10 pizzas at a time.")
      .required("Please select a quantity.")
  });

export default formSchema