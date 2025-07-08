package com.sqlix.sqlix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.sqlix.sqlix", "repo", "login", "entity","config"})
@EnableJpaRepositories(basePackages = "repo")
@EntityScan(basePackages = "entity")
public class SqlixApplication {

    public static void main(String[] args) {
        SpringApplication.run(SqlixApplication.class, args);
    }
}
