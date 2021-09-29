package com.hanzul_v2.domain.library;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import java.time.LocalDateTime;

@Data
@ApiModel("LibraryDto")
@NoArgsConstructor
@AllArgsConstructor
public class LibraryDto {
    private long libraryId;
    private String mybookIsbn;
    private LocalDateTime mybookDate;
    private String mybookImgurl;
    private String mybookTitle;
    private String mybookAuthor;
    private String mybookDesc;
    private String mybookPublisher;
    private String mybookPublished;
    private String userId;

    @Data
    @AllArgsConstructor
    @Builder
    public static class ReqLibrary{
        private String mybookIsbn;
        private String userId;
    }

    @Data
    @AllArgsConstructor
    @Builder
    public static class RespLibrary{
        private String mybookIsbn;
        private String mybookImgurl;
        private String mybookTitle;
        private String mybookAuthor;
    }
}
