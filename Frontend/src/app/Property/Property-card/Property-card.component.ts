import { Component } from "@angular/core";


@Component({
  selector: 'app-property-card',
  templateUrl: 'Propert-card.component.html',
  styleUrls: ['Property-card.component.css']
})

export class PropertyCardComponent {
    Property: any = {
      "Id": 1,
      "Name": "House",
      "Price": 20000
    }
}
