export interface StudentHistoryInterface {
  id: number;
  name: string;
  address: string;
  printId: number;
  printName: string;
  date: string;
  status: string;
  onClose: () => void;
}
