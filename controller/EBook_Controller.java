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
import com.example.demo.model.review;
import com.example.demo.repository.Ebook_Repository;
import com.example.demo.repository.authors_repository;

@RestController
public class EBook_Controller {
	    @Autowired
	    authors_repository arepo;
		@Autowired
		Ebook_Repository repo;
		@GetMapping("/")
		public List<EBook> getAllBook(){
			return repo.findAll();
		}
		
		@PostMapping("/postBook/{nid}")
		public Authors createEBook(@RequestBody EBook x,@PathVariable int nid) {
			Authors at=arepo.findById(nid).orElse(null);
			List<EBook> li1=at.getEbook();
			li1.add(x);
			at.setEbook(li1);
			return arepo.save(at);
		}
      	@PutMapping("/{id}")
      	public String updateEBook(@PathVariable int id,@RequestBody EBook y)
      	{ 
      		if(repo.existsById(id))
      		{
      			EBook e=new EBook();
      			e.setEbook_id(id);
      			e.setEbook_name(y.getEbook_name());
      			e.setEbook_author(y.getEbook_author());
      			e.setEbook_availablility(y.isEbook_availablility());
      			repo.save(e);
      			return "updated";
      		}
      		else
      			return "Id Doesn't exist";
      	}
		@GetMapping("/{id}")
		public Optional<EBook> getEmpbyId(@PathVariable int id){
			Optional<EBook> temp=repo.findById(id);
			return temp;
		}
		
		@DeleteMapping("/{id}")
		public String removeEmp(@PathVariable int id) {
			if(repo.existsById(id)) {
				repo.deleteById(id);
				return "deleted";
			}
			else
				return "Id don't exist";
		}
	

}
