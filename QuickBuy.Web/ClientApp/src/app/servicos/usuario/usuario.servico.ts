import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpHeaderResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioServico {

  private baseURL: string;
  private _usuario: Usuario;

  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }

  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  public usuario_autenticado(): boolean {
    return this._usuario != null && this.usuario.email != "" && this.usuario.senha != "";
  }

  public usuario_administrador(): boolean {
    return this.usuario_autenticado() && this.usuario.administrador;
  }

  public limpar_sessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json')
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(this.baseURL + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(this.baseURL + "api/usuario/VerificarUsuario", JSON.stringify(usuario), { headers: this.headers });
  }

}
