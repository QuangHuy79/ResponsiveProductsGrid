import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldInput from "./FieldInput";
import { registerUser } from "../../api/api";
import { toast } from "react-toastify";

function RegisterForm({ onClose }) {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Tên người dùng là bắt buộc"),
    email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
    password: Yup.string().min(6, "Tối thiểu 6 ký tự").required("Bắt buộc"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
      .required("Nhập lại mật khẩu là bắt buộc"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await registerUser(values);
      toast.success("🎉 Đăng ký thành công!");
      resetForm();
      if (onClose) onClose(); // ✅ Đóng form
    } catch (err) {
      console.error(err);
      toast.error("❌ Đăng ký thất bại!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2 className="mb-4 text-center">Đăng ký</h2>
          <FieldInput name="username" label="Tên người dùng" type="text" />
          <FieldInput name="email" label="Email" type="email" />
          <FieldInput name="password" label="Mật khẩu" type="password" />
          <FieldInput
            name="confirmPassword"
            label="Nhập lại mật khẩu"
            type="password"
          />
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
