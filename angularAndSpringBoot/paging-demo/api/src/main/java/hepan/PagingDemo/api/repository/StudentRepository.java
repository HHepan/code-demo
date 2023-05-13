package hepan.PagingDemo.api.repository;

import hepan.PagingDemo.api.entity.Student;
import hepan.PagingDemo.api.repository.specs.StudentSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface StudentRepository extends PagingAndSortingRepository<Student, Long>, CrudRepository<Student, Long>, JpaSpecificationExecutor<Student> {
    Iterable<Student> findAll();

    Iterable<Student> findByNameContaining(String name);

    default Page<Student> findAllByNameAndSno(String name, String sno, Pageable pageable) {
        Specification<Student> specification = StudentSpecs.containingName(name)
                .and(StudentSpecs.containingSno(sno));

        return this.findAll(specification, pageable);
    };
}
