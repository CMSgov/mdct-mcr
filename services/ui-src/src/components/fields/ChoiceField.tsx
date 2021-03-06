import { useFormContext } from "react-hook-form";
// components
import { Choice as CmsdsChoice } from "@cmsgov/design-system";
import { Box } from "@chakra-ui/react";
// utils
import { makeMediaQueryClasses } from "utils";
import { InputChangeEvent, AnyObject } from "types";

export const ChoiceField = ({
  name,
  type,
  value,
  label,
  sxOverride,
  ...props
}: Props) => {
  const mqClasses = makeMediaQueryClasses();

  // get the form context
  const form = useFormContext();

  // update form data
  const onChangeHandler = async (event: InputChangeEvent) => {
    const { name: choiceName, value: choiceValue } = event.target;
    form.setValue(choiceName, choiceValue, { shouldValidate: true });
  };

  return (
    <Box sx={{ ...sx, ...sxOverride }} className={mqClasses}>
      <CmsdsChoice
        name={name}
        type={type}
        value={value}
        label={label}
        onChange={(e) => onChangeHandler(e)}
        {...props}
      />
    </Box>
  );
};

interface Props {
  name: string;
  type: "checkbox" | "radio";
  value: string;
  label?: string;
  sxOverride?: AnyObject;
  [key: string]: any;
}

const sx = {};
