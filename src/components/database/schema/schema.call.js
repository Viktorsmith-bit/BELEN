//Definimos el Schema
export default function user() {
    const schemaCall = {
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
            lastname:{
                type: 'string'
            },
            phone:{
                type: 'string'
            },
            fechahelp:{
                type: 'string'
            },
            horahelp:{
                type: 'string'
            }
        },
        requerid: ['id', 'lastname', 'phone', 'fechahelp', 'horahelp']
    };

    return schemaCall;
}