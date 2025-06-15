package com.nextrip.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    @GetMapping("/greeting")
    public String greeting(@RequestParam("name") String name) {
        return String.format("Hello, %s", name);
    }
    
}
