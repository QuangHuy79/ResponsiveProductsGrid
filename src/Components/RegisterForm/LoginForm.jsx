import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldInput from "./FieldInput";
import { toast } from "react-toastify";

function LoginForm({ onClose }) {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
    password: Yup.string().required("Bắt buộc"),
  });

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   try {
  //     const res = await fetch(
  //       `http://localhost:3002/users?email=${values.email}&password=${values.password}`
  //     );
  //     const data = await res.json();

  //     if (data.length > 0) {
  //       toast.success("🎉 Đăng nhập thành công!");
  //       localStorage.setItem("user", JSON.stringify(data[0]));
  //       if (onClose) onClose(); // ✅ Đóng form
  //     } else {
  //       toast.error("❌ Email hoặc mật khẩu không đúng!");
  //     }
  //   } catch (err) {
  //     toast.error("⚠️ Không thể kết nối tới máy chủ!");
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await fetch(
        `http://localhost:3002/users?email=${values.email}&password=${values.password}`
      );
      console.log("✅ Response status:", res.status);
      if (!res.ok) {
        throw new Error("Kết nối thất bại hoặc server không phản hồi");
      }

      const data = await res.json();

      if (data.length > 0) {
        toast.success("🎉 Đăng nhập thành công!");
        localStorage.setItem("user", JSON.stringify(data[0]));
        // if (onClose) onClose(); // ✅ Đóng form
        if (onClose) onClose();
      } else {
        toast.error("❌ Email hoặc mật khẩu không đúng!");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Không thể kết nối tới máy chủ!");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <h2 className="mb-4">Đăng nhập</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FieldInput name="email" label="Email" type="email" />
            <FieldInput name="password" label="Mật khẩu" type="password" />
            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
