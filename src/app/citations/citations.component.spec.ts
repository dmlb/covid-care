import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsComponent } from './citations.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { ICitation } from '../../interfaces/citations';

const mockCitations: ICitation[] = [
  { title: 'B Citation', id: '1', sources: [] },
  { title: 'A Citation', id: '2', sources: [] },
  { title: 'C Citation', id: '3', sources: [] }
]

describe('CitationsComponent', () => {
  let component: CitationsComponent;
  let fixture: ComponentFixture<CitationsComponent>;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockActivatedRoute = {
      data: of({ })
    };

    await TestBed.configureTestingModule({
      imports: [CitationsComponent, RouterModule.forRoot([])],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign empty array for missing citations on ngOnInit', () => {
    // Call ngOnInit
    component.ngOnInit();
    fixture.detectChanges();

    // Assert that citationData is sorted alphabetically by title
    expect(component.citationData).toEqual([]);
  });

  it('should sort citations by title in ngOnInit', () => {
    mockActivatedRoute = {
      data: of({ citations: mockCitations })
    };

    // Replace the existing ActivatedRoute provider with the test-specific mock
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    component['route'] = mockActivatedRoute as any;

    // Call ngOnInit
    component.ngOnInit();
    fixture.detectChanges();

    // Assert that citationData is sorted alphabetically by title
    expect(component.citationData).toEqual([
      { title: 'A Citation', id: '2', sources: [] },
      { title: 'B Citation', id: '1', sources: [] },
      { title: 'C Citation', id: '3', sources: [] }
    ]);
  });

  afterEach(() => {
    if (component['sub$']) {
      component['sub$'].unsubscribe();
    }
  });
});
