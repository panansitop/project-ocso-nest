import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  private employees: CreateEmployeeDto[] = [
  {
    id:1,
    name: "Alberto",
    lastName: "Costas",
    phoneNumber: "xxx443221"
  },
{
  id:2,
  name: "José",
  lastName: "Pérez",
  phoneNumber: "4424213x"
}
]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = this.employees.length + 1
    //0 1
    // 2
    this.employees.push(createEmployeeDto);
    return createEmployeeDto;
  }

  findAll() {
    //Retorne todos los empleados

    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.filter((employee)=> employee.id === id)[0];
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate = this.findOne(id);
    employeeToUpdate = {
      ...employeeToUpdate,
      ...updateEmployeeDto,
    }
    this.employees = this.employees.map((employee)=>{
      if(employee.id === id){
        employee = employeeToUpdate
      }
      return employee
    })
    return employeeToUpdate;
    }

  remove(id: number) {
    this.employees = this.employees.filter((employee) => employee.id === id);
    return this.employees;
  }
}
