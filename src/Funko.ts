import { genero } from "./genero.js";
import { tipoPop } from "./tipoPop.js";

/**
 * Interfaz Funko que contiene todos los atributos requeridos
 * para describir tal objeto, según sus características
 * @param _ID : number; Identificador único del Funko
 * @param _nombre : string; Nombre del funko
 * @param _descripcion : string; Descripción del funko
 * @param _tipo : tipoPop; Tipo de funko
 * @param _genero: Genero; Género del funko
 * @param _franquicia : string; A qué franquicia pertenece
 * @param _numero : number; El número identificativo del funko dentro ed la franquicia
 * @param _exclusivo : boolean; Si es exclusivo o no
 * @param _caracteristicasEspeciales : string; Descripción de las caracterísicas especiales
 * @param _valorMercado : number; Cuál es el valor numérico en el mercado
 */

export interface Funko {
  _ID: number;
  _nombre: string;
  _descripcion: string;
  _tipo: tipoPop;
  _genero: genero;
  _franquicia: string;
  _numero: number;
  _exclusivo: boolean;
  _caracteristicasEspeciales: string;
  _valorMercado: number;
}
