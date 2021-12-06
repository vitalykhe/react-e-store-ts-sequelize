export class Department {
  // private readonly id: string
  // private name: string
  private employees: string [] = []

  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`This dept name is ${this.name}. id: ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  getEmployees() {
    return this.employees
  }
}

class ITDepartment extends Department {

  admins: string[]
  private numberOfEmpoyees: number

  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {

  constructor(id: string, private balance: Record<string, number>) {
    super(id, 'Accounting')
  }

  showBalance() {
    return this.balance
  }
  
}
