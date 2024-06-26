import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-system',
  // standalone: true,
  // imports: [],
  templateUrl: './dice-system.component.html',
  styleUrl: './dice-system.component.css'
})
export class DiceSystemComponent {

  selectedDice: number;
  constructor() {
    this.selectedDice = 0; 
  }
  submit(diceValue: number) {
    this.selectedDice = diceValue;
    console.log('Dé sélectionné : ' + this.selectedDice);
    // valeur à stocker et à envoyer au backend en Java 
  }
}
