var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";
export class Empleado {
}
__decorate([
    Expose({ name: 'id_empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El campo id_empleado es obligatorio.` }; } }),
    __metadata("design:type", Number)
], Empleado.prototype, "ID_Empleado", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El campo nombre es obligatorio.` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: 'apellido' }),
    IsDefined({ message: () => { throw { status: 422, message: `El campo apellido es obligatorio.` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: 'dni' }),
    IsDefined({ message: () => { throw { status: 422, message: `El campo dni es obligatorio.` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "DNI", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: () => { throw { status: 422, message: `El campo direccion es obligatorio.` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: () => { throw { status: 422, message: `El campo telefono es obligatorio.` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: 'cargo' }),
    IsDefined({ message: () => { throw { status: 422, message: `El campo cargo es obligatorio.` }; } }),
    __metadata("design:type", String)
], Empleado.prototype, "Cargo", void 0);
