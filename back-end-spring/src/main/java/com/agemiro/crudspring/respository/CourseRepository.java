package com.agemiro.crudspring.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agemiro.crudspring.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>{
    
}
