package com.hanzul_v2.domain.common;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel("BasicResponseBody")
public class BasicResponse {
    @ApiModelProperty(name="응답 메시지", example = "정상")
    String message = null;
    @ApiModelProperty(name="응답 코드", example = "200")
    Integer statusCode = null;

    //UserEntity userEntity=null;

//    UserInfoResponse userInfoResponse=null;

    public BasicResponse() {}

    public BasicResponse(Integer statusCode){
        this.statusCode = statusCode;
    }

    public BasicResponse(Integer statusCode, String message){
        this.statusCode = statusCode;
        this.message = message;
//        this.userInfoResponse = userInfoResponse;
    }

    public static BasicResponse of(Integer statusCode, String message) {
        BasicResponse body = new BasicResponse();
        body.message = message;
        body.statusCode = statusCode;
//        body.userInfoResponse = userInfoResponse;
        return body;
    }
}
