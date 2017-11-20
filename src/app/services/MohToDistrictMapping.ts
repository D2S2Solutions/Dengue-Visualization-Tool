import {Injectable} from '@angular/core';

@Injectable()
export class MohToDistrictMapping {


  public mohToDistrictMap: Map<string, Array<string>> = new Map();
  public mohMap: Map<string, string> = new Map();
  public districtMap: Map<string, string> = new Map();
  public districtList = [];

  constructor() {

    this.mohMap.set('69', 'MC-COLOMBO');
    this.mohMap.set('173', 'Dehiwala');
    this.mohMap.set('100', 'Kurunegala');

    this.districtMap.set('1', 'Colombo');
    this.districtList.push('1');

    this.districtMap.set('8', 'Kurunegala');
    this.districtList.push('8');

    this.mohToDistrictMap.set('1', ['69', '173']);
    this.mohToDistrictMap.set('8', ['100']);

  }

  public getMohsOfDistricts(district: string) {
    return this.mohToDistrictMap.get(district);
  }

  public getDistrictList(){
    return this.districtList;
  }

  getDistrictName(id){
    return this.districtMap.get(id);
  }

  getMOHName(id){
    return this.mohMap.get(id);
  }

}
