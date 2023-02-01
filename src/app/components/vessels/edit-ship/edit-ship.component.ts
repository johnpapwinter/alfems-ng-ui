import {Component, OnInit} from '@angular/core';
import {ShipEntity} from "../../../core/domain/entities/ship.entity";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ApiService} from "../../../core/services/api.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ShipDto} from "../../../core/domain/dto/ship.dto";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-ship',
  templateUrl: './edit-ship.component.html',
  styleUrls: ['./edit-ship.component.css']
})
export class EditShipComponent implements OnInit {

  vessel: ShipEntity = {crew: 0, fighters: 0, hud: "", id: "", name: "", passengers: 0, type: ""}
  dto: ShipDto = {}
  id: string | null = '';
  editVesselForm = new FormGroup({
    hud: new FormControl,
    name: new FormControl,
    type: new FormControl,
    crew: new FormControl,
    passengers: new FormControl,
    fighters: new FormControl,
  })

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })
    if (this.id) {
      this.apiService.getVesselById(this.id).subscribe(res => {
        this.vessel = res;
        this.editVesselForm.setValue({hud: this.vessel.hud, name: this.vessel.name, type: this.vessel.type,
          crew: this.vessel.crew, passengers: this.vessel.passengers, fighters: this.vessel.fighters});
      })
    }
  }

  editVessel() {
    this.dto = this.editVesselForm.value;
    this.apiService.editVessel(this.vessel.id, this.dto);
    this.messageService.add({ severity: 'success', summary: "The vessel's information was successfully changed" })
    this.router.navigateByUrl('registry');
  }

  onCancel() {
    this.router.navigateByUrl('home');
  }

}
