import Dexie, { Table } from "dexie";
import { Machine } from "./config/typings";

const MACHINE_V1 = [
  "nvo_machineId",
  "nvo_name",
  "nvo_serialnumber",
  "nvo_machinehours",
  "nvo_machinehourssinceservice",
  "modifiedon",
];

export class DexieDB extends Dexie {
  nvo_machines!: Table<Machine>;
  constructor() {
    super("DexieDB");
    this.version(1).stores({
      nvo_machines: MACHINE_V1.join(","),
    });
  }
}

export const db = new DexieDB();
