package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor  
@Entity
public class review
{
	@Id
	  private int review_id;
	  private int reviewedby;
	  private String review_description;
	  private int review_stars;
}