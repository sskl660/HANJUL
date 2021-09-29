package com.hanzul_v2.repository;

import com.hanzul_v2.domain.histroy.HistoryDto;
import com.hanzul_v2.domain.histroy.HistoryEntity;
import com.hanzul_v2.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.annotation.Nullable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface HistoryRepository extends JpaRepository<HistoryEntity,Long> {

    //전달되는 파라미터를 지정해준다
    Optional<List<HistoryEntity>> findHistoryEntityByHistoryFkUserIdOrderByHistoryDateDesc(@Param(value = "userEntity") UserEntity userEntity);
//    @Query("SELECT historyDto FROM HistoryEntity h")
    @Nullable
    List<HistoryEntity> findTop10ByOrderByHistoryDateDesc();

    @Nullable
    Optional<HistoryEntity> findByHistoryOneline (@Param(value = "historyOneline") String historyOneline);
}
