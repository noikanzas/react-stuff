import { RoutePaths } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

type RoutePath = RoutePaths<typeof routeTree>;
export interface NavLink {
  text: string;
  icon?: React.ReactElement;
  path?: RoutePath;
  children?: Array<{ text: string; path?: RoutPath }>;
}
export interface Lookup {
  id: string;
  name: string;
}

export interface Optionset {
  value: number;
  label: string;
}

export interface MachineTableData {
  id: string;
  name: string;
  serialnumber: string;
  machineHours: number;
  machineHoursSinceService: number;
  factoryLine: string;
  location: string;
}

export interface DataRecord {
  id: string;
  [key: string]: string | number;
}

export interface DataTableColumn {
  id: keyof DataRecord;
  label: string;
}

export interface Machine {
  id: string;
  nvo_name: string;
  nvo_serialnumber: string;
  nvo_machinehours: number;
  nvo_machinehourssinceservice: number;
  nvo_accountid: string;
  nvo_accountid_name: string;
  nvo_locationid: string;
  nvo_locationid_name: string;
  nvo_factorylineid: string;
  nvo_factorylineid_name: string;
  modifiedon: string;
  createdon: string;
}

export interface Location {
  id: string;
  nvo_name: string;
  nvo_accountid: string;
  nvo_accountid_name: string;
  nvo_addresscity: string;
  nvo_addresscountryid: string;
  nvo_addresscountryid_name: string;
  nvo_addresspostalcode: string;
  nvo_addressstreet: string;
  modifiedon: string;
  createdon: string;
}

export interface FactoryLine {
  id: string;
  nvo_name: string;
  nvo_accountid: string;
  nvo_accountid_name: string;
  nvo_locationid: string;
  nvo_locationid_name: string;
  modifiedon: string;
  createdon: string;
}
