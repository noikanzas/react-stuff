export interface NavLink {
  text: string;
  icon?: React.ReactElement;
  path?: string;
  children?: Array<{ text: string; path?: string }>;
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
  machineId: string;
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
  nvo_machineId: string;
  nvo_name: string;
  nvo_serialnumber: string;
  nvo_machinehours: number;
  nvo_machinehourssinceservice: number;
  nvo_accountid: Lookup;
  nvo_locationid: Lookup;
  nvo_factorylineid: Lookup;
  modifiedon: string;
  createdon: string;
}

export interface Location {
  nvo_locationId: string;
  nvo_name: string;
  nvo_accountid: Lookup;
  nvo_addresscity: string;
  nvo_addresscountryid: Lookup;
  nvo_addresspostalcode: string;
  nvo_addressstreet: string;
  modifiedon: string;
  createdon: string;
}

export interface FactoryLine {
  nvo_factorylineId: string;
  nvo_name: string;
  nvo_accountid: Lookup;
  nvo_locationid: Lookup;
  modifiedon: string;
  createdon: string;
}
