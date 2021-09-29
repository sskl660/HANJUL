package com.hanzul_v2.repository;

import com.hanzul_v2.domain.book.TmpbooksEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TmpbooksRepository extends JpaRepository<TmpbooksEntity,String> {
    List<TmpbooksEntity> findTop100ByOrderByImgUrl();
}
