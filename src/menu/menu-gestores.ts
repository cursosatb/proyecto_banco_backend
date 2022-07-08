import { Configuracion } from '../modelos/configuracion';
import { BancoArchivos } from '../almacenamiento/banco-archivos';
import { BancoGestores } from '../opciones/banco-gestores';

export async function mostrarMenuGestores(
  conf: Configuracion, 
  bancoArchivos: BancoArchivos,
  rlp) {

    let opcion: string;
    const bancoGestores = new BancoGestores(conf, bancoArchivos, rlp);

    do {

      console.clear();
      console.log('MENÚ GESTORES');
      console.log('-------------');
      console.log('1. Insertar gestor');
      console.log('2. Insertar gestores masivamente');
      console.log('3. Mostrar gestores');
      console.log('4. Mostrar gestor por identificador');
      console.log('5. Modificar gestor');
      console.log('6. Eliminar gestor por identificador');
      console.log('7. Atrás');
      
      opcion = await rlp.questionAsync('¿Qué opción deseas?\n');

      console.clear();

      // Opción 1 --> Insertar gestor 
      if(opcion === '1') {
        await bancoGestores.insertarGestor();        
        await rlp.questionAsync('');
      }

    } while(opcion !== '7')
}