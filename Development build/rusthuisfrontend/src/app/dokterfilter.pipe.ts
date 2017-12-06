import { Pipe, PipeTransform } from '@angular/core';
import { Dokter } from './adddokter/dokter.model';
@Pipe({
    name: 'filter'
})
export class DokterFilter implements PipeTransform {
    transform(items: Dokter[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.naam.toLowerCase().includes(searchText) || it.voornaam.toLowerCase().includes(searchText)
                || it.info.toLowerCase().includes(searchText) || it.telefoon.toLowerCase().includes(searchText);
        });
    }
}