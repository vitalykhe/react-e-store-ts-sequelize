import { AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosCustomResponse extends Omit<AxiosResponse, "data"> {
  data: {
    message: string;
  };
}

export interface AxiosCustomError<T = unknown, D = any> extends Error {
  config: AxiosRequestConfig<D>;
  code?: string;
  request?: any;
  response?: AxiosCustomResponse;
  isAxiosError: boolean;
  toJSON: () => object;
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export interface AuthResponseData {
  token: string;
}

export interface AuthTokenBody extends User {
  iat: number;
  exp: number;
}

export type DevicesAPIResponse = {
  count: number;
  rows: Device[];
};

export type Device = {
  id: number;
  name: string;
  img_url: string;
  price: number;
  description: string;
  rating: number;
  device_info: DeviceInfo[];
  updatedAt?: string;
  createdAt?: string;
};

export type CreateDeviceFormInterface = {
  name: string;
  img_url: string;
  price: string;
  description: string;
  device_info: DeviceInfo[];
  brandId: number;
  typeId: number;
};

export type CreateDeviceFormInterfaceKey = keyof CreateDeviceFormInterface

export type DeviceProperty = {
  property_name: string;
  property_value: string;
  uniqueKey: number;
}

export type DevicePropertyKey = keyof DeviceProperty

export interface DeviceInfo {
  id?: number;
  property_name: string;
  property_value: string;
}

export interface Type extends TypeName {
  id: number;
};

export interface TypeName {
  name: string;
};

export interface Brand extends BrandName {
  id: number;
};

export interface BrandName {
  name: string;
};

export type DeleteOneResponse = {
    res: 0|1
}
