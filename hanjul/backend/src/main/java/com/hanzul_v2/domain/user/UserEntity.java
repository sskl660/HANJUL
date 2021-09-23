package com.hanzul_v2.domain.user;

import com.hanzul_v2.domain.histroy.HistroryEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data //getter setter 생성을 위해 롬복 어노테이션 data를 달아준다. (지양하란 얘기도 있는 부분!)
@Entity(name="user")//db 테이블 엔티티로 매핑된다.
@NoArgsConstructor //롬복을 통한 파라미터 없는 기본 생성자 생성
@AllArgsConstructor //롬복을 통한 모튼 필드 값을 파라미터로 받는 생성자 생성
//@RequiredArgsConstructor //롬복을 통한, final이나 @NonNull인 필드 값만 파라미터로 받는 생성자 생성
public class UserEntity {


    @Id//PK각 될 속성값 주석
    private String userId;
    @Column(name="user_name")//선언적 컬럼 매핑
    @NonNull
    private String userName;
    //변수명을 카멜로해도 언더바 형식과 자동 매핑해준다
    private String userPw;

    @OneToMany(mappedBy = "HistoryEntity")
    List<HistroryEntity> userUserId =new ArrayList<>();



}
//그외의 어노테이션
//@Enumerated(EnumType.STRING)//Enum 타입 매핑용 어노테이션,
// 자바 Enum형과 데이터베이스 데이터 변환을 지원, 실제로 Enum형이지만 DB에서는String 저장
//getter setter 를 필드에 붙여주면 롬복이 만들어주기도 한다