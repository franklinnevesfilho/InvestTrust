package com.investtrust.subsciptionmanager.repo;

import com.investtrust.subsciptionmanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    void deleteEmployeeById(Long id); // spring auto-magically creates it
    Optional<Employee> findEmployeeById(Long id); // spring auto-magically creates it

}
