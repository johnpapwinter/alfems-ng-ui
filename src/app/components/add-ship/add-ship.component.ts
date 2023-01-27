import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../core/services/api.service";
import {Router} from "@angular/router";
import {ShipDto} from "../../core/domain/dto/ship.dto";

@Component({
  selector: 'app-add-ship',
  templateUrl: './add-ship.component.html',
  styleUrls: ['./add-ship.component.css']
})
export class AddShipComponent {

  addVesselForm = new FormGroup({
    hud: new FormControl (null, [Validators.required]),
    name: new FormControl (null, [Validators.required]),
    type: new FormControl (null, [Validators.required]),
    crew: new FormControl,
    passengers: new FormControl,
    fighters: new FormControl,
  })

  vessel: ShipDto = {hud: "", name: "", type: ""}

  constructor(private router: Router,
              private apiService: ApiService) {

  }

  addVessel() {
    this.vessel = this.addVesselForm.value;
    this.apiService.addVessel(this.vessel).subscribe(res => {});
    this.router.navigateByUrl('home');
  }

  onCancel() {
    this.router.navigateByUrl('home');
  }

  get addVesselFormControl() {
    return this.addVesselForm.controls;
  }
}
