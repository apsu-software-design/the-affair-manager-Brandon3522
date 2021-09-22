//import { Console } from "console";
import { AffairManager } from "./manager";
import { Member } from "./member";

export class Affair {
    private _affairName: string;
    time: string;
    location: string;
    private _affairMemberList: Member[]

    
    public get affairMemberList() : Member [] {
        return this._affairMemberList;
    }

    
    public set affairMemberList(affairMemberList : Member []) {
        this._affairMemberList = affairMemberList;
    }
    
    

    public get affairName() : string {
        return this._affairName;
    }
    public set affairName(v : string) {
        this._affairName = v;
    }
    // Initialize student array list
    constructor(affairName?: string, location?: string, time?: string){
        this._affairName = affairName;
        this.time = time;
        this.location = location;
        this._affairMemberList = [];
    }

    public getMemberName(memberName: string): string{
        let member = "";
        for (let i = 0; i <= this._affairMemberList.length - 1; i++) {
            if (this._affairMemberList[i].mName == memberName){
                member = this._affairMemberList[i].mName;
            }
            
        }

        // this._affairMemberList.forEach(element => {
        //     if (element.mName == memberName){
        //         member = element;
        //     }
        // });
            return member;
        }
    

    public modifyAffairName(){
        
    }


}