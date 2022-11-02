import { FaceSnapListComponent } from './face-snap-list.component';

describe('FaceSnapListComponent', () => {
  let component: FaceSnapListComponent;
  let faceSnapsServiceMock : any;


  beforeEach(() => {
    faceSnapsServiceMock={
      getAllFaceSnaps:jest.fn()
    }
    component = new FaceSnapListComponent(faceSnapsServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
    expect(faceSnapsServiceMock.getAllFaceSnaps).toHaveBeenCalled();
  });


});
