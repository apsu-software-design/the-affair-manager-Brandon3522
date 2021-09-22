"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var Organization = (function () {
    function Organization(orgName) {
        this.orgName = orgName;
        this.affairList = [];
    }
    Organization.prototype.getAffairName = function (affairName) {
        var affair = "";
        for (var i = 0; i <= this.affairList.length - 1; i++) {
            if (this.affairList[i].affairName == affairName) {
                affair = this.affairList[i].affairName;
            }
        }
        return affair;
    };
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map