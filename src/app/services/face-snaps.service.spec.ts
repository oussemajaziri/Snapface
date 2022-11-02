import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from './face-snaps.service';

describe('FaceSnapsService', () => {
  let service: FaceSnapsService;
  const faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'titre un',
      description: 'description une',
      imageUrl: 'https://img.gocar.be/v7/storage_wordpress/2020/10/16123229/Mercedes-EQC-4x4%C2%B2-Concept-2020-2.jpg?width=900&optipress=3',
      createdDate: new Date(),
      snaps: 200,
      location: 'tunis'
    },
    {
      id: 2,
      title: 'titre deux',
      description: 'description deux',
      imageUrl: 'https://i.pinimg.com/originals/8c/e8/74/8ce8746d770998205bd38e9089642fa9.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Ariana'
    },
    {
      id: 3,
      title: 'titre trois',
      description: 'description trois',
      imageUrl: 'https://th.bing.com/th/id/OIP.JmPSvWj1QUOUOG_WoLowVwHaE8?pid=ImgDet&w=900&h=600&rs=1',
      createdDate: new Date(),
      snaps: 0,
    }
  ];
  beforeEach(() => {
    service = new FaceSnapsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getAllFaceSnaps', () => {
    service.getAllFaceSnaps();
  });

  it('should getFaceSnapById', () => {
    let faceSnapId = 1;
    const faceSnap = faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    jest.spyOn(service,'getFaceSnapById').mockReturnValue(faceSnap);
    service.getFaceSnapById(faceSnapId);
    expect(service.getFaceSnapById(faceSnapId)).toBe(faceSnap);
  });


  it('should snapFaceSnapById', () => {
    let faceSnapId = 1;
    service.snapFaceSnapById(faceSnapId,'snap');
    expect(service.snapFaceSnapById(faceSnapId,'snap'));
  });

});
