import React from "react";
import { TextInput, Label } from "flowbite-react";
const ModalTextField = ({ name, label, type, setData, value }) => {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div className="mb-2 block">
        <Label value={label} className="text-xl" />
      </div>
      <TextInput
        type={type}
        placeholder={`Enter product ${name}`}
        name={name}
        required={true}
        shadow={true}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default ModalTextField;
