import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'


const ContactSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(5, "Too Short!").max(13, "Too Long!").required("Required")
});

const initialValues= {
      username: "",
      number: ""
}

const ContactForm = () => {
    
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="username" />
        <ErrorMessage className={css.error} name="username" component="span" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field className={css.field} type="text" name="number" />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm