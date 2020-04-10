package com.kgisl.crud.learningmanagement.service;

import java.util.List;

import com.kgisl.crud.learningmanagement.entity.User;


public interface UserService {

    public User createUser(User user);
    public List<User> getUsers();
    public User findByUserId(Long id);
    public User updateUser(Long id,User user);
    public void deleteUserById(Long id); 

}