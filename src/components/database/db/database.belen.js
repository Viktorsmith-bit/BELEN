import { createRxDatabase, addRxPlugin } from 'rxdb';
import schemaBelen from '../schema/schema.belen';

//Requerimos el adaptador de IndexedDB
addRxPlugin(require('pouchdb-adapter-idb'));

export default function App() {
    async function databaseBelen() {
        //Creamos la base de datos
        const db = await createRxDatabase({
            name: 'belenbase',
            adapter: 'idb',
            password: 'clinicabelen',
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
            name: 'belenbase',
            schema: schemaBelen(),
        })
        return collection;
    }
    return databaseBelen();
}