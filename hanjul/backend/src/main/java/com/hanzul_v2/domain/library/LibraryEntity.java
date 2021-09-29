package com.hanzul_v2.domain.library;

import com.hanzul_v2.domain.user.UserEntity;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "Library")
@NoArgsConstructor
@Getter
public class LibraryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long libraryId;
    private int mybookIsbn;
    @CreatedDate
    private LocalDateTime mybookDate;
    private String mybookImgurl;
    private String mybookTitle;
    private String mybookAuthor;
    private String mybookDesc;
    private String mybookPublisher;
    private String mybookPublished;

    @ManyToOne
    @JoinColumn(name = "library_fk_user_id" )
    private UserEntity libraryFkUserId;

    @Builder
    public LibraryEntity(long libraryId, int mybookIsbn, LocalDateTime mybookDate, String mybookImgurl, String mybookTitle, String mybookAuthor, String mybookDesc, String mybookPublisher, String mybookPublished, UserEntity libraryFkUserId) {
        this.libraryId = libraryId;
        this.mybookIsbn = mybookIsbn;
        this.mybookDate = mybookDate;
        this.mybookImgurl = mybookImgurl;
        this.mybookTitle = mybookTitle;
        this.mybookAuthor = mybookAuthor;
        this.mybookDesc = mybookDesc;
        this.mybookPublisher = mybookPublisher;
        this.mybookPublished = mybookPublished;
        this.libraryFkUserId = libraryFkUserId;
    }
}
