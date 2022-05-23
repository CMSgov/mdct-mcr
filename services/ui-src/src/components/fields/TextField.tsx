// components
import { TextField as CmsdsTextField } from "@cmsgov/design-system";
import { Box } from "@chakra-ui/react";
// utils
import { makeMediaQueryClasses } from "../../utils/useBreakpoint";
import { StyleObject } from "utils/types/types";

export const TextField = ({ label, name, sxOverrides, ...props }: Props) => {
  const mqClasses = makeMediaQueryClasses();
  return (
    <Box sx={{ ...sx, ...sxOverrides }} className={mqClasses}>
      <CmsdsTextField
        className="co-c-root"
        label={label}
        name={name}
        {...props}
      />
    </Box>
  );
};

interface Props {
  label: string;
  name: string;
  sxOverrides?: StyleObject;
  [key: string]: any;
}

const sx = {
  ".ds-c-field": {
    maxWidth: "40rem",
  },
};