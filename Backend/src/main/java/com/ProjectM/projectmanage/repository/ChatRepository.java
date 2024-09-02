package com.ProjectM.projectmanage.repository;

import com.ProjectM.projectmanage.modal.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat,Long> {
}
