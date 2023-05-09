package hepan.PagingDemo.api.repository;

import hepan.PagingDemo.api.entity.Student;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Long>, JpaSpecificationExecutor<Student> {
    Iterable<Student> findAll();

    Iterable<Student> findByNameContaining(String name);
}
