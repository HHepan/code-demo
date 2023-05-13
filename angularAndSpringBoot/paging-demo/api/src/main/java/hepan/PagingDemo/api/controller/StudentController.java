package hepan.PagingDemo.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import hepan.PagingDemo.api.entity.Student;
import hepan.PagingDemo.api.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
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

    /**
    * 分页接口.
    * @param name     名称
    * @param pageable 分页数据.
    * @return 分页学生
    */
    @GetMapping("page")
    public Page<Student> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false, defaultValue = "") String sno,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.studentService.page(name, sno, pageable);
    }

}
