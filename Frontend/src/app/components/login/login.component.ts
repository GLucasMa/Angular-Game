import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isModalVisible: boolean = false; // Control de visibilidad del modal
  users: User[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private usersService: UsersService) {
    this.loginForm = this.formBuilder.group({
    });
  }
  ngOnInit(): void {
    // Inicializa el formulario con sus controles y validaciones
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Contraseña: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  get f() { //para el .spect
    return this.loginForm.controls;
  }

  onLogin() {
    this.onSubmit();
  }

  // Función para mostrar la modal
  showModal(): void {
    this.isModalVisible = true;

    // Cerrar automáticamente después de 3 segundos
    setTimeout(() => {
      this.closeModal();
    }, 3000);
  }

  // Función para cerrar la modal
  closeModal(): void {
    this.isModalVisible = false;
  }
  loadUsers(): void {
    this.usersService.obtenerDatos().then(
      (data) => {
        this.users = data; // Asigna los datos obtenidos al array
        console.log('Usuarios cargados:', this.users); // Verifica que los datos sean correctos
      }
    ).catch(
      (error) => {
        console.error('Error al cargar los usuarios', error);
      }
    );
  }

  onSubmit(): void {
    const email = this.loginForm.value.Email;
    const userExists = this.users.some(user => user.Email === email);
    if (userExists) {
      console.error('El email ya está registrado. Acceso denegado.');
      return;
    }
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
      this.router.navigate(['/juego']); 

      // Verificar si el correo electrónico ya está registrado

      this.usersService.enviarDatos(this.loginForm.value)
        .then(() => {
          this.showModal(); // Mostrar modal cuando la respuesta es exitosa
          this.loginForm.reset();
        })
        .catch((err: any) => {
          console.error('Error al enviar los datos:', err);
        });
    } else {
      console.log('Formulario inválido');
      this.loginForm.markAllAsTouched();
    }
  }
  Users(): void{
    this.router.navigate(['/user']); 
    
  }
}