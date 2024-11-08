export interface PrinterItemInterface {
  id: string;
  status: string;
  manufacturer: string;
  model: string;
  description: string;
  room: string;
  building: string;
  type: string;
  onClick: () => void;
}
