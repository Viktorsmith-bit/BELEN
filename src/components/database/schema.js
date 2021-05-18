//Definimos el Schema
export default function user() {
    const userSchemaDB = {
        keyCompression: true,
        title: 'user Schema',
        version: 5,
        description: 'base de datos',
        type: 'object',
        properties: {
            id: {
                type: 'string',
                primary: true
            },
            name: {
                type: 'string'
            },
            correo: {
                type: 'string'
            },
            especialidad:{
                type:'string'
            },
            telefono:{
                type: 'string'
            },
            turno:{
                type: 'string'
            },
            fecha:{
                type:'string'
            },
            hora:{
                type:'string'
            },
            nombre:{
                type: 'string'
            },
            email:{
                type: 'string'
            },
            celular:{
                type: 'string'
            },
            opcion:{
                type: 'string'
            },
            lastname:{
                type: 'string'
            },
            phone:{
                type: 'string'
            },
            fechacard:{
                type: 'string'
            },
            horacard:{
                type: 'string'
            },
            fechahelp:{
                type: 'string'
            },
            horahelp:{
                type: 'string'
            }
            
        },
        requerid: ['id', 'name', 'correo', 'especialidad', 'telefono', 'fecha', 'hora', 'nombre', 'email', 'celular', 'opcion', 'lastname', 'phone', 'fechacard', 'horacard', 'fechahelp', 'horahelp']
    };

    return userSchemaDB;
}


