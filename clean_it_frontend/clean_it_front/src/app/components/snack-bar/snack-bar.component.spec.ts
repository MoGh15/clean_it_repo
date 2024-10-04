import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';
import {ISnackBarData} from "../../models/SnackBar";

describe('SnackBarComponent', () => {
  const data: ISnackBarData = { message: 'massage', snackType: 'Success' };

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: data },
        SnackBarComponent,
      ],
    });
  }));

  it('should be created', inject([SnackBarComponent], (component: SnackBarComponent) => {
    expect(component).toBeTruthy();
    const out = component.icon();
    expect(out).toBe('successfull_icon');
  }));

  it('should return \'successfull_icon\'', inject([SnackBarComponent], (component: SnackBarComponent) => {
    expect(component.icon()).toEqual('successfull_icon');
  }));
});
