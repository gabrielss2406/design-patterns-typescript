// -- Classic way to make singleton
import { MyDatabaseClassic } from './db/Classic_myDatabase';

const myDatabaseClassic = MyDatabaseClassic.instance; // Singleton, only one instance
myDatabaseClassic.add({ name: 'Matheus', age: 30 });
myDatabaseClassic.add({ name: 'Marcos', age: 40 });
myDatabaseClassic.add({ name: 'Julio', age: 20 });

export { myDatabaseClassic };

// -- Other way to make singleton (using modules)
import { MyDatabaseModule } from './db/Module_myDatabase';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Lucas', age: 30 });
myDatabaseModule.add({ name: 'Maria', age: 40 });
myDatabaseModule.show();

export { myDatabaseModule };