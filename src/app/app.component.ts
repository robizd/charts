import { Component } from '@angular/core';
import { FilterPipe } from 'elarion-pipes';
// import { BarComponent } from 'projects/test-charts/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'charts';

  public test(): void {
    let filterPipe: FilterPipe = new FilterPipe();

    let items = [1,2,3,4,5]

    const hospitalitySubject: any = filterPipe.transform(items, 1, 1, false, true);
    console.log(hospitalitySubject)
  }

  
}
