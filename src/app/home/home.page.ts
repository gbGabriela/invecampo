import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from "../entidade/usuario";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: Usuario = new Usuario();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ){}

  login(){

    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => {this.router.navigate(['pagina']); } ).catch( (erro) => console.log(erro) );

  }

  logout() {

    this.afAuth.auth.signOut();
    this.router.navigate(['/']);

  }

  redefinirSenha(): void {
   if(this.usuario.email){
     this.afAuth.auth.sendPasswordResetEmail(this.usuario.email)
     .then((res) => alert('Email enviado!'))
     .catch((err) => console.log(err));
   }
 }

 criarUsuario(): void{

     this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email,
        this.usuario.senha)
        .then( (res) => {
           this.router.navigate(['pagina']);
        }).catch((erro) => {
           console.log(erro);
        });
 }

}
