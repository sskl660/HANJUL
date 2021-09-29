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
    private String isbn;
    private String imgUrl;
    private String title;
    private String author;
    private String description;
    private String publisher;
    private LocalDateTime published;
    private int avgStar;
}
