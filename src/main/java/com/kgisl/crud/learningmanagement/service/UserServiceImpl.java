package com.kgisl.crud.learningmanagement.service;

import java.util.List;

import javax.transaction.Transactional;

import com.kgisl.crud.learningmanagement.entity.User;
import com.kgisl.crud.learningmanagement.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User findByUserId(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found"));
    }

    public User updateUser(Long id, User username) {
        User t = userRepository.getOne(id);
        t.setUsername(username.getUsername());
t.setUseremail(username.getUseremail());
        return userRepository.save(t);
    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }

}