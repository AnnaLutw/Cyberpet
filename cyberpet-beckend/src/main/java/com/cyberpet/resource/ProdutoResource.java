package com.cyberpet.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cyberpet.domain.Produto;
import com.cyberpet.service.ProdutoService;

@CrossOrigin
@RestController()
@RequestMapping(value="/api/produtos", produces= MediaType.APPLICATION_JSON_VALUE )
public class ProdutoResource {
	
	@Autowired
	private ProdutoService service;
	
	@GetMapping("/findAll")
	public List<Produto> findAll(){
		List<Produto> produtos = service.findAll();
		return produtos;
	}
	
	@PostMapping(value="/save", consumes = MediaType.APPLICATION_JSON_VALUE)
	public Produto save(@RequestBody Produto produto) {
		return service.save(produto);
	}
}
