package com.hanzul_v2.domain.book;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@ApiModel("ReviewDto")
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {
    private long reviewId;
    private int reviewStar;
    private String reviewComment;
    private String reviewIsbn;
    private LocalDateTime reviewDate;
    private String userName;

    @Data
    @AllArgsConstructor
    @Builder
    public static class ReqBookDto{
        private int reviewStar;
        private String reviewComment;
        private String reviewIsbn;
//        private LocalDateTime reviewDate;
        private String userId;

    }

    @Data
    @AllArgsConstructor
    @Builder
    public static class RespBookDto{

    }
    @Data
    @AllArgsConstructor
    @Builder
    public static class RespBookReviewDto{
        private int reviewStar;
        private String reviewComment;
        private LocalDateTime reviewDate;
        private String userName;
    }


}
