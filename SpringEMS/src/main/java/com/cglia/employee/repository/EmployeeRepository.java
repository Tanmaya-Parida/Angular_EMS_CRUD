package com.cglia.employee.repository;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cglia.employee.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee ,Integer>{
	
}
