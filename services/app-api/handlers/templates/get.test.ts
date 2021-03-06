import { getTemplate } from "./get";
import { APIGatewayProxyEvent } from "aws-lambda";
import { proxyEvent } from "../../utils/testing/proxyEvent";
import { StatusCodes } from "../../utils/types/types";
import {
  INVALID_TEMPLATE_NAME_ERROR_MESSAGE,
  NO_TEMPLATE_NAME_ERROR_MESSAGE,
} from "../../utils/constants/constants";

jest.mock("aws-sdk", () => ({
  S3: jest.fn().mockImplementation(() => ({
    getSignedUrl: jest.fn().mockReturnValue("s3://fakeurl.bucket.here"),
  })),
}));

jest.mock("../../utils/auth/authorization", () => ({
  isAuthorized: jest.fn().mockReturnValue(true),
}));

jest.mock("../../utils/debugging/debug-lib", () => ({
  init: jest.fn(),
  flush: jest.fn(),
}));

const testEvent: APIGatewayProxyEvent = {
  ...proxyEvent,
  pathParameters: { templateName: "test" },
};

describe("Test getTemplate API method", () => {
  beforeAll(() => {
    process.env["TEMPLATE_BUCKET"] = "fakeTestBucket";
  });

  test("Test Successful template url fetch with MCPAR", async () => {
    const mcparEvent: APIGatewayProxyEvent = {
      ...testEvent,
      pathParameters: { templateName: "MCPAR" },
    };
    const res = await getTemplate(mcparEvent, null);

    expect(res.statusCode).toBe(StatusCodes.SUCCESS);
    expect(res.body).toContain("s3://fakeurl.bucket.here");
  });

  test("Test Successful template url fetch with MLR", async () => {
    const mlrEvent: APIGatewayProxyEvent = {
      ...testEvent,
      pathParameters: { templateName: "MLR" },
    };
    const res = await getTemplate(mlrEvent, null);

    expect(res.statusCode).toBe(StatusCodes.SUCCESS);
    expect(res.body).toContain("s3://fakeurl.bucket.here");
  });

  test("Test Successful template url fetch with NAAAR", async () => {
    const naaarEvent: APIGatewayProxyEvent = {
      ...testEvent,
      pathParameters: { templateName: "NAAAR" },
    };
    const res = await getTemplate(naaarEvent, null);

    expect(res.statusCode).toBe(StatusCodes.SUCCESS);
    expect(res.body).toContain("s3://fakeurl.bucket.here");
  });

  test("Test templateName not provided throws 500 error", async () => {
    const noKeyEvent: APIGatewayProxyEvent = {
      ...testEvent,
      pathParameters: {},
    };
    const res = await getTemplate(noKeyEvent, null);

    expect(res.statusCode).toBe(500);
    expect(res.body).toContain(NO_TEMPLATE_NAME_ERROR_MESSAGE);
  });

  test("Test templateName doesn't match enum throws 500 error", async () => {
    const noKeyEvent: APIGatewayProxyEvent = {
      ...testEvent,
      pathParameters: { templateName: "wrongName" },
    };
    const res = await getTemplate(noKeyEvent, null);

    expect(res.statusCode).toBe(500);
    expect(res.body).toContain(INVALID_TEMPLATE_NAME_ERROR_MESSAGE);
  });
});
