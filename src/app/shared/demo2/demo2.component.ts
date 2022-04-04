import {
  OnInit,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, //
})
export class Demo2Component implements OnInit {
  message = '';

  numbers = [1, 2, 3, 4, 5];

  constructor(
    public appService: AppService,
    private changeDetectorRef: ChangeDetectorRef // used for manually triggering change detection
  ) {}

  ngOnInit(): void {
    // Subscribing to data stream
    this.appService.message$
      .pipe(map((message) => message + message))
      .subscribe({
        next: (message) => {
          this.message = message;
          this.changeDetectorRef.detectChanges();
        },
        complete: () => {
          console.log('In complete');
        },
      });
  }

  // Function is executed on every change detection cycle.
  // For complex functions, we can make use of pure pipes
  multipleOf2(num: number) {
    console.log(num);
    return num * 2;
  }

  ngOnDestroy() {}
}
