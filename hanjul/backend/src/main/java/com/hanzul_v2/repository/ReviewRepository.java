package com.hanzul_v2.repository;

import com.hanzul_v2.domain.book.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity,Long> {
    List<ReviewEntity> findByReviewIsbnOrderByReviewDate(String bookIsbn);

}
