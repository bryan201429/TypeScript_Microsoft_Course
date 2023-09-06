// Los tipos de intersección están estrechamente relacionados con los tipos de unión, pero se usan de manera muy diferente. 
// Un tipo de intersección combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes. 
// Una intersección permite agregar tipos existentes de forma conjunta para obtener un tipo único que tenga todas las características que necesita.

// Un tipo de intersección usa el símbolo de y comercial (&) para separar cada tipo.

// Los tipos de intersección se usan con mayor frecuencia con las interfaces.
// En el ejemplo siguiente se definen dos interfaces, Employee y Manager, y luego se crea un tipo de intersección 
// llamado ManagementEmployee que combina las propiedades en ambas interfaces.

interface Employee{
    employeeID: number;
    age:number;
}
interface Manager{
    stockPlan:boolean;
}

type ManagementEmployee=Employee & Manager;

let newManager: ManagementEmployee = {                                      //! Intersección
    employeeID:1234,
    age:25,
    stockPlan:true
}

