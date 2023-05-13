package hepan.PagingDemo.api.config;

import hepan.PagingDemo.api.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import hepan.PagingDemo.api.entity.Student;
import net.bytebuddy.utility.RandomString;

/**
 * 系统启动时向student表中添加测试数据
 */
@Component
public class CommandLineRunnerImpl implements CommandLineRunner {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final StudentRepository studentRepository;
    @Autowired
    public CommandLineRunnerImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    @Override
    public void run(String... args) {
        // 新增60条学生数据
        for (int i = 0; i < 60; i++) {
            this.addStudent("学生" + i, RandomString.make(6));
        }
    }
    private void addStudent(String name, String sno) {
        Student student = new Student();
        student.setName(name);
        student.setSno(sno);
        this.studentRepository.save(student);
    }
}
