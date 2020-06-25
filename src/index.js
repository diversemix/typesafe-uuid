"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var typesafe_uuid_1 = require("typesafe-uuid");
var AnimalId = /** @class */ (function (_super) {
    __extends(AnimalId, _super);
    function AnimalId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnimalId;
}(typesafe_uuid_1.uuidType()));
var VegtableId = /** @class */ (function (_super) {
    __extends(VegtableId, _super);
    function VegtableId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VegtableId;
}(typesafe_uuid_1.uuidType()));
var dog = AnimalId.fromUuid('200a6b06-1120-4970-a0dc-3c48102d46ad');
var carrot = VegtableId.fromUuid('5ec48ef0-181d-454b-9834-a4d2c070b43a');
dog = carrot; // type error
