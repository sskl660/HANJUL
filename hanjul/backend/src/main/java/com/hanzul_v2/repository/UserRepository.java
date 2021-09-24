package com.hanzul_v2.repository;

import com.hanzul_v2.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository// jpa의 레파지토리라는 어노테이션
public interface UserRepository extends JpaRepository<UserEntity,String> {
    //jpa레파지토리 구현을 위한 상속 <t1,t2> 제네릭 타입에는 t1=엔티티 클래스명, t2=pk속성의 랩퍼클래스 int->Integer
    //상속만하고 어노테이션은 안달아도 된다. 이를 통해 엔티티에 sava, findOne, count, findAll, delet 메서드를 사용핧수 있으며 레코드에 접근한다.
    //이 밖에 엔티티 작업을 하고싶다면 해당 함수를 이곳에서 만든다.

    //기본 메서드를 만들고 user테이블을 스웨거로 읽어보자
//    List<UserDto> findAllByUserId();
}
