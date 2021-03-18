import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, onSearch }) => (
  <CustomButtonContainer onClick={onSearch}>{children}</CustomButtonContainer>
);

export default CustomButton;
