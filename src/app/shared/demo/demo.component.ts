import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: '[app-demo]',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit, OnDestroy, AfterViewInit {
  fruits = ['apple', 'mango'];

  // Similar to React props
  // input to component
  @Input()
  title: string = '';

  // Event emitter by the component
  @Output()
  parentClick = new EventEmitter<string>();

  // Inject dependencies using DI
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  handleClick() {
    console.log('clicked');
    this.title = 'NEw title';

    // Emit the new data in the stream
    this.appService.sendMessage('Title from demo app');
  }

  handleParentClick() {
    this.parentClick.emit('New title from child');
  }

  // Lifecycles
  ngOnDestroy(): void {}

  ngAfterViewInit(): void {}
}
