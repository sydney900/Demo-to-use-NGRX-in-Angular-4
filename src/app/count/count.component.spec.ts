import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MyCountActions } from '../actions/my-count.actions';

import { MyCountReducers } from '../reducers/my-count.reducer';
import { CountComponent } from './count.component';


describe('CountComponent', () => {
  let component: CountComponent;
  let fixture: ComponentFixture<CountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ mycount: MyCountReducers }), 
        MdButtonModule, MdIconModule
      ],

      declarations: [CountComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the inital count', async(() => {
    const valueElement = fixture.debugElement.nativeElement.querySelector('#mycount');
    fixture.whenStable().then(() => {
      let expectValue = parseInt(valueElement.textContent);      
      expect(expectValue).toBe(0);
    });
  }));

  it('onInc function should work', async(() => {
    const valueElement = fixture.debugElement.nativeElement.querySelector('#mycount');
    let expectValue = parseInt(valueElement.textContent)+1;

    component.onInc();
    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      let actual: number = parseInt(valueElement.textContent);
      expect(actual).toBe(expectValue);
    });
  }));

  it('onDec function should work', async(() => {
    const valueElement = fixture.debugElement.nativeElement.querySelector('#mycount');
    let expectValue = parseInt(valueElement.textContent)-1;

    component.onDec();
    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      let actual: number = parseInt(valueElement.textContent);
      expect(actual).toBe(expectValue);
    });
  }));

  
});
