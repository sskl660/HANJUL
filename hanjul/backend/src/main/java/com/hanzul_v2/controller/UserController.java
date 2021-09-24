package com.hanzul_v2.controller;

import com.hanzul_v2.domain.user.UserDto;
import com.hanzul_v2.repository.UserRepository;
import com.hanzul_v2.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"1.User"})
@RestController//rest api를 제공하는 컨트롤이란 뜻의 스프링 어노테이션
@RequestMapping("/")//요청의 공통부분 빼기
public class UserController {

    @Autowired//자동 주입을 받기 위한 어노테이션
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

//    @RequestMapping("signup")//signup경로 요청을 처리하기 위한 매핑 어노
////    @PostMapping(value = "singup")
//    public ResponseEntity<List<UserDto>> findUserAll() throws Exception{
//        List<UserDto> userAll= userService
//        return ResponseEntity<>()
//    }

    /*회원가입*/
    @ApiOperation(value = "회원 가입")
    @PostMapping(value = "signup")
    public void createUser(@RequestBody UserDto request) throws Exception {
        userService.createUser(request);
    }

    /*회원리스트 요청*/
    @ApiOperation(value = "회원 목록")
    @GetMapping(value = "admin/userInfo")
    public ResponseEntity<List<UserDto>> showUser() throws Exception {
        List<UserDto> userAll = userService.showUser();
        return new ResponseEntity<>(userAll, HttpStatus.OK);
    }
}
