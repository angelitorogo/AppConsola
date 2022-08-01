import {v4 as uuidv4} from 'uuid';

class Tarea {

    id = '';
    desc = '';
    completadoEn =  null;

    constructor(desc) {

        this.desc = desc;
        this.id = uuidv4();
        this.completadoEn = null;
        
    }

}

export {Tarea} ;