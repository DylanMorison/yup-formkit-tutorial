import { Field, Form, Formik } from "formik";
import { advancedSchema } from "../schema";
import CustomInput from "./CustomInput";

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      onSubmit={() => {}}
      validationSchema={advancedSchema}
    >
      {(props) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          {/* <Field type="text" name="email" placeholder="Email" /> */}
          {/* <input
            name="name"
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            placeholder="Enter your username"
          /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
