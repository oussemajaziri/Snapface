import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor() { }

  faceSnaps: FaceSnap[] = [
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

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}

}
