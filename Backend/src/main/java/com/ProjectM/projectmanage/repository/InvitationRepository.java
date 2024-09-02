package com.ProjectM.projectmanage.repository;

import com.ProjectM.projectmanage.modal.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepository extends JpaRepository<Invitation,Long> {

    Invitation findByToken(String token);
    Invitation findByEmail(String userEmail);
}
