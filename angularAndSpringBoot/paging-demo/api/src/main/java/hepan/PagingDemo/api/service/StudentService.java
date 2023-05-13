package hepan.PagingDemo.api.service;


import hepan.PagingDemo.api.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface StudentService {

    Page<Student> page(String name, String sno, Pageable pageable);
}
