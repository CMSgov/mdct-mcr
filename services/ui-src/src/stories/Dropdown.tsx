import React from "react";

import { Dropdown as CmsdsDropdown } from "@cmsgov/design-system";

import "./assets/css/index.css";

interface DropdownProps {
  /**
   * Button contents
   */
  label: string;
  name: string;
  size: "small" | "medium" | undefined;
  errorMessage?: string;
  hint?: string;
  disabled?: boolean;
  inversed?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Dropdown = ({
  name,
  label,
  size,
  errorMessage = "",
  hint = "",
  disabled = false,
  inversed = false,
  ...props
}: DropdownProps) => {
  const dropdownOptions = [
    { label: "- Select an option -", value: "" },
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4" },
    { label: "Option 5", value: "5" },
    { label: "Option 6", value: "6" },
    { label: "Option 7", value: "7" },
    { label: "Option 8", value: "8" },
  ];
  return (
    <CmsdsDropdown
      label={label}
      name={name}
      options={dropdownOptions}
      size={size}
      errorMessage={errorMessage}
      hint={hint}
      disabled={disabled}
      inversed={inversed}
      {...props}
    ></CmsdsDropdown>
  );
};
