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
import java.util.Optional;

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

    @Transactional//spring의 선언적 트렌젝션 방법, 정상여부에 따른 commit과 rollback처리
    public boolean checkId(String userId) {
        Optional<UserEntity> userEntity= userRepository.findById(userId);
        return userEntity.isEmpty()? true:false;
    }

    @Transactional
    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }

//    public List<UserDto> getUserAll
}
