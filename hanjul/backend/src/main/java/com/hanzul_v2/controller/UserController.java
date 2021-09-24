package com.hanzul_v2.controller;

import com.hanzul_v2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//webhook test
@RestController//rest api를 제공하는 컨트롤이란 뜻의 스프링 어노테이션
@RequestMapping("/")//요청의 공통부분 빼기
public class UserController {

    @Autowired//자동 주입을 받기 위한 어노테이션
    private UserRepository userRepository;

    @RequestMapping("signup")//signup경로 요청을 처리하기 위한 매핑 어노
//    @PostMapping(value = "singup")
    public void join(){



    }
}
