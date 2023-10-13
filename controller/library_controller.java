package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.Library;

import com.example.demo.repository.library_repository;

public class library_controller {

	@Autowired
	library_repository libraryrepo;
	@GetMapping("/getlibrary")
	public List< Library> getAllLibrary(){
		return libraryrepo.findAll();
	}
	
	@PostMapping("/postlibrary")
	public  Library createLibrary(@RequestBody Library x) {
		return libraryrepo.save(x);
	}
	@GetMapping("/getlibrary/{library_id}")
	public Optional<Library> getlibrarybyId(@PathVariable int library_id){
		Optional<Library> temp=libraryrepo.findById(library_id);
		return temp;
	}
	
	@DeleteMapping("/deletelibrary/{library_id}")
	public String removelibrary(@PathVariable int library_id) {
		if(libraryrepo.existsById(library_id)) {
			libraryrepo.deleteById(library_id);
			return "deleted";
		}
		else
			return "Library_id don't exist";
	}
}
