package com.agemiro.crudspring.exception;

public class RecordNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public RecordNotFoundException(Long id) {
        super("Course not found in id: " + id);
    }

}
