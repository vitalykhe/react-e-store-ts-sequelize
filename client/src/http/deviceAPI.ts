import { $noAuthHost, $authHost } from "./index";
import { Type, Brand, Device, DevicesAPIResponse, TypeName, BrandName } from "../utils/types";


export const createType = async (type: TypeName) => {
  const response = await $authHost.post("api/type", type);
  const data = response.data as Type;
  //Need type
  return data;
};

export const fetchTypes = async () => {
  const response = await $noAuthHost.get("api/type");
  const data = response.data as Type[];
  if (Array.isArray(data))
    return data;
  else {
    console.error("recieved not array of type from server");
    console.log(data);
    return [];
  }
};

export const createBrand = async (brand: BrandName) => {
  const response = await $authHost.post("api/brand", brand);
  const data = response.data as Brand;
  return data;
};

export const fetchBrands = async () => {
  const response = await $noAuthHost.get("api/brand");
  const data = response.data as Brand[];
  if (Array.isArray(data))
    //Need type
    return data;
  else {
    console.error("recieved not array of brand from server");
    // console.log(data);
    return [];
  }
};

export const createDevice = async (device: FormData) => {
  const response = await $authHost.post("api/device", device);
  const data = response.data
  if((data as Device).id !== undefined) {
    alert(`Device ${(data as Device).name} has been successfully added`)
  }
  else console.log(data);
  // return data  as Device;
};

export const fetchDevices = async (typeId: number|null, selectedBrands:number[]|[], limit: number, page: number) => {
  const response = await $noAuthHost.get("api/device", {params: {
    typeId, selectedBrands, limit, page
  }});
  const data = response.data as DevicesAPIResponse;
  if (Array.isArray(data.rows))
    //Need typedevice
    return data.rows;
  else {
    console.error("recieved not array of device from server");
    console.log(data);
    return [];
  }
};

export const fetchDevice = async (id: number) => {
  const response = await $noAuthHost.get("api/device/" + id);
  const data = response.data as Device;
  return data
};

export const deleteType = async (id: number) => {
  const response = await $authHost.post("api/type/" + id);
  const data = response.data as Type[];
  if (Array.isArray(data))
    return data;
  else {
    console.error("response is not array of type");
    console.log(data);
    return [];
  }
};

export const updateTypesArr = async (types: Type[]) => {
  console.log(types)
  const response = await $authHost.post("api/type/update/", types)
  if(response.data === 'OK') return
  else return console.log(response.data)
}

export const deleteBrand = async (id: number) => {
  const response = await $authHost.post("api/brand/" + id);
  const data = response.data as Brand[];
  if (Array.isArray(data))
    return data;
  else {
    console.error("response is not array of type");
    console.log(data);
    return [];
  }
};

export const updateBrandsArr = async (brands: Brand[]) => {
  console.log(brands)
  const response = await $authHost.post("api/brand/update/", brands)
  if(response.data === 'OK') return
  else return console.log(response.data)
}
