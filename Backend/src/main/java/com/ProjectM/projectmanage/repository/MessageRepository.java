package com.ProjectM.projectmanage.repository;

import com.ProjectM.projectmanage.modal.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Long> {
    List<Message> findByChatIdOrderByCreatedAtAsc(Long chatId);
}
