//Definimos el Schema
export default function user() {
    const schemaBelen = {
        keyCompression: true,
        title: 'user Schema',
        version: 0,
        description: 'base de datos',
        type: 'object',
        properties: {
            id: {
                type: 'string',
                primary: true
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
            fechacard:{
                type: 'string'
            },
            horacard:{
                type: 'string'
            },
        },
        requerid: ['id', 'nombre', 'email', 'celular', 'opcion', 'fechacard', 'horacard']
    };

    return schemaBelen;
}