import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  navItems: string[] = [
    'alumnos',
    'clases',
    'cursos'
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(route: string) {
    this.router.navigate([route])
  }

}
