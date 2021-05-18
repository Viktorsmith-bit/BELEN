import { createRxDatabase, addRxPlugin } from 'rxdb';
import userSchemaDB from './schema';

//Requerimos el adaptador de IndexedDB
addRxPlugin(require('pouchdb-adapter-idb'));

export default function App() {
    async function createDB() {
        //Creamos la base de datos
        const db = await createRxDatabase({
            name: 'belendb',
            adapter: 'idb',
            password: 'clinicadentalbelen',
            multiInstance: true,
            eventReduce: false,
            ignoreDuplicate: true
        })
        //Elegimos el lider
        db.waitForLeadership().then(() => {
            document.title = '♛ ' + document.title;
        });
        //Creamos la colección
        const collection = await db.collection({
            name: 'belendb',
            schema: userSchemaDB(),
            
            migrationStrategies: {
                //migramos de la version schemna cero a la uno
                1: function (oldDoc) {
                    oldDoc.time = new Date(oldDoc.time).getTime();
                    return oldDoc;
                },
                //migramos de la version schema 1 a la 2
                2: function (oldDoc) {
                    oldDoc.time = new Date(oldDoc.time).getTime();
                    return oldDoc;
                },
                3: function (oldDoc) {
                    oldDoc.time = new Date(oldDoc.time).getTime();
                    return oldDoc;
                },
                4: function (oldDoc) {
                    oldDoc.time = new Date(oldDoc.time).getTime();
                    return oldDoc;
                },
                5: function (oldDoc) {
                    oldDoc.time = new Date(oldDoc.time).getTime();
                    return oldDoc;
                }
            }
        })
        return collection;
    }
    return createDB();
}








