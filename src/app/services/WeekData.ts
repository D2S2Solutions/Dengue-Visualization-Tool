export class WeekData {

    private week: number;
    private cases: number;
    private minTemp:number;
    private maxTemp:number;
    private meanTemp:number;
    private precipitation:number;
    private ndvi:number;
    constructor(week,cases,minTemp,maxTemp,meanTemp,precipitation,ndvi){
        this.week =week;
        this.cases = cases;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.meanTemp = meanTemp;
        this.precipitation = precipitation;
        this.ndvi = ndvi;
    }
}
