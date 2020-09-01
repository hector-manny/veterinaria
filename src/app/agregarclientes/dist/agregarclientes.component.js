"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AgregarclientesComponent = void 0;
var core_1 = require("@angular/core");
var AgregarclientesComponent = /** @class */ (function () {
    function AgregarclientesComponent() {
        this.registro = [];
    }
    AgregarclientesComponent.prototype.ngOnInit = function () {
        this.Dui = 0;
        this.nombre = '';
        this.mascota = '';
        this.tratamiento = '';
        this.medicamento = '';
        this.costo = 0;
        this.contador = 0;
    };
    AgregarclientesComponent.prototype.ingresaR = function () {
        this.cliente = { "nombre": this.nombre, "Dui": this.Dui, "mascota": this.mascota, "tratamiento": this.tratamiento, "medicamento": this.medicamento, "costo": this.costo };
        this.registro.push(this.cliente);
        this.contador++;
    };
    AgregarclientesComponent = __decorate([
        core_1.Component({
            selector: 'app-agregarclientes',
            templateUrl: './agregarclientes.component.html',
            styleUrls: ['./agregarclientes.component.css']
        })
    ], AgregarclientesComponent);
    return AgregarclientesComponent;
}());
exports.AgregarclientesComponent = AgregarclientesComponent;
