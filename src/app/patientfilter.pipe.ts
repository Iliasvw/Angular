import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from './patient/patient.model';
@Pipe({
    name: 'patientfilter'
})
export class PatientFilter implements PipeTransform {
    transform(items: Patient[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.naam.toLowerCase().includes(searchText) || it.voornaam.toLowerCase().includes(searchText)
                || it.kamer.toString().toLowerCase().includes(searchText) || it.verdieping.toString().toLowerCase().includes(searchText);
        });
    }
}