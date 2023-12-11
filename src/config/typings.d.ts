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

export interface Machine {
  nvo_machineId?: string;
  nvo_name: string;
  nvo_serialnumber: string;
  nvo_machinehours: number;
  nvo_machinehourssinceservice: number;
  modifiedon: string;
}
