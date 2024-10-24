import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/User';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [UsersService]
})
export class UserComponent implements OnInit {
  users = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['N°Jugador','Email']; 
  
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  ngAfterViewInit() {
    this.users.sort = this.sort;
  }

  loadUsers(): void {
    this.usersService.obtenerDatos().then((data: User[]) => {
      this.users.data = data;
    });
  }
}
