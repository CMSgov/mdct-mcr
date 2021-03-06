export default {
  intro: {
    header: "Your fiscal year 2022 templates",
    body: "Download these Excel files to begin gathering data for your Medicaid managed care programs.",
  },
  cards: {
    MCPAR: {
      title: "Managed Care Program Annual Report (MCPAR)",
      body: "The MCPAR online form will be available on this website in November 2022. Note: Every state must complete one report per program.",
      buttonText: "Download MCPAR Worksheet",
      accordion: {
        buttonLabel: "When is the MCPAR due?",
        text: "Due dates vary based on contract year of the managed care program and contract period for the first report.",
        table: {
          caption: "MCPAR Due Dates by Contract Year",
          headRow: ["Contract Year", "Contract Period", "Due Date"],
          bodyRows: [
            ["Jul to Jun", "7/1/21 to 6/30/22", "Dec 27, 2022"],
            ["Sep to Aug", "9/1/21 to 8/21/22", "Feb 27, 2023"],
            ["Oct to Sep", "10/1/21 to 9/30/22", "Mar 29, 2023"],
            ["Jan to Dec", "1/1/22 to 12/31/22", "Jun 29, 2023"],
            ["Feb to Jan", "2/1/22 to 1/31/23", "Jul 30, 2023"],
            ["Apr to Mar", "4/1/22 to 3/31/23", "Sep 27, 2023"],
          ],
        },
      },
    },
    MLR: {
      title: "Medical Loss Ratio (MLR)",
      body: "The requirement for states to submit this information to CMS began for rating periods starting on or after July 1, 2017. However, prior to June 2022, there had been no requirement to use a standard reporting template. The Excel template is available for states to use immediately if they choose. However, all states submitting rate certification packages on or after October 1, 2022 are required to use the template. Further, it should be submitted as additional documentation when the annual rate certification is submitted.",
      buttonText: "Download MLR Template",
      accordion: {
        buttonLabel: "When is the MLR due?",
        text: "This report is required to be submitted annually at the same time the annual rate certification is submitted.",
      },
    },
    NAAAR: {
      title: "Network Adequacy and Access Assurances Report (NAAAR)",
      body: "The requirement for states to submit this information to CMS began with all contracts with rating periods beginning on or after July 1, 2018. However, prior to June 2022, there had been no requirement to use a standard reporting template. The Excel template is available for states to use immediately if they choose. However, all states submitting rate certification packages on or after October 1, 2022 are required to use the template. Further, CMS recommends that the report be submitted as supporting documentation at the same time a state submits the associated managed care contract to CMS for approval, including a new contract, a renewal, or an amendment.",
      buttonText: "Download NAAAR Template",
      accordion: {
        buttonLabel: "When is the NAAAR due?",
        text: "The information is required to be submitted:",
        list: [
          "At the time the state enters into a contract with each MCO, PIHP, or PAHP;",
          "On an annual basis; and",
          "Any time there is a significant change in the operations that would affect the adequacy of capacity and services of an MCO, PIHP, or PAHP.",
          "CMS recommends that the report be submitted at the same time a state submits the associated managed care contract to CMS for approval, including a new contract, a renewal, or an amendment.",
        ],
      },
    },
  },
};
