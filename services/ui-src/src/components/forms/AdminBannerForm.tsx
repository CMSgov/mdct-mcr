import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// components
import { Button, Flex } from "@chakra-ui/react";
import { Banner, DateField, TextField } from "../index";
// utils
import { makeMediaQueryClasses } from "../../utils/useBreakpoint";
import { InputChangeEvent } from "../../utils/types/types";
import { bannerId } from "utils/constants/constants";

const formSchema = yup.object().shape({
  title: yup.string().required("Title text is required"),
  description: yup.string().required("Description text is required"),
  link: yup.string().url("URL must be valid"),
  startDate: yup.number().required("Valid start date is required"),
  startDateYear: yup.number().required().min(2022),
  startDateMonth: yup.number().required().max(12),
  startDateDay: yup.number().required().max(31),
  endDate: yup
    .number()
    .required("Valid end date is required")
    .min(yup.ref("startDate"), "End date cannot be before start date"),
  endDateYear: yup.number().required().min(2022),
  endDateMonth: yup.number().required().max(12),
  endDateDay: yup.number().required().max(31),
});

export const AdminBannerForm = ({ writeAdminBanner }: Props) => {
  const mqClasses = makeMediaQueryClasses();

  const [newBannerData, setNewBannerData] = useState({
    key: bannerId,
    title: "New banner title",
    description: "New banner description",
    startDate: 0,
    endDate: 0,
  });

  const handleInputChange = (e: InputChangeEvent) => {
    const { id, value }: any = e.target;
    setNewBannerData({
      ...newBannerData,
      [id]: value,
    });
    form.setValue(id, value);
  };

  const form = useForm<FormInput>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = () => {
    writeAdminBanner(newBannerData);
  };

  return (
    <FormProvider {...{ ...form, onInputChange: handleInputChange }}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TextField
          name="title"
          label="Title text"
          placeholder="New banner title"
        />
        <TextField
          name="description"
          label="Description text"
          placeholder="New banner description"
          multiline
          rows={3}
        />
        <TextField name="link" label="Link" requirementLabel="Optional" />
        <Flex sx={sx.dateFieldContainer} className={mqClasses}>
          <DateField
            name="startDate"
            label="Start date"
            hint="mm/dd/yyyy (12:00:00am)"
            {...form}
          />
          <DateField
            name="endDate"
            label="End date"
            hint="mm/dd/yyyy (11:59:59pm)"
            {...form}
          />
        </Flex>
        <Flex sx={sx.previewFlex}>
          <Banner bannerData={newBannerData} />
          <Button
            type="submit"
            sx={sx.replaceBannerButton}
            colorScheme="colorSchemes.main"
          >
            Replace Current Banner
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
};

interface Props {
  writeAdminBanner: Function;
}

interface FormInput {
  title: string;
  description: string;
  link: string;
  startDate: number;
  startDateDay: number;
  startDateMonth: number;
  startDateYear: number;
  endDateDay: number;
  endDateMonth: number;
  endDateYear: number;
  endDate: number;
}

const sx = {
  dateFieldContainer: {
    ".ds-c-fieldset:first-of-type": {
      marginRight: "3rem",
    },
    "&.tablet, &.mobile": {
      flexDirection: "column",
      ".ds-c-fieldset:first-of-type": {
        marginRight: "0",
      },
    },
  },
  previewFlex: {
    flexDirection: "column",
  },
  replaceBannerButton: {
    marginTop: "1rem !important",
    alignSelf: "end",
  },
};