package com.agemiro.crudspring.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import com.agemiro.crudspring.enums.Category;
import com.agemiro.crudspring.enums.Status;
import com.agemiro.crudspring.enums.converters.CategoryConverter;
import com.agemiro.crudspring.enums.converters.StatusConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
//import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
//@Table(name = "cursos")
@SQLDelete(sql = "UPDATE COURSE SET status = 'Inactive' WHERE id = ?")
@Where(clause = "status = 'Active'")
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    @NotNull
    @Length(min = 5, max = 100)
    @Column(length = 100, nullable = false)
    private String name;

    @NotNull
    @Column(length = 10, nullable = false)
    @Convert(converter = CategoryConverter.class)
    private Category category;

    @NotNull
    @Column(length = 10, nullable = false)
    @Convert(converter = StatusConverter.class)
    private Status status = Status.ACTIVE;

}
