package com.agemiro.crudspring.dto.mapper;

import org.springframework.stereotype.Component;

import com.agemiro.crudspring.dto.CourseDTO;
import com.agemiro.crudspring.model.Course;

@Component
public class CourseMapper {

    public CourseDTO toDTO(Course course){

        if(course == null){
            return null;
        }

        return new CourseDTO(course.getId(), course.getName(), course.getCategory());
    }

    public static Course toEntity(CourseDTO courseDTO){

        if(courseDTO == null){
            return null;
        }

        Course course = new Course();
        if(courseDTO.id() != null){
            course.setId(courseDTO.id());
        }
        course.setName(courseDTO.name());
        course.setCategory(courseDTO.category());
        course.setStatus("Active");
        return course;
    }
    
}
