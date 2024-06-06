import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  searchQuery = '';
  filteredEmployees : Employee[]=[];


  constructor(private employeeService: EmployeeService,private router:Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees=this.employees;
    });
  }
 
  searchEmployees() {
    if (this.searchQuery.trim() === '') {
      this.filteredEmployees = this.employees;
    } else {
      const searchId = parseInt(this.searchQuery.trim());
      if (!isNaN(searchId)) {
        this.filteredEmployees = this.employees.filter(employee => employee.id === searchId);
      } else {
        this.filteredEmployees = [];
      }
    }
  }
  updateEmployee(id:number){
    
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe((data)=>{
      console.log(data);
      this.getEmployees();
    })
  }
  viewEmployee(id:number){
     this.router.navigate(['employee-details',id]);
  }
  
}
