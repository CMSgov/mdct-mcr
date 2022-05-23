import { useState, useEffect } from "react";
// components
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Banner, DateField, TextField } from "../../components/index";
// utils
import {
  checkBannerActiveDates,
  formatDate,
  makeStartDate,
  makeEndDate,
} from "utils/banner/banner";
import { BannerShape, BannerTypes } from "utils/types/types";
import { makeMediaQueryClasses } from "../../utils/useBreakpoint";
// data
import data from "../../data/admin-view.json";

import {
  getBanner,
  deleteBanner,
  writeBanner,
} from "utils/api/requestMethods/banner";

export const Admin = () => {
  const mqClasses = makeMediaQueryClasses();
  const ADMIN_BANNER_ID = process.env.REACT_APP_BANNER_ID!;
  const [bannerData, setBannerData] = useState<BannerShape | null>(null);
  const [isBannerActive, setIsBannerActive] = useState<boolean>(false);

  const mockBannerData = {
    key: ADMIN_BANNER_ID,
    title: "test title",
    description: "test body",
    link: "test link",
    startDate: makeStartDate({ year: 2022, month: 1, day: 1 }),
    endDate: makeEndDate({ year: 2022, month: 12, day: 31 }),
  };

  // TODO: fetch current banner data from db
  useEffect(() => {
    setBannerData(mockBannerData);
  }, []);

  useEffect(() => {
    if (bannerData) {
      setIsBannerActive(
        checkBannerActiveDates(bannerData.startDate, bannerData.endDate)
      );
    }
  }, [bannerData]);

  return (
    <section>
      <Box sx={sx.root} data-testid="admin-view">
        <Flex sx={sx.mainContentFlex}>
          <Button
            onClick={async () => {
              await writeBanner(mockBannerData);
            }}
          >
            Write banner
          </Button>
          <Button
            onClick={async () => {
              await getBanner(ADMIN_BANNER_ID);
            }}
          >
            Get banner
          </Button>
          <Button
            onClick={async () => {
              await deleteBanner(ADMIN_BANNER_ID);
            }}
          >
            Delete banner
          </Button>
          <Box sx={sx.introTextBox}>
            <Heading as="h1" sx={sx.headerText}>
              {data.intro.header}
            </Heading>
            <Text>{data.intro.body}</Text>
          </Box>
          <Box sx={sx.currentBannerBox}>
            <Text sx={sx.sectionHeader}>Current Banner</Text>
            {bannerData ? (
              <Box>
                <Flex sx={sx.currentBannerInfo}>
                  <Text sx={sx.currentBannerStatus}>
                    Status:{" "}
                    <span className={isBannerActive ? "active" : "inactive"}>
                      {isBannerActive ? "Active" : "Inactive"}
                    </span>
                  </Text>
                  <Text sx={sx.currentBannerDate}>
                    Start Date: <span>{formatDate(bannerData.startDate)}</span>
                  </Text>
                  <Text sx={sx.currentBannerDate}>
                    End Date: <span>{formatDate(bannerData.endDate)}</span>
                  </Text>
                </Flex>
                <Banner
                  status={BannerTypes.INFO}
                  bgColor="palette.alt_lightest"
                  accentColor="palette.alt"
                  title={bannerData.title}
                  description={bannerData.description}
                />
                <Button
                  sx={sx.deleteBannerButton}
                  colorScheme="colorSchemes.error"
                  onClick={async () => {
                    await deleteBanner(ADMIN_BANNER_ID);
                  }}
                >
                  Delete Current Banner
                </Button>
              </Box>
            ) : (
              <Text>There is no current banner</Text>
            )}
          </Box>

          <Flex sx={sx.previewBannerBox}>
            <Text sx={sx.sectionHeader}>Create a New Banner</Text>
            <TextField
              label="Header text"
              placeholder="New banner title"
              name="banner-title-text"
              fieldClassName="passedfieldclass"
            />
            <TextField
              label="Description text"
              placeholder="New banner description"
              multiline
              rows={3}
              name="banner-description-text"
            />
            <TextField
              label="Link (optional)"
              name="banner-link"
              requirementLabel="Optional"
            />
            <Flex sx={sx.dateFieldContainer} className={mqClasses}>
              <DateField label="Start date" hint={null} />
              <DateField label="End date" hint={null} />
            </Flex>
            <Banner
              status={BannerTypes.INFO}
              bgColor="palette.alt_lightest"
              accentColor="palette.alt"
              title="New banner title"
              description="New banner description"
            />
            <Button
              sx={sx.replaceBannerButton}
              colorScheme="colorSchemes.main"
              onClick={async () => {
                await writeBanner(mockBannerData);
              }}
            >
              Replace Current Banner
            </Button>
          </Flex>
        </Flex>
      </Box>
    </section>
  );
};

const sx = {
  root: {
    flexShrink: "0",
  },
  mainContentFlex: {
    flexDirection: "column",
    alignItems: "center",
    margin: "3.5rem auto 0",
    maxWidth: "contentColumnSmall",
  },
  introTextBox: {
    width: "100%",
    marginBottom: "2.25rem",
  },
  sectionHeader: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  currentBannerBox: {
    width: "100%",
    marginBottom: "2.25rem",
  },
  currentBannerInfo: {
    flexDirection: "column",
    marginBottom: "0.5rem !important",
  },
  currentBannerStatus: {
    span: {
      marginLeft: "0.5rem",
      "&.active": {
        color: "palette.success",
      },
      "&.inactive": {
        color: "palette.error",
      },
    },
  },
  currentBannerDate: {
    span: {
      marginLeft: "0.5rem",
    },
  },
  deleteBannerButton: {
    alignSelf: "end",
    marginTop: "1rem !important",
  },
  previewBannerBox: {
    width: "100%",
    flexDirection: "column",
    marginBottom: "2.25rem",
  },
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
  headerText: {
    marginBottom: "1rem",
    fontSize: "2rem",
    fontWeight: "normal",
  },
  dateField: {
    width: "80%",
  },
  replaceBannerButton: {
    marginTop: "1rem !important",
    alignSelf: "end",
  },
};