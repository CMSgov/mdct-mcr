export const form = {
  id: "adminBannerForm",
  options: {
    mode: "onChange",
  },
  fields: [
    {
      id: "abf-title",
      type: "text",
      props: {
        label: "Title text",
        placeholder: "New banner title",
      },
    },
    {
      id: "abf-description",
      type: "textarea",
      props: {
        label: "Description text",
        placeholder: "New banner description",
      },
    },
    {
      id: "abf-link",
      type: "text",
      props: {
        label: "Link",
        requirementLabel: "Optional",
      },
    },
    {
      id: "abf-startDate",
      type: "date",
      props: {
        label: "Start date",
      },
    },
    {
      id: "abf-endDate",
      type: "date",
      props: {
        label: "End date",
      },
    },
  ],
};
