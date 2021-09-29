package com.hanzul_v2.domain.histroy;

import com.hanzul_v2.domain.user.UserEntity;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.UUID;

@Entity(name = "history")
@NoArgsConstructor
@Getter
public class HistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long historyId;
    @ApiModelProperty(value="한줄")
    private String historyOneline;
    @CreatedDate
    private LocalDateTime historyDate;

    @ElementCollection
    @CollectionTable(name = "history_books_isbn", joinColumns = @JoinColumn(
            name = "history_books_id"))
    private List<String> historyBooksIsbns=new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "history_books_imgurl", joinColumns = @JoinColumn(
            name = "history_books_imgurl_id"))//임의의 테이블을 만들어서 조인과 관리를 해줌
    private List<String> historyBooksImgurl=new ArrayList<>();

//    @ManyToOne
//    private String userUserId;
//    private String oneLine;
//    private String historyBooks;
//    private LocalDateTime historyDate;

//    @JoinTable(name = "user",//조인대상 테입블
//                joinColumns = @JoinColumn(name = "history_fk_user_id"), //왜래키
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//                )

    @ManyToOne
    @JoinColumn(name = "history_fk_user_id" )
    private UserEntity historyFkUserId;

    @Builder
    public HistoryEntity(long historyId, String historyOneline, LocalDateTime historyDate, List<String> historyBooksIsbns, List<String> historyBooksImgurl, UserEntity historyFkUserId) {
        this.historyId = historyId;
        this.historyOneline = historyOneline;
        this.historyDate = historyDate;
        this.historyBooksIsbns = historyBooksIsbns;
        this.historyBooksImgurl = historyBooksImgurl;
        this.historyFkUserId = historyFkUserId;
    }
}
