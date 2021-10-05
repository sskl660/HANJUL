package com.hanzul_v2.domain.histroy;

import com.hanzul_v2.domain.user.UserEntity;
import com.hanzul_v2.service.HistoryService;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@ApiModel("HistoryDto")
@NoArgsConstructor
@AllArgsConstructor
public class HistoryDto {
//    @ApiParam(value = "")

    @Data
    @AllArgsConstructor
    @Builder
    public static class RequestSetHistory{
        private String historyOneline;
        private List<String> historyBooksIsbns;
        private String userId;
        private List<String> historyBooksImgurl;
    }

    @Data
    @AllArgsConstructor
    @Builder
    public static class ResponseGetHistories{
        private long historyId;
        private LocalDateTime historyDate;
        private String historyOneline;
        private List<String> histroyBooksIsbns;
        private List<String> historyBooksImgurl;
        private String userId;
    }


    private long historyId;
    private String historyOneline;
    private LocalDateTime historyDate;
    private List<String> historyBooksIsbns=new ArrayList<>();
    private List<String> historyBooksImgurl=new ArrayList<>();
    private String userId;

}

