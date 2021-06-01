import { createRxDatabase, addRxPlugin } from 'rxdb';
import schemaCall from '../schema/schema.call';

//Requerimos el adaptador de IndexedDB
addRxPlugin(require('pouchdb-adapter-idb'));

export default function App() {
    async function databaseCall() {
        //Creamos la base de datos
        const db = await createRxDatabase({
            name: 'callbase',
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
            name: 'callbase',
            schema: schemaCall(),
        })
        return collection;
    }
    return databaseCall();
}