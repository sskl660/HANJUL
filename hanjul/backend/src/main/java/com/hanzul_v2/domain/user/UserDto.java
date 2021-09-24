package com.hanzul_v2.domain.user;


import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@ApiModel("UserDto")
@NoArgsConstructor
public class UserDto {
    private String userId;
    private String userName;
    private String userPw;

    public UserEntity toEntity(){
        UserEntity userEntity = UserEntity.builder()
                .userId(userId).userName(userName)
                .userPw(userPw).build();
        return userEntity;
    }

    public UserDto(String userId, String userName, String userPw) {
        this.userId = userId;
        this.userName = userName;
        this.userPw = userPw;
    }
}
