interface Employee{                                         //! Forma 1 de declarar: Si se pueden agregar nuevas props
    firstName: string;
    lastName: string;
    fullName(): string;
}

type Empleado={                                             //! Forma 2 de declarar, alias tipo no se puede agregar nuevas props
    firstName: string;
    lastName: string;
    fullName(): string;
}


let Trabajador1:Employee{
    firstName='Juan',
    lastName='Perez',
    fullName():string{
        return firstName+""+lastName;
    }
}
