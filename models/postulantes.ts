export default interface Postulante {
  _id?: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  dni: string;
  fechaNacimiento: Date;
  edad: number;
  sexo: Sexo;
  direccion: string;
  distrito: number;
  gradoEstudios: number;
  profesion: number;
  ultimaExperienciaLaboral: string;
  nivelExperiencia: string;
  publicacionAsociada: string;
  fechaRecepcion: Date;
}

enum Sexo {
  Masculino = "M",
  Femenino = "F",
}
