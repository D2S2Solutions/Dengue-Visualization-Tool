import {Injectable} from '@angular/core';

@Injectable()
export class MohToDistrictMapping {


  public mohToDistrictMap: Map<string, Array<string>> = new Map();
  public mohMap: Map<string, string> = new Map();
  public mohoLocationMap: Map<string,Array<number>> = new Map();
  public districtMap: Map<string, string> = new Map();
  public districtList = [];

  constructor() {

    this.mohMap.set('69', 'MC-COLOMBO');
    this.mohMap.set('173', 'Dehiwala');
    this.mohMap.set('207', 'Kurunegala');

    this.mohoLocationMap.set('69',[6.91999267,79.86733114]);
    this.mohoLocationMap.set('173',[6.858409663,79.87577179]);
    this.mohoLocationMap.set('207',[7.477474908,80.3520106]);

    this.districtMap.set('1', 'Colombo');
    this.districtList.push('1');

    this.districtMap.set('8', 'Kurunegala');
    this.districtList.push('8');

    this.mohToDistrictMap.set('1', ['69', '173']);
    this.mohToDistrictMap.set('8', ['207']);

  }

  public getMohsOfDistricts(district: string) {
    return this.mohToDistrictMap.get(district);
  }

  public getDistrictList() {
    return this.districtList;
  }

  getDistrictName(id) {
    return this.districtMap.get(id);
  }

  getMOHName(id) {
    return this.mohMap.get(id);
  }

  getMohLocationArray(moh) {
    return this.mohoLocationMap.get(moh);
  }

}
