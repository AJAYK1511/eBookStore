package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.EBook;
@Repository
public interface Ebook_Repository extends JpaRepository<EBook,Integer>{
   
}
