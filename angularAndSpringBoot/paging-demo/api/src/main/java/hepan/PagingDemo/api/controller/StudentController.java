package hepan.PagingDemo.api.controller;

import hepan.PagingDemo.api.entity.Student;
import hepan.PagingDemo.api.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("student")
public class StudentController {
    private StudentService studentService;
    @Autowired
    StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

}
