interface IPerson {
    firstName: string;
    lastName: string;
}

interface ICustomer extends IPerson {
    creditLimit: number;
}

function isCustomer(person: IPerson | ICustomer): person is ICustomer {
  return (person as ICustomer).creditLimit !== undefined;
}

const p = { firstName: 'Foo', lastName: 'Bar', creditLimit: 42 };
if (isCustomer(p)) { console.log(p.creditLimit); }
