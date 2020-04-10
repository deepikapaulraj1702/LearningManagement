package com.kgisl.crud.learningmanagement.repository;

import com.kgisl.crud.learningmanagement.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>{

    
}