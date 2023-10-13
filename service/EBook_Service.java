package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.EBook;
import com.example.demo.repository.Ebook_Repository;

@Service
public class EBook_Service {
     @Autowired
      Ebook_Repository repository;
       public Optional<EBook> getStudent(int id){
	   return repository.findById(id);
      }
       public String updateEBook(EBook as)
       {
    	   repository.save(as);
    	   return "Updated";
       }
    public String deleteDetails(int id) {
	repository.deleteById(id);
	return "deleted";
    }

 

}

