package com.hanzul_v2.domain.book;

import com.hanzul_v2.domain.user.UserEntity;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "review")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long reviewId;
    @ApiParam(example = "0")
    private int reviewStar;
    private String reviewComment;
    private String reviewIsbn;
    @CreatedDate
    private LocalDateTime reviewDate;

    @ManyToOne
    @JoinColumn(name = "review_fk_user_id" )
    private UserEntity reviewFkUserId;

}
