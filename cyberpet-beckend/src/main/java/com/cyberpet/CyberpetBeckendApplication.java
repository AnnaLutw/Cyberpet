package com.cyberpet;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.cyberpet")
@EnableAutoConfiguration
@EnableJpaRepositories("com.cyberpet.repository")


public class CyberpetBeckendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CyberpetBeckendApplication.class, args);
		
	}

}
