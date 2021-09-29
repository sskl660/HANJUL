package com.hanzul_v2.controller;

import com.hanzul_v2.domain.library.LibraryDto;
import com.hanzul_v2.repository.LibraryRepository;
import com.hanzul_v2.service.LibraryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(tags = "3.Library")
@RestController
@RequestMapping("/")
class LibraryController {

    @Autowired
    private LibraryRepository libraryRepository;
    @Autowired
    private LibraryService libraryService;

    @ApiOperation(value = "서재 요청")
    @GetMapping(value = "library/{user_id}")
    public ResponseEntity<List<LibraryDto.RespLibrary>> getMybooks(
            @ApiParam(value = "사용자 아이디")
            @PathVariable(name = "user_id") String userId
    )throws Exception{
        List<LibraryDto.RespLibrary> library = libraryService.getMybooks(userId);
        return ResponseEntity.ok().body(library);
    }

}
