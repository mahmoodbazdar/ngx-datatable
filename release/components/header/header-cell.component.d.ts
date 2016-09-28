
import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { StateService } from 'services';
import { TableColumn } from 'models';
import { SortDirection } from 'types';
export declare class DataTableHeaderCell {
    element: ElementRef;
    private state;
    model: TableColumn;
    onColumnChange: EventEmitter<any>;
    sort: Function;
    readonly sortDir: SortDirection;
    readonly name: string;
    constructor(element: ElementRef, state: StateService, renderer: Renderer);
    sortClasses(sort: any): {
        'sort-asc icon-down': boolean;
        'sort-desc icon-up': boolean;
    };
    onSort(): void;
}