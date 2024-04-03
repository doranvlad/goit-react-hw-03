import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>
        <div className={s.field}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="text" name="phone" id={phoneFieldId} />
          <ErrorMessage name="phone" component="div" className={s.error} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
