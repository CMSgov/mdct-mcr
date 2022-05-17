import { API, Auth } from "aws-amplify";

async function requestOptions(): Promise<any> {
  try {
    const session = await Auth.currentSession();
    const token = await session.getIdToken().getJwtToken();

    const options = {
      headers: { "x-api-key": token },
    };
    return options;
  } catch (e) {
    console.log({ e }); // eslint-disable-line no-console
  }
}

async function listBanners(inputObj: any) {
  const opts = await requestOptions();
  opts.body = inputObj.body;
  return API.get("banner", `banners/list`, opts);
}

async function getBanner(inputObj: any) {
  const opts = await requestOptions();
  opts.body = inputObj.body;
  return API.get("banner", `banners/${inputObj.banner}/get`, opts);
}

async function createBanner(inputObj: any) {
  const opts = await requestOptions();
  opts.body = inputObj.body;
  return API.post("banner", `banners/${inputObj.banner}/create`, opts);
}
async function editBanner(inputObj: any) {
  const opts = await requestOptions();
  opts.body = inputObj.body;
  return API.put("banner", `banners/${inputObj.banner}/edit`, opts);
}

async function deleteBanner(inputObj: any) {
  const opts = await requestOptions();
  opts.body = inputObj.body;
  return API.del("banner", `banners/${inputObj.banner}/delete`, opts);
}

export { listBanners, getBanner, createBanner, editBanner, deleteBanner };
