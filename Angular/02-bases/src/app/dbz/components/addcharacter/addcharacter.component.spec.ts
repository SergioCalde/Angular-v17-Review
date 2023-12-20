import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcharacterComponent } from './addcharacter.component';

describe('AddcharacterComponent', () => {
  let component: AddcharacterComponent;
  let fixture: ComponentFixture<AddcharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
