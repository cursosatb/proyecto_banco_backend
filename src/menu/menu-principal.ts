import readline from 'readline-promise';

import { Configuracion } from '../modelos/configuracion';
import { BancoArchivos } from '../almacenamiento/banco-archivos';
import { mostrarMenuGestores } from './menu-gestores';
import { Wrapper } from '../modelos/wrapper';
import { mostrarMenuClientes } from './menu-clientes';

// export porque la función se utiliza fuera de este archivo
// async porque dentro se utiliza await
export async function mostrarMenuPrincipal(w: Wrapper) {

  let opcion: string;

  do {

    console.clear();
    console.log(`
______
| ___ \\                      
| |_\/ \/ __ _ _ __   ___ ___  
| ___ \\\/ _ | '_ \\ \/ __\/ _ \\ 
| |_\/ \/ (_| | | | | (_| (_) |
\____\/ \\__,_|_| |_|\___\___\/ `);
    
    console.log('-------------');
    console.log('1. Gestores');
    console.log('2. Clientes');
    console.log('3. Mensajes');
    console.log('4. Transferencias');
    console.log('5. Otros');
    console.log('6. Login');
    console.log('0. Salir');
    
    opcion = await w.rlp.questionAsync('¿Qué opción deseas?\n');
    
    if(opcion === '1') {
      await mostrarMenuGestores(w);
    }

    else if(opcion === '2') {
      await mostrarMenuClientes(w);
    }

  } while(opcion !== '0');

  // esta es la última línea del programa
  w.rlp.close();
}