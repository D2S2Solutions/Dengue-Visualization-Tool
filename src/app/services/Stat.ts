export class Stat{
  public district:string;
  public mohName:string;
  public mohId:string;
  public predictedCases:number;
  public predictedLevel:number;

  constructor(district,mohId,mohName,predictedCases,predictedLevel){
    this.district=district;
    this.mohId=mohId;
    this.mohName=mohName;
    this.predictedCases=predictedCases;
    this.predictedLevel=predictedLevel;
  }

}
