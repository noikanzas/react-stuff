import Dexie, { Table } from "dexie";
import { Machine, Location, FactoryLine } from "./config/typings";

const MACHINE_V1 = [
  "nvo_machineId",
  "nvo_name",
  "nvo_serialnumber",
  "nvo_machinehours",
  "nvo_machinehourssinceservice",
  "modifiedon",
  "createdon",
  "nvo_accountid",
  "nvo_locationid",
  "nvo_locationid.id",
  "nvo_locationid.name",
  "nvo_factorylineid",
  "nvo_factorylineid.id",
  "nvo_factorylineid.name",
];

const FACTORYLINE_V1 = [
  "nvo_factorylineId",
  "nvo_name",
  "nvo_accountid",
  "nvo_locationid",
  "modifiedon",
  "createdon",
];

const LOCATION_V1 = [
  "nvo_locationId",
  "nvo_name",
  "nvo_accountid",
  "nvo_addresscity",
  "nvo_addresscountryid",
  "nvo_addresspostalcode",
  "nvo_addressstreet",
  "modifiedon",
  "createdon",
];
export class DexieDB extends Dexie {
  nvo_machines!: Table<Machine>;
  nvo_locations!: Table<Location>;
  nvo_factorylines!: Table<FactoryLine>;
  constructor() {
    super("DexieDB");
    this.version(1).stores({
      nvo_machines: MACHINE_V1.join(","),
      nvo_locations: LOCATION_V1.join(","),
      nvo_factorylines: FACTORYLINE_V1.join(","),
    });
  }
}

export const db = new DexieDB();
