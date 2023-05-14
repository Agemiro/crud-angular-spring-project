package com.agemiro.crudspring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.agemiro.crudspring.exception.RecordNotFoundException;
import com.agemiro.crudspring.model.Course;
import com.agemiro.crudspring.respository.CourseRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> list() {
        return courseRepository.findAll();
    }

    public Course findById(@PathVariable @NotNull @Positive Long id) {
        return courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public Course create(@Valid Course course) {
        return courseRepository.save(course);
    }

    public Course update(@NotNull @Positive Long id, @Valid Course course) {
        return courseRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setName(course.getName());
                    recordFound.setCategory(course.getCategory());
                    return courseRepository.save(recordFound);
                }).orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(@PathVariable @NotNull @Positive Long id) {
        courseRepository.delete(courseRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }

}
