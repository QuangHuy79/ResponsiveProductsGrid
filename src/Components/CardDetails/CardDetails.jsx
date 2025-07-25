/// ***** Tách Formik và truyền form UI vào qua children *****
import React from "react";
import FieldInputCardDetails from "./FieldInputCardDetails";
import CardTypeSelector from "./CardTypeSelector";
import { calculateOrder } from "./orderUtils";
import { Formik, Form } from "formik";
import FormikWrapper from "./FormikWrapper";

function CardDetails({ initialValues, validationSchema, onSubmit }) {
  return (
    <div className="card bg-primary text-white rounded-3 w-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Card details</h5>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            className="img-fluid rounded-3"
            style={{ width: 45 }}
            alt="Avatar"
          />
        </div>

        <FormikWrapper
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange }) => {
            const { subtotal, shipping, total } = calculateOrder(values);

            return (
              <Form>
                <div className="mt-4 text-start">
                  {/* --- Card Type Icons --- */}
                  <div className="mb-4 ">
                    <p className="small mb-2">Card type</p>
                    <a href="#!" className="text-white me-2">
                      <i className="fab fa-cc-mastercard fa-2x"></i>
                    </a>
                    <a href="#!" className="text-white me-2">
                      <i className="fab fa-cc-visa fa-2x"></i>
                    </a>
                    <a href="#!" className="text-white me-2">
                      <i className="fab fa-cc-amex fa-2x"></i>
                    </a>
                    <a href="#!" className="text-white me-2">
                      <i className="fab fa-cc-paypal fa-2x"></i>
                    </a>
                  </div>

                  {/* --- Card Inputs --- */}
                  <FieldInputCardDetails
                    name="cardholderName"
                    label="Cardholder's Name"
                    id="cardholderName"
                    type="text"
                    placeholder="Cardholder's Name"
                  />

                  <FieldInputCardDetails
                    name="cardNumber"
                    label="Card Number"
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3457"
                  />

                  <div className="row mb-4 text-start">
                    <div className="col-md-6">
                      <FieldInputCardDetails
                        name="exp"
                        label="Expiration"
                        id="exp"
                        type="text"
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div className="col-md-6">
                      <FieldInputCardDetails
                        name="cvv"
                        label="CVV"
                        id="cvv"
                        type="text"
                        placeholder="●●●"
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label text-white">
                      Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      className="form-control"
                      min="1"
                      value={values.quantity}
                      onChange={handleChange}
                    />
                    {touched.quantity && errors.quantity && (
                      <div className="text-warning">{errors.quantity}</div>
                    )}
                  </div>

                  {/* Shipping Method */}
                  <div className="mb-4">
                    <label
                      htmlFor="shippingMethod"
                      className="form-label text-white"
                    >
                      Shipping Method
                    </label>
                    <select
                      id="shippingMethod"
                      name="shippingMethod"
                      className="form-select"
                      value={values.shippingMethod}
                      onChange={handleChange}
                    >
                      <option value="standard">Standard ($10)</option>
                      <option value="express">Express ($20)</option>
                    </select>
                    {touched.shippingMethod && errors.shippingMethod && (
                      <div className="text-warning">
                        {errors.shippingMethod}
                      </div>
                    )}
                  </div>
                </div>

                {/* Tính toán tổng */}
                <hr className="my-4" />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Subtotal</p>
                  <p className="mb-2">${subtotal.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping</p>
                  <p className="mb-2">${shipping.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <p className="mb-2">Total (Incl. taxes)</p>
                  <p className="mb-2">${total.toFixed(2)}</p>
                </div>

                <button type="submit" className="btn btn-info btn-block btn-lg">
                  <div className="d-flex justify-content-between">
                    <span>${total.toFixed(2)}</span>
                    <span>
                      Checkout{" "}
                      <i className="fas fa-long-arrow-alt-right ms-2" />
                    </span>
                  </div>
                </button>
              </Form>
            );
          }}
        </FormikWrapper>
      </div>
    </div>
  );
}

export default CardDetails;
