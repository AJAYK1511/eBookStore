package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Authors;
import com.example.demo.model.EBook;
import com.example.demo.repository.Ebook_Repository;
import com.example.demo.repository.authors_repository;

@RestController
public class authors_controller {
	@Autowired
	authors_repository authrepo;
	@GetMapping("/getauthors")
	public List<Authors> getAllAuthors(){
		return authrepo.findAll();
	}
	
	@PostMapping("/postauthor")
	public Authors createAuthor(@RequestBody Authors x) {
		return authrepo.save(x);
	}
	@GetMapping("/getauthor/{id}")
	public Optional<Authors> getauthorbyId(@PathVariable int id){
		Optional<Authors> temp=authrepo.findById(id);
		return temp;
	}
	
	@DeleteMapping("/deleteauthor/{id}")
	public String removeauthor(@PathVariable int id) {
		if(authrepo.existsById(id)) {
			authrepo.deleteById(id);
			return "deleted";
		}
		else
			return "Id don't exist";
	}
  	
}
