import { makeAutoObservable } from "mobx";
import { Device, Type, Brand } from "../utils/types";

export default class DeviceStore {
  private _devices: Array<Device>;
  private _brands: Array<Brand>;
  private _types: Array<Type>;

  public _selectedType: number | null;
  private _selectedBrand: number | null;
  public _selectedBrands: number[];

  public areSelectedBrandsChanged = false;

  //pagination params
  public page = 1;
  public pagesCount = 0;
  public limit = 5;

  private addOrExcludeNumberFromArray(item: number, arr: Array<any>) {
    const index = arr.indexOf(item);
    if (index === -1) {
      arr.push(item);
    } else {
      arr.splice(index, 1);
    }
  }

  constructor() {
    this._brands = [];
    this._types = [];
    this._devices = [];

    this._selectedType = null;
    this._selectedBrand = null;
    this._selectedBrands = [];

    makeAutoObservable(this);
  }

  getPagesLimit() {
    return this.limit;
  }

  setPagesLimit(n: number) {
    this.limit = n;
  }

  getPage() {
    return this.page;
  }

  setPage(n: number) {
    this.page = n;
  }

  getBrands() {
    return this._brands;
  }
  setBrands(brands: Array<Brand>) {
    this._brands = brands;
  }
  getTypes() {
    return this._types;
  }
  setTypes(types: Array<Type>) {
    this._types = types;
  }
  getDevices() {
    return this._devices;
  }
  setDevices(devices: Array<Device>) {
    this._devices = devices;
  }

  setSelectedType(typeId: number) {
    this._selectedType = typeId;
  }

  getSelectedType() {
    return this._selectedType;
  }
  setSelectedBrand(brandId: number) {
    this._selectedBrand = brandId;
  }

  getSelectedBrand() {
    return this._selectedBrand;
  }

  getSelectedTypeObject() {
    return this._types.find((type) => type.id === this.getSelectedType());
  }

  getSelectedBrandObject() {
    return this._brands.find((brand) => brand.id === this.getSelectedBrand());
  }

  setSelectedBrands(brandId: number) {
    this.addOrExcludeNumberFromArray(brandId, this._selectedBrands)
    this.areSelectedBrandsChanged = !this.areSelectedBrandsChanged
  }

  getSelectedBrands() {
    return this._selectedBrands;
  }
}
