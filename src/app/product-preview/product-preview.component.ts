import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  
  @Input() 
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);

  }

  #color = '';

  cupMaterial: MeshStandardMaterial | undefined;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  cup$ = this.gltfLoaderService.load('assets/cup.glb');

  cupLoaded(object: Object3D) {
    console.log(object);
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
    this.applyColorToMaterial(this.#color);

  }

  ngOnInit() {
    
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = false;
    orbitControls.autoRotateSpeed = 5;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 6.5;
    camera.translateX(5)
    camera.position.setY(6);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }

}
