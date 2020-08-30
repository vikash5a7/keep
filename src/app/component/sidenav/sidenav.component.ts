import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public grid = false;
  public isTrash = false;
  public isLabelNotes = false;
  SearchTeram: any;
  name: string;
  options: FormGroup;
  labelList: [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private fb: FormBuilder){
                this.options = fb.group({
                  bottom: 0,
                  fixed: false,
                  top: 0
                });
              }

  onClickView() {
    this.grid = !this.grid;
  }
  refresh(): void {
    window.location.reload();
}
logout(event: MouseEvent) {
  console.log('loggout function called');
  event.preventDefault();
}

}
