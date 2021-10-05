package com.hanzul_v2.service;

import com.hanzul_v2.domain.histroy.HistoryDto;
import com.hanzul_v2.domain.histroy.HistoryEntity;
import com.hanzul_v2.domain.user.UserDto;
import com.hanzul_v2.domain.user.UserEntity;
import com.hanzul_v2.repository.HistoryRepository;
import com.hanzul_v2.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class HistoryService {
    @Autowired
    private HistoryRepository historyRepository;
    @Autowired
    private UserRepository userRepository;


    //나의 발자취 목록
    public List<HistoryDto.ResponseGetHistories> getMyHistories(String userId){
        Optional<UserEntity> userEntity=userRepository.findById(userId);
        Optional<List<HistoryEntity>> getHistories= historyRepository.findHistoryEntityByHistoryFkUserIdOrderByHistoryDateDesc(userEntity.orElse(null));
        List<HistoryDto.ResponseGetHistories> histories= new ArrayList<>();
//        List<HistoryEntity> historyEntities = getHistories.orElse(null);
        for(HistoryEntity historyEntity : getHistories.orElse(null)){
            HistoryDto.ResponseGetHistories history = HistoryDto.ResponseGetHistories
                    .builder().historyId(historyEntity.getHistoryId())
                    .historyDate(historyEntity.getHistoryDate())
                    .historyOneline(historyEntity.getHistoryOneline())
                    .histroyBooksIsbns(historyEntity.getHistoryBooksIsbns())
                    .historyBooksImgurl(historyEntity.getHistoryBooksImgurl())
            .build();
            histories.add(history);
        }
        return histories;
    }

    //전 유저 발자취 목록중 최신 10개
    public List<HistoryDto.ResponseGetHistories> getHistories(){
//        List<HistoryDto> getHistories =historyRepository.findTop10ByOrderByHistoryDate();
        List<HistoryEntity> getHistories =historyRepository.findTop10ByOrderByHistoryDateDesc();
        List<HistoryDto.ResponseGetHistories> histories10= new ArrayList<>();
//        for(HistoryDto historyDto : getHistories.orElse(null)){
        for(HistoryEntity historyEntity : getHistories){
            HistoryDto.ResponseGetHistories history = HistoryDto.ResponseGetHistories
                    .builder().historyId(historyEntity.getHistoryId())
                    .historyDate(historyEntity.getHistoryDate())
                    .historyOneline(historyEntity.getHistoryOneline())
                    .histroyBooksIsbns(historyEntity.getHistoryBooksIsbns())
                    .historyBooksImgurl(historyEntity.getHistoryBooksImgurl())
                    .build();
            histories10.add(history);
        }
        return histories10;
    }

    //한 줄로 추천한 사전 결과 요청
    public HistoryDto.ResponseGetHistories getHistory(String oneline){
        Optional<HistoryEntity> history =historyRepository.findTop1ByHistoryOnelineOrderByHistoryDate(oneline);
        HistoryEntity historyEntity=history.orElse(null);
        HistoryDto.ResponseGetHistories responseGetHistory =HistoryDto.ResponseGetHistories.builder()
                .historyId(historyEntity.getHistoryId())
                .historyOneline(historyEntity.getHistoryOneline())
                .histroyBooksIsbns(historyEntity.getHistoryBooksIsbns())
                .historyBooksImgurl(historyEntity.getHistoryBooksImgurl())
                .build();
        return responseGetHistory;
    }

    //히스토리 삭제 요청
    public void deleteHistory(Long historyId){
        historyRepository.deleteById(historyId);
    }

    //히스토리 전체 삭제 요청
    public void deleteAllHistory(){
        historyRepository.deleteAll();
    }
    //히스토리 기록요청
    public void setHistory(HistoryDto.RequestSetHistory setHistory){
        Optional<UserEntity> user= userRepository.findById(setHistory.getUserId());
        UserEntity userEntity=user.orElse(null);
        HistoryEntity historyEntity = HistoryEntity.builder()
                .historyOneline(setHistory.getHistoryOneline())
                .historyFkUserId(userEntity)
                .historyDate(LocalDateTime.now())
                .historyBooksIsbns(setHistory.getHistoryBooksIsbns())
                .historyBooksImgurl(setHistory.getHistoryBooksImgurl())
                .build();
        System.out.println(historyEntity.toString());
        historyRepository.save(historyEntity);
        ///historyDto.sava(historyDto); 이건 안된다 DAO로 저장하기 위해선 DTO를 엔티티로 보낼 필요가 있다.
    }


}
