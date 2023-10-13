package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.EBook;
import com.example.demo.model.review;
import com.example.demo.repository.Ebook_Repository;
import com.example.demo.repository.review_repository;

@RestController
public class review_controller 
{
	@Autowired
	Ebook_Repository erepo;
	@Autowired
	review_repository reviewrepo;
	@PostMapping("/postlibrary/{bid}")
	public EBook createreview(@RequestBody review x,@PathVariable int bid) {
		
		EBook eb=erepo.findById(bid).orElse(null);
		List<review> li=eb.getReviews();
		li.add(x);
		eb.setReviews(li);
		return erepo.save(eb);
	}
	@DeleteMapping("/deletereview/{review_id}")
	public String removelibrary(@PathVariable int review_id) {
		if(reviewrepo.existsById(review_id)) {
			reviewrepo.deleteById(review_id);
			return "deleted";
		}
		else
			return "Review_id don't exist";
	}
}
