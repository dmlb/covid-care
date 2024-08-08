import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationEnd, Router, RouterModule, UrlTree } from '@angular/router';
import { Subject } from 'rxjs';

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

  it(`should updateCurrentLink on init`, () => {
    const component = TestBed.createComponent(AppComponent).componentInstance;
    spyOn(component, 'updateCurrentLink')
    component.ngOnInit();
    expect(component.updateCurrentLink).toHaveBeenCalled()
  });

  it(`should unsubscribe on destroy`, () => {
    const component = TestBed.createComponent(AppComponent).componentInstance;
    component.ngOnInit();

    spyOn(component['sub$'], 'unsubscribe')
    component.ngOnDestroy();
    expect(component['sub$'].unsubscribe).toHaveBeenCalled()
  });
});


describe('AppComponent Router', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let routerEventsSubject: Subject<unknown>;

  beforeEach(async () => {
    routerEventsSubject = new Subject();

    const routerMock = {
      events: routerEventsSubject.asObservable(),
      url: '/initial-url',
      routerState: {
        root: {}
      },
      createUrlTree: jasmine.createSpy('createUrlTree').and.callFake(() => ({} as UrlTree)),
      navigateByUrl: jasmine.createSpy('navigateByUrl').and.returnValue(Promise.resolve(true)),
      navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true)),
      serializeUrl: jasmine.createSpy('serializeUrl').and.returnValue('/mock-url'),
      parseUrl: jasmine.createSpy('parseUrl').and.returnValue({} as UrlTree)
    };


    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([
        { path: '' },
        { path: '/new-url', redirectTo: '' },
        { path: '/old-url', redirectTo: '' }
      ])],
      providers: [
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
  });

  it('should update currentLink on NavigationEnd event', () => {

    component.updateCurrentLink();
    // default path
    expect(component.currentLink).toBe('/');

    // Simulate NavigationEnd event
    const newUrl = '/new-url';
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    (router as any).url = newUrl;  // Type assertion to modify readonly property for testing purposes
    routerEventsSubject.next(new NavigationEnd(1, '/old-url', newUrl));


    expect(component.currentLink).toBe('/new-url'); // Updated to new URL
  });

  afterEach(() => {
    if (component['sub$']) {
      component['sub$'].unsubscribe();
    }
  });
});
