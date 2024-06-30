import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have skip-to-content-link`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.skip-to-content-link')
    expect(link).toBeDefined()
    expect(link?.textContent).toContain('Skip to content');
  });

  it(`should have main element to skip to`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#mainContent')).toBeDefined();
  });

  it(`should have skip-to-top-link`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.skip-to-top-link')
    expect(link).toBeDefined()
    expect(link?.textContent).toContain('Skip to top');
  });
});
