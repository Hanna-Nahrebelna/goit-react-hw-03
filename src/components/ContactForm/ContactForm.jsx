import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'


const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(5, "Too Short!").max(13, "Too Long!").required("Required")
});

const initialValues = {      
    name: "",
    number: ""
}

const ContactForm = ({onAdd}) => {    
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {    
    onAdd(values);    
    actions.resetForm();
  }

  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor={`${nameFieldId}-username`}>Name</label>
        <Field className={css.field} id={`${nameFieldId}-username`} type="text" name="name" />
        <ErrorMessage className={css.errorName} name="name" component="span" />
        <label htmlFor={`${numberFieldId}-usernumber`}>Number</label>
        <Field className={css.field} id={`${numberFieldId}-usernumber`} type="text" name="number" />
        <ErrorMessage className={css.errorNumber} name="number" component="span" />
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm