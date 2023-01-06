import { useField } from "formik";

const CustomInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  console.log({ field, meta });

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} />
    </>
  );
};

export default CustomInput;
