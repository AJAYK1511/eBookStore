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
public class Authors 
{
	@Id
	private int author_id;
	private String author_name;
	private String author_mailid;
	private long author_mobile;
	private int books_published;
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name ="fk_author_id",referencedColumnName="author_id")
	List<EBook> ebook;
}