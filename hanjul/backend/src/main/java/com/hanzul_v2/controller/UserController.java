package com.hanzul_v2.controller;

import com.hanzul_v2.domain.user.UserDto;
import com.hanzul_v2.repository.UserRepository;
import com.hanzul_v2.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
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
    @ApiOperation(value = "회원 가입 요청", notes = "회원 가입을 요청한다")
    @PostMapping(value = "signup")
    public void createUser( @ApiParam(name = "user_info",value = "사용자 정보", example = "ssafy 김싸피 1234")
                                @RequestBody UserDto request) throws Exception {
        userService.createUser(request);
    }

    /*아이디 중복체크*/
    @ApiOperation(value="아이디 사용가능 여부 요청(중복검사)")//스웨거 상에 뜨는 내역
    @GetMapping(value = "signup/check/{user_id}")//요청 주소와 파라미터
    public ResponseEntity<Boolean> idUsalbeCheck(
            @ApiParam(value = "사용자 아이디", example = "ssafy")
            @PathVariable(name = "user_id") String userId)throws Exception{
        boolean idUsable = userService.checkId(userId);
        System.out.println("idUsable="+idUsable);

        //상태코드와 응답메세지를 전달하기 위해
        //return new ResponseEntity<Boolean>("suc",usable,HttpStatus.OK);
        return ResponseEntity.ok().body(idUsable);
    }

    //////////////////ADMIN WORKING///////////////////////
    /*회원리스트 요청*/
    @ApiOperation(value = "회원 목록 요청")
    @GetMapping(value = "admin/userInfo")
    public ResponseEntity<List<UserDto>> showUser() throws Exception {
        List<UserDto> userAll = userService.showUser();
        return new ResponseEntity<>(userAll, HttpStatus.OK);
    }

    /*회원삭제 요청*/
    @ApiOperation(value = "회원 삭제 요청")
    @DeleteMapping(value = "admin/delete/{user_id}")
    public ResponseEntity deleteUser(@PathVariable(name = "user_id", value = "삭제 할 아이디") String userId) throws Exception {
        userService.deleteUser(userId);
        System.out.println(userId+"삭제 완료");
        return new ResponseEntity<>(userId+"삭제완료",HttpStatus.OK);
    }



}
