package com.hanzul_v2.domain.book;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.annotation.Nullable;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data //getter setter 생성을 위해 롬복 어노테이션 data를 달아준다. (지양하란 얘기도 있는 부분!)
@Entity(name="tmpbooks")//db 테이블 엔티티로 매핑된다.
@NoArgsConstructor //롬복을 통한 파라미터 없는 기본 생성자 생성
@ApiModel//for swagger
public class TmpbooksEntity {
    @Id
    @ApiModelProperty(value="ISBN")
    @ApiParam(value = "isbn")
    private String isbn;
    private String title;
    private String author;
    private String publisher;
    private String imgUrl;
    private String description;
//    @Nullable
//    @ColumnDefault("0") //default 0
    @ApiParam(example = "0")
    private int avgStar;
}
