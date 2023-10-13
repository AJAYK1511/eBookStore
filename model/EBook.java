package com.example.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class EBook
{
	@Id
	private int ebook_id;
	private String ebook_name;
	private String ebook_author;
	private boolean ebook_availablility;
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_ebook_id",referencedColumnName="ebook_id")
	List <review> reviews;
}