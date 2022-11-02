import { FaceSnapComponent } from './face-snap.component';

describe('FaceSnapComponent', () => {
  let component: FaceSnapComponent;
  let faceSnapsServiceMock : any;
  let routerMock : any;

  beforeEach(() => {
    faceSnapsServiceMock = {
      snapFaceSnapById: jest.fn()
    }
    routerMock = {
      navigateByUrl: jest.fn()
    }
    component = new FaceSnapComponent(
      faceSnapsServiceMock,
      routerMock
    )
    component.faceSnap = {
      id: 1,
      title: 'titre',
      description: 'description',
      imageUrl: 'url',
      createdDate: new Date(),
      snaps: 200,
      location: 'tunis'
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
    expect(component.buttonText).toBe('Oh Snap!')
  });

  it('should onSnap', () => {
    component.buttonText = 'Oh Snap!';
    component.onSnap();
    expect(faceSnapsServiceMock.snapFaceSnapById).toHaveBeenCalled();
  });

  it('should unSnap', () => {
    component.buttonText = 'unSnap!';
    component.onSnap();
    expect(faceSnapsServiceMock.snapFaceSnapById).toHaveBeenCalled();
  });

  it('should onViewFaceSnap', () => {
    component.onViewFaceSnap();
    expect(routerMock.navigateByUrl).toHaveBeenCalled();
  });

});
