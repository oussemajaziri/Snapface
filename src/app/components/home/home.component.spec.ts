import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let routerMock : any;

  beforeEach(() => {
    routerMock={
      navigateByUrl:jest.fn()
    }
    component = new HomeComponent(routerMock);
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should onContinue', () => {
    component.onContinue();
    expect(routerMock.navigateByUrl).toHaveBeenCalled();
  });

});
