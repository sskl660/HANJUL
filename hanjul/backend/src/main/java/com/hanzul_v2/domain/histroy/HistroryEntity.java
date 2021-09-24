package com.hanzul_v2.domain.histroy;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity(name = "history")
@NoArgsConstructor
public class HistroryEntity {

    @Id
    private long historyId;
//    @ManyToOne
//    private String userUserId;
//    private String oneLine;
//    private String historyBooks;
//    private LocalDateTime historyDate;


}
