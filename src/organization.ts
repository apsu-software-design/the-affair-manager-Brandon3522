import { Affair } from "./affair";  

export class Organization {
    public orgName: string;
    //public memberList: Member;
    public affairList: Affair[];

    constructor(orgName?: string){
        this.orgName = orgName;
        this.affairList = [];
    }

    public getAffairName(affairName: string): string{
        let affair = "";
        for (let i = 0; i <= this.affairList.length - 1; i++) {
            if (this.affairList[i].affairName == affairName){
                affair = this.affairList[i].affairName;
            }
            
        }
            return affair;
        }

    


}