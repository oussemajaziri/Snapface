import { of } from 'rxjs';
import { SingleFaceSnapComponent } from './single-face-snap.component';

describe('SingleFaceSnapComponent', () => {
  let component: SingleFaceSnapComponent;
  let faceSnapsServiceMock :any;
  let activatedRouteMock : any;
  beforeEach(() => {
    faceSnapsServiceMock={
      getFaceSnapById:jest.fn(()=>of()),
      snapFaceSnapById:jest.fn(()=>of())
    }
    activatedRouteMock = {
      snapshot : {
        params:jest.fn()
      }
    }
    component = new SingleFaceSnapComponent(
      faceSnapsServiceMock,
      activatedRouteMock,
    )
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    const faceSnapId = 'id';
    component.buttonText = 'Oh Snap!';
    jest.spyOn(activatedRouteMock.snapshot,'params').mockReturnValue(faceSnapId);
    component.ngOnInit();
  });

  it('should onSnap', () => {
    component.buttonText = 'Oh Snap!';
    component.onSnap();
  });

  it('should unSnap', () => {
    component.buttonText = 'unSnap!';
    component.onSnap();
  });
});
