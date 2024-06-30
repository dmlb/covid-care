import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsComponent } from './citations.component';
import { RouterModule } from '@angular/router';

describe('CitationsComponent', () => {
  let component: CitationsComponent;
  let fixture: ComponentFixture<CitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationsComponent, RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
