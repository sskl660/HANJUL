package com.hanzul_v2.domain.book;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@ApiModel("BookDto")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookDto {
    private int bookIsbn;
    private String bookImgurl;
    private String bookTitle;
    private String bookAuthor;
    private String bookDesc;
    private String bookPublisher;
    private LocalDateTime bookPublished;
}
