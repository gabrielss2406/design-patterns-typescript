// -- Classic way to make singleton
import { MyDatabaseClassic } from './db/Classic_MyDatabase';
import { myDatabaseClassic as myDbFromModule1 } from './module_b';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Lucas', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 40 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDbFromModule1);

// -- Other way to make singleton  (using modules)
import { MyDatabaseModule } from './db/Module_myDatabase';
import { myDatabaseModule as myDbFromModule2 } from './module_b';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Lucas', age: 30 });
myDatabaseModule.add({ name: 'Maria', age: 40 });
myDatabaseModule.show();

console.log(myDatabaseModule === myDbFromModule2);