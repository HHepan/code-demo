package hepan.PagingDemo.api.service;

import hepan.PagingDemo.api.entity.Student;
import hepan.PagingDemo.api.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Objects;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {
    private StudentRepository studentRepository;
    StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

}
