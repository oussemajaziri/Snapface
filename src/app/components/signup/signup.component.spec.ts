import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fbMock:any;

  beforeEach(() => {
    fbMock={
      group:jest.fn()
    }
    component = new SignupComponent(fbMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
    expect(fbMock.group).toHaveBeenCalled();
  });

  it('should singup', () => {
    const data = "data";
    component.singup(data);
  });
});
