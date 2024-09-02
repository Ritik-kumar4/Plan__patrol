package com.ProjectM.projectmanage.controller;


import com.ProjectM.projectmanage.modal.Chat;
import com.ProjectM.projectmanage.modal.Message;
import com.ProjectM.projectmanage.modal.User;
import com.ProjectM.projectmanage.request.CreateMessageRequest;
import com.ProjectM.projectmanage.service.MessageService;
import com.ProjectM.projectmanage.service.ProjectService;
import com.ProjectM.projectmanage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request)
    throws Exception{
        User user=userService.findUserById(request.getSenderId());

        Chat chats=projectService.getProjectById(request.getProjectId()).getChat();
        if(chats==null){
            throw new Exception("Chats not found");
        }
        Message sentMessage=messageService.
                sendMessage(request.getSenderId(), request.getProjectId(), request.getContent());
        return ResponseEntity.ok(sentMessage);
    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId)
        throws Exception{
        List<Message> messages=messageService.getMessagesByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }
}
