package com.hanzul_v2.domain.user;

import com.hanzul_v2.domain.book.ReviewEntity;
import com.hanzul_v2.domain.histroy.HistoryEntity;
import com.hanzul_v2.domain.library.LibraryEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Data //getter setter 생성을 위해 롬복 어노테이션 data를 달아준다. (지양하란 얘기도 있는 부분!)
@Entity(name="user")//db 테이블 엔티티로 매핑된다.
@NoArgsConstructor //롬복을 통한 파라미터 없는 기본 생성자 생성
@ApiModel//for swagger
//@AllArgsConstructor //롬복을 통한 모튼 필드 값을 파라미터로 받는 생성자 생성
//@RequiredArgsConstructor //롬복을 통한, final이나 @NonNull인 필드 값만 파라미터로 받는 생성자 생성
public class UserEntity {


    @Id//PK각 될 속성값 주석
    @ApiModelProperty(value="아이디")
    @ApiParam(value = "사용자 이름", required = false, example = "홍길동")
    private String userId;
    @Column(name="user_name")//선언적 컬럼 매핑
    @NonNull
    @ApiModelProperty(required = true, value="이름")
    private String userName;
    //변수명을 카멜로해도 언더바 형식과 자동 매핑해준다
    @ApiModelProperty(required = true, value="비밀번호")
    private String userPw;

    //한명의 유저는 여러 히스토리에서 fk된다
    @OneToMany(mappedBy = "historyFkUserId")//history 의 fk 필드명과 일치
    List<HistoryEntity> historyEntityList =new ArrayList<>();

    @OneToMany(mappedBy = "libraryFkUserId")
    List<LibraryEntity> libraryEntityList =new ArrayList<>();

    @OneToMany(mappedBy = "reviewFkUserId")
    List<ReviewEntity> reviewFkUserId =new ArrayList<>();


    @Builder
    public UserEntity(String userId, @NonNull String userName, String userPw) {
        this.userId = userId;
        this.userName = userName;
        this.userPw = userPw;
    }
}
//그외의 어노테이션
//@Enumerated(EnumType.STRING)//Enum 타입 매핑용 어노테이션,
// 자바 Enum형과 데이터베이스 데이터 변환을 지원, 실제로 Enum형이지만 DB에서는String 저장
//getter setter 를 필드에 붙여주면 롬복이 만들어주기도 한다