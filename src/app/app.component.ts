import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Console Prototypes';
  navLinks: NavLink[] = [
    {
      label: 'Gridster',
      path: '/gridster-example'
    },
    {
      label: 'Bootstrap',
      path: '/bootstrap-example'
    },
    {
      label: 'Masonry',
      path: '/masonry-example'
    },
  ];
}

interface NavLink {
  label: string;
  path: string;
}
