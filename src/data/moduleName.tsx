import { ReactNode } from "react";
import Module1 from "../pages/Module1";
import Module2 from "../pages/Module2";
import Module3 from "../pages/Module3";
import Module4 from "../pages/Module4";
import Module5 from "pages/Module5";
// @ts-ignore
import modul1 from '../assets/pdf/modul1.pdf';
// @ts-ignore
import modul2 from '../assets/pdf/modul2.pdf';
// @ts-ignore
import modul3 from '../assets/pdf/modul3.pdf';
// @ts-ignore
import modul4 from '../assets/pdf/modul4.pdf';
import Module6 from "pages/Module6";

export interface ModulePageInterface {
  name: string;
  description: string;
  component: ReactNode;
  pdf: string;
}

export const pageModules: ModulePageInterface[] = [
  {
    name: 'Modul 1',
    description: 'RANGKAIAN INSTALASI DOMESTIK (Pemutus Rangkaian)',
    component: <Module1 />,
    pdf: modul1
  },
  {
    name: 'Modul 2',
    description: 'RANGKAIAN SERI DENGAN STOP KONTAK',
    component: <Module2 />,
    pdf: modul2
  },
  {
    name: 'Modul 3',
    description: 'RANGKAIAN DUA ARAH DENGAN KONTAK UTAMA',
    component: <Module3 />,
    pdf: modul3
  },
  {
    name: 'Modul 4',
    description: 'PENGATURAN SAKLAR SILANG DENGAN KOTAK KONTAK',
    component: <Module4 />,
    pdf: modul4
  },
  {
    name: 'Modul 5',
    description: 'PENGATURAN SAKLAR TUNGGAL',
    component: <Module5 />,
    pdf: modul4
  },
  {
    name: 'Modul 6',
    description: 'SIRKUIT DIMMER (LAMPU FILAMEN)',
    component: <Module6 />,
    pdf: modul4
  },
]