import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput')
  serverContentInput!: ElementRef;

  @Output() serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName: string, serverContent: string}>();

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    console.log(nameInput.value)
    this.serverCreated.emit({serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {

    console.log(this.serverContentInput);

    this.blueprintCreated.emit({serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
    
  }

}
