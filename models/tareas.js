import { Tarea } from './tarea.js';


class Tareas {
    
    _listado = {};

    get listadoArr() {

        const listado = [];
        //Convertir el array a objeto
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = []) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea( desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {
        
        console.log(); //Para dar espacio

        this.listadoArr.forEach( (tarea, i) => { //El foreach el segundo argumento que tiene es el indice, lo llamamos i, por ejemplo

            const idx = `${i + 1}`; // Para que no muestra desde 0, mejor desde 1...quedara mejor
            const { desc, completadoEn }  = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red; // If en ternario
 
            console.log(`${( idx + '.').green} ${desc} :: ${estado}`);
        
        })

    }

    listarPendientesCompletadas( completadas = true) {

        console.log(); //Para dar espacio
        let contador = 0;

        this.listadoArr.forEach( tarea => { //El foreach el segundo argumento que tiene es el indice, lo llamamos i, por ejemplo

            const { desc, completadoEn }  = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red; // If en ternario
 
            if (completadas) {
                //Mostrar completadas
                if (completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${completadoEn.green}`);
                }
            } else {
                //mostrar pendientes
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
                }
            }
            

            
        
        })


    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids = []) {

        //Marcar todos los ids que me llegan en el arreglo como completados
        ids.forEach( id => {

            if (!this._listado[id].completadoEn) {
                this._listado[id].completadoEn = new Date().toISOString();
            }

        });

        //Marcar todos los ids que NO ME LLEGARON en el arreglo como Pendientes
        this.listadoArr.forEach( tarea => {

            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }

        });


    }




}


export {Tareas};