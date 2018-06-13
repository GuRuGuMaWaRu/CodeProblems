import React, { PureComponent } from "react";
import { compose } from "redux";
import { translate } from "react-i18next";
import injectSheet from "react-jss";
import classnames from "classnames";

import { ProductCreatorContainer } from "../../../common/containers/product";

import {
  formField,
  FormInput,
  FormDivider,
  FormFileInput,
  FormCurrency
} from "../form";

import { InteractionButton } from "../interaction";

import { LocationSelector } from "../location";

class ProductCreatorForm extends PureComponent {
  _onChange = field => e => {
    const { onSet } = this.props;

    // save file
    if (e.target.files) {
      onSet({
        [field]: e.target.files[0]
      });
      return;
    }
    // save other values
    onSet({
      [field]: e.currentTarget.value
    });
  };

  _onSelectFile = e => {
    e.preventDefault();

    const { file } = this.refs;

    file.click();
  };

  render() {
    const {
      classes,
      values,
      onChange,
      onSubmit,
      error,
      submitting,
      data,
      match,
      t
    } = this.props;

    // console.log(values)
    return (
      <div>
        <FormDivider />

        <div className={classes.field}>
          <label className={classes.fieldLabel} htmlFor="productName">
            Product Name:
          </label>
          <input
            className={classes.fieldInput}
            id="productName"
            onChange={this._onChange("name")}
          />
        </div>

        <div className={classes.field}>
          <label className={classes.fieldLabel} htmlFor="image">
            Image:
          </label>
          <button
            className={classes.button}
            id="image"
            onClick={this._onSelectFile}
          >
            Select a file
          </button>
          <input
            className={classes.fileInput}
            type="file"
            name="file"
            id="file"
            onChange={this._onChange("image")}
            ref="file"
          />
          {values.image && (
            <div className={classes.loadedFile}>
              <span>{values.image && values.image.name}</span>
              <span>&#215;</span>
            </div>
          )}
        </div>

        <div className={classes.field}>
          <div className={classes.fieldLabel}>HCG Category:</div>
          <div className={classes.hcgInputShell}>
            <input
              className={classes.hcgInput}
              type="radio"
              name="hcgCategory"
              value="Red"
              id="red"
              onChange={this._onChange("HCGCategory")}
            />
            <label
              className={classnames(classes.hcgLabel, classes.hcgLabelRed)}
              htmlFor="red"
            >
              &#10003;
            </label>
            <input
              className={classes.hcgInput}
              type="radio"
              name="hcgCategory"
              value="Amber"
              id="amber"
              onChange={this._onChange("HCGCategory")}
            />
            <label
              className={classnames(classes.hcgLabel, classes.hcgLabelAmber)}
              htmlFor="amber"
            >
              &#10003;
            </label>
            <input
              className={classes.hcgInput}
              type="radio"
              name="hcgCategory"
              value="Green"
              id="green"
              onChange={this._onChange("HCGCategory")}
            />
            <label
              className={classnames(classes.hcgLabel, classes.hcgLabelGreen)}
              htmlFor="green"
            >
              &#10003;
            </label>
          </div>
        </div>

        <div className={classes.field}>
          <label className={classes.fieldLabel} htmlFor="minPick">
            Min Pick:
          </label>
          <input
            className={classes.fieldInput}
            type="number"
            min="0"
            id="minPick"
            onChange={this._onChange("minPick")}
          />
        </div>

        <div className={classes.field}>
          <label className={classes.fieldLabel} htmlFor="cost">
            Cost:
          </label>
          <div className={classes.fieldInputShell}>
            <span className={classes.fieldInputDecorator}>&#36;</span>
            <input
              className={classnames(
                classes.fieldInput,
                classes.fieldInputComplex
              )}
              placeholder="0.00"
              id="cost"
              onChange={this._onChange("cost")}
            />
          </div>
        </div>

        <div className={classes.field}>
          <label className={classes.fieldLabel} htmlFor="defaultPrice">
            Default Price:
          </label>
          <div className={classes.fieldInputShell}>
            <div className={classes.fieldInputDecorator}>&#36;</div>
            <input
              className={classnames(
                classes.fieldInput,
                classes.fieldInputComplex
              )}
              placeholder="0.00"
              id="defaultPrice"
              onChange={this._onChange("defaultPrice")}
            />
          </div>
        </div>

        <div className={classes.field}>
          <label className={classes.fieldLabel} htmlFor="sales7Days">
            Sales Last 7 Days:
          </label>
          <input className={classes.fieldInput} id="sales7Days" disabled />
        </div>

        <FormDivider />
        <button
          className={classnames(classes.button, classes.submitButton)}
          onClick={onSubmit}
        >
          Create Product
        </button>
      </div>
    );
  }
}

ProductCreatorForm.styles = {
  field: {
    display: "flex",
    flexDirection: "column",
    width: "38%",
    minWidth: "300px",
    paddingBottom: "1.5rem"
  },
  fieldLabel: {
    fontWeight: 600,
    paddingBottom: ".5rem"
  },
  fieldInputShell: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  fieldInputDecorator: {
    flex: "1 0 20px",
    lineHeight: "34px",
    color: "#2E3848",
    fontSize: "1.3rem",
    textAlign: "center",
    padding: "0 .8rem",
    border: "1px solid #BEC0C2",
    borderRight: "none",
    borderRadius: "4px",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    background: "#f7f7f7"
  },
  fieldInput: {
    boxSizing: "border-box",
    width: "100%",
    minWidth: "300px",
    height: "36px",
    padding: "0 .8rem",
    border: "1px solid #BEC0C2",
    borderRadius: "3px",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#139ff0"
    },
    "&:hover:disabled": {
      borderColor: "#BEC0C2"
    },
    "&:focus": {
      outline: "none",
      borderColor: "#139ff0",
      boxShadow: "0 0 0 1px #139ff0"
    }
  },
  fieldInputComplex: {
    minWidth: "0",
    flex: "10 1 auto",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0"
  },
  fileInput: {
    position: "absolute",
    left: "-999px",
    opacity: 0
  },
  loadedFile: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    boxSizing: "border-box",
    width: "100%",
    minWidth: "300px",
    height: "36px",
    padding: "0 .8rem",
    borderRadius: "3px",
    marginTop: ".9rem",
    backgroundColor: "#e6f1f7",
    "& span:first-child": {
      lineHeight: "36px"
    },
    "& span:last-child": {
      lineHeight: "36px",
      fontSize: "3rem",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        textShadow: "2px 2px #c2c5c6",
        transform: "translateY(-1px)"
      }
    }
  },
  hcgInputShell: {
    display: "flex"
  },
  hcgInput: {
    display: "none",
    "&:checked": {
      "& + label": {
        fontSize: "2rem"
      }
    }
  },
  hcgLabel: {
    fontSize: 0,
    textAlign: "center",
    width: "36px",
    height: "36px",
    lineHeight: "36px",
    marginRight: "2rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: "#139ff0"
    }
  },
  hcgLabelRed: {
    border: "1px solid #d2929d",
    background: "#ff8c9e7a"
  },
  hcgLabelAmber: {
    border: "1px solid #ffdb65",
    background: "#ffe96080"
  },
  hcgLabelGreen: {
    border: "1px solid #51d6b9",
    background: "#33e2bc50"
  },
  fieldError: {
    color: "red",
    paddingTop: ".4rem"
  },
  button: {
    width: "10rem",
    color: "#262930",
    fontSize: "1.15rem",
    fontWeight: 600,
    padding: ".5rem 1rem",
    border: "1px solid #BEC0C2",
    borderRadius: "4px",
    background: "#f7f7f7",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow:
        "0 0 0 0.5px rgba(0, 0, 0,.6), 0 2px 5px 0 rgba(50,50,93,.12), 0 3px 9px 0 rgba(50,50,93,.08), 0 1px 1.5px 0 rgba(0,0,0,.08), 0 1px 2px 0 rgba(0,0,0,.08)",
      transform: "translateY(-1px)"
    }
  },
  submitButton: {
    width: "13rem",
    color: "#F7F7F7",
    fontWeight: 700,
    padding: ".7rem 1.4rem",
    border: "none",
    background: "#1fa2ff"
  }
};

export default compose(
  translate(),
  injectSheet(ProductCreatorForm.styles),
  ProductCreatorContainer
)(ProductCreatorForm);
