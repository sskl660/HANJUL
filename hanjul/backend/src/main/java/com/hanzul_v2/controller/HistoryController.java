package com.hanzul_v2.controller;

import com.hanzul_v2.domain.common.BasicResponse;
import com.hanzul_v2.domain.histroy.HistoryDto;
import com.hanzul_v2.repository.HistoryRepository;
import com.hanzul_v2.service.HistoryService;
import com.hanzul_v2.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(tags = "2.Histroy")
@RestController
@RequestMapping("/")
public class HistoryController {

    @Autowired
    private HistoryRepository historyRepository;
    @Autowired
    private HistoryService historyService;

    @ApiOperation(value = "나의 추천기록(발자취) 목록 요청")
    @GetMapping(value = "history/{user_id}")
    public ResponseEntity<List<HistoryDto.ResponseGetHistories>> requestMyHistories(
            @ApiParam(value = "사용자 아이디")
            @PathVariable(name = "user_id") String userId)throws Exception{
        System.out.println("============주입된 아이디는 "+userId);
        List<HistoryDto.ResponseGetHistories> getHistories = historyService.getMyHistories(userId);
        return ResponseEntity.ok().body(getHistories);
    }

    @ApiOperation(value = "전 유저 추천기록(발자취) 중 최신 10개 목록 요청")
    @GetMapping(value = "history")
    public ResponseEntity<List<String>> requestHistories() {
        List<HistoryDto.ResponseGetHistories> getHistories = historyService.getHistories();
        List<String> onelines= new ArrayList<>();
        for(HistoryDto.ResponseGetHistories history : getHistories){
            String oneline=history.getHistoryOneline();
            System.out.println(oneline);
            onelines.add(oneline);
        }
        return ResponseEntity.ok().body(onelines);
    }

    @ApiOperation(value = "한 줄로 추천된 저장기록 요청")
    @GetMapping(value = "history/search/{oneline}")
    public ResponseEntity<HistoryDto.ResponseGetHistories> requestOnelineResult(
            @ApiParam(value = "불러올 한줄")
            @PathVariable(name = "oneline")String oneline)throws Exception{

        HistoryDto.ResponseGetHistories history = historyService.getHistory(oneline);
        return ResponseEntity.ok().body(history);
    }

    @ApiOperation(value = "발자취 삭제요청")
    @DeleteMapping(value = "history/{history_id}")
    public ResponseEntity<? extends BasicResponse> deleteHistroy(@ApiParam(value = "삭제아이디")
                                                 @PathVariable(value = "history_id")Long historyId)throws Exception{
        historyService.deleteHistory(historyId);
        return ResponseEntity.ok().body(new BasicResponse(200,"suc"));
    }

    @ApiOperation(value = "추천 결과를 발자취에 기록 요청")
    @PostMapping(value = "history/record")
    public ResponseEntity<? extends BasicResponse> autoSetHistory(
            @ApiParam(value = "추천 결과값")
            @RequestBody HistoryDto.RequestSetHistory setHistory
    )throws Exception{
        historyService.setHistory(setHistory);
        return ResponseEntity.ok().body(new BasicResponse(200,"suc"));
    }

    @ApiOperation(value = "발자취 강제 주입")
    @PostMapping(value = "admin/history/record")
    public ResponseEntity<? extends BasicResponse> forseInsertHistory(
            @ApiParam(value = "관리자가 강제로 주입할 추천 결과 값")
            @RequestBody HistoryDto.RequestSetHistory setHistory
    )throws Exception{
        historyService.setHistory(setHistory);
        return ResponseEntity.ok().body(new BasicResponse(200,"suc"));
    }
}
