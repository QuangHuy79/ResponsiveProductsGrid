import { useField } from "formik";

function FieldInput(props) {
  const { label, id, name, ...rest } = props;
  const [field, meta] = useField({ name, id, ...rest });

  return (
    <div className="form-control mb-3">
      <label htmlFor={id || name} className="form-label">{label}</label>
      <input {...field} id={id} name={name} {...rest} className="form-control" />
      {meta.touched && meta.error && (
        <div className="text-danger mt-1">{meta.error}</div>
      )}
    </div>
  );
}

export default FieldInput;