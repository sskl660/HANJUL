package com.hanzul_v2.service;

import com.hanzul_v2.domain.user.UserDto;
import com.hanzul_v2.domain.user.UserEntity;
import com.hanzul_v2.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void createUser(UserDto request){
        userRepository.save(request.toEntity());
    }

    @Transactional
    public List<UserDto> showUser(){
        List<UserEntity> userEntityList=userRepository.findAll();
        List<UserDto> userDtoList=new ArrayList<>();
        for(UserEntity userEntity: userEntityList){
            UserDto userDto = new UserDto();
            userDto.setUserId(userEntity.getUserId());
            userDto.setUserName(userEntity.getUserName());
            userDto.setUserPw(userEntity.getUserPw());
            userDtoList.add(userDto);
        }
        return userDtoList;
    }

//    public List<UserDto> getUserAll
}
