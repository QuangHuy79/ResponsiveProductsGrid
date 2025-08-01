import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

function AuthContainer() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="p-4 shadow rounded bg-white">
      {isLogin ? (
        <>
          <LoginForm />
          <p className="mt-3 text-center">
            Chưa có tài khoản?{" "}
            <button
              className="btn btn-link p-0 align-baseline"
              style={{ textDecoration: "underline" }}
              onClick={() => setIsLogin(false)}
            >
              Đăng ký
            </button>
          </p>
        </>
      ) : (
        <>
          <RegisterForm />
          <p className="mt-3 text-center">
            Đã có tài khoản?{" "}
            <button
              className="btn btn-link p-0 align-baseline"
              style={{ textDecoration: "underline" }}
              onClick={() => setIsLogin(true)}
            >
              Đăng nhập
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default AuthContainer;
