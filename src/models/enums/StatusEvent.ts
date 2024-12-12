import { ENUM } from "sequelize";

export enum StatusEvent {
  PENDIENTE = "pendiente",
  ACTIVO = "activo",
  FINALIZADO = "finalizado",
  CANCELADO = "cancelado",
}
