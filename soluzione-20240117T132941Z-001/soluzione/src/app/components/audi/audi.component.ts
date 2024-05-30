import { Component } from '@angular/core';
import { Auto } from 'src/app/models/auto.interface';

@Component({
    selector: 'app-audi',
    templateUrl: './audi.component.html',
    styleUrls: ['./audi.component.scss'],
})
export class AudiComponent {
    autos!: Auto[];
    brand!: string;
    brandLogo!: string

    ngOnInit(): void {
        this.getAutos();
    }

    async getAutos() {
        const res = await fetch('../../assets/db.json');
        const response = await res.json();
        this.autos = response;
        this.autos = this.autos.filter((auto) => auto.brand === 'Audi')
        this.brandLogo = this.autos[0].brandLogo;
        this.brand = this.autos[0].brand;
    }
}
