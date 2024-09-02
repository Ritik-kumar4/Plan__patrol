package com.ProjectM.projectmanage.repository;

import com.ProjectM.projectmanage.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {


    User findByEmail(String email);

}
