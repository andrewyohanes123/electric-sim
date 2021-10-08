import { ReactNode } from "react";
import Module1 from "../pages/Module1";
import Module2 from "../pages/Module2";

export interface ModulePageInterface {
  name: string;
  description: string;
  component: ReactNode;
}

export const pageModules: ModulePageInterface[] = [
  {
    name: 'Modul 1',
    description: 'RANGKAIAN INSTALASI DOMESTIK (Pemutus Rangkaian)',
    component: <Module1 />
  },
  {
    name: 'Modul 2',
    description: 'RANGKAIAN SERI DENGAN STOP KONTAK ',
    component: <Module2 />
  },
]