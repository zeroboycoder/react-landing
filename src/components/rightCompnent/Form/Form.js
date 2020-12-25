import React, { Component } from 'react'
import Input from '../../UI/Input/Input';
import "./Form.css"

class Form extends Component {
    state = {
        form: {
            firstName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "First Name *",
                },
                validation: {
                    required: true
                },
                touched: false,
                value: "",
                isValid: false,
                inValidText: "First Name is required *"
            },
            lastName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Last Name *",
                },
                validation: {
                    required: true
                },
                touched: false,
                value: "",
                isValid: false,
                inValidText: "Last Name is required *"
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Email Address",
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                touched: false,
                value: "",
                isValid: false,
                inValidText: "Email is invalid!"
            },
            phNo: {
                elementType: "input",
                elementConfig: {
                    type: "tel",
                    placeholder: "Phone Number",
                },
                validation: {
                    required: true,
                    isNumber: true
                },
                touched: false,
                value: "",
                isValid: false,
                inValidText: "Invalid Phone Number!"
            }
        }
    }

    checkValidation = (value, rules) => {
        let valid = false
        if (rules.required) {
            valid = value.trim() !== ""
        }

        if (rules.isEmail) {
            const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            valid = pattern.test(value);
        }

        if (rules.isNumber) {
            const pattern = /^\d+$/
            valid = pattern.test(value)
        }

        return valid;
    }

    inputChangeHandler = (event, key) => {
        const updateForm = { ...this.state.form };
        updateForm[key].value = event.target.value;
        updateForm[key].touched = true;
        updateForm[key].isValid = this.checkValidation(event.target.value, updateForm[key].validation)
        this.setState({ form: updateForm })
    }

    onClickHandler = event => {
        event.preventDefault();
    }

    render() {
        const inputs = [];
        for (let key in this.state.form) {
            inputs.push(<Input key={key}
                elementtype={this.state.form[key].elementType}
                elementconfig={this.state.form[key].elementConfig}
                value={this.state.form[key].value}
                touched={this.state.form[key].touched}
                isValid={this.state.form[key].isValid}
                inValidText={this.state.form[key].inValidText}
                changed={event => this.inputChangeHandler(event, key)} />)
        }
        const form = <form onClick={event => this.onClickHandler(event)}>
            {inputs}
            <button>Submit</button>
        </form>
        return form
    }
}

export default Form;
