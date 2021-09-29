package com.hanzul_v2.domain.book;

import com.hanzul_v2.domain.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "Book")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long reviewId;
    private int reviewStar;
    private String reviewComment;
    private int reviewIsbn;
    @CreatedDate
    private LocalDateTime reviewDate;

    @ManyToOne
    @JoinColumn(name = "review_fk_user_id" )
    private UserEntity reviewFkUserId;

}
