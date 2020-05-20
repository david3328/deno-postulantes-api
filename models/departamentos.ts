export interface Departamento {
  _id: {$oid:string};
  departamento: string;
}

export interface Provincia {
  _id: {$oid:string};
  provincia: string;
  departamento?: {$oid:string}
}

export interface Distrito {
  _id: {$oid:string};
  distrito: string;
  provincia?: {$oid:string}
}
