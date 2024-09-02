package com.ProjectM.projectmanage.service;

import com.ProjectM.projectmanage.modal.PlanType;
import com.ProjectM.projectmanage.modal.Subscription;
import com.ProjectM.projectmanage.modal.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);
}
