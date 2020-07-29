/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Formik, Field, Form as FormikForm } from "formik";
import { PanelInput } from "../Input";

const Form = ({
  initialValues,
  onSubmit,
  children,
  ...props
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  initalValues: {},
};

const FormPanel = ({
  title,
  initialValues,
  onSubmit,
  fields,
  description,
  imgUrl,
  ...props
}) => {
  return (
    <S.FormPanel>
      <S.FormHeader
        {...{
          title,
          description,
          imgUrl,
        }}
      />
      <Form {...{initialValues, onSubmit}}>
        {fields.map((item, index) => {
          if (item.type != "submit") {
            return (
              <PanelInput {...item}>
                <Field
                  id={item.name}
                  name={item.name}
                  {...(item.placeholder
                    ? { placeholder: item.placeholder }
                    : {})}
                  type={item.type ? item.type : ""}
                />
              </PanelInput>
            );
          }

          return <button type="submit">{item.label}</button>;
        })}
      </Form>
    </S.FormPanel>
  );
};

FormPanel.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  children: PropTypes.element,
};

FormPanel.defaultProps = {};

export { Form, FormPanel };
