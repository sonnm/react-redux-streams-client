import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${(meta.touched && meta.error) ? 'error' : null}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  render() {
    const { handleSubmit, anyTouched, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className={`ui form ${(anyTouched && invalid) ? 'error' : null}`}>
        <Field
          label="Enter Title"
          name="title"
          component={this.renderInput}
        />
        <Field
          label="Enter Description"
          name="description"
          component={this.renderInput}
        />
        <button type="submit" className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
