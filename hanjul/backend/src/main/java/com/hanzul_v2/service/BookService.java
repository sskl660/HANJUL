package com.hanzul_v2.service;

import com.hanzul_v2.domain.book.ReviewDto;
import com.hanzul_v2.domain.book.ReviewEntity;
import com.hanzul_v2.domain.library.LibraryDto;
import com.hanzul_v2.domain.library.LibraryEntity;
import com.hanzul_v2.domain.user.UserEntity;
import com.hanzul_v2.repository.LibraryRepository;
import com.hanzul_v2.repository.ReviewRepository;
import com.hanzul_v2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private LibraryRepository libraryRepository;

    public List<ReviewDto.RespBookReviewDto> getBookReviews(int bookIsbn){
        //응답
        List<ReviewDto.RespBookReviewDto> respBookReviewDtoList=new ArrayList<>();
        //조회
        List<ReviewEntity> reviewEntityList= reviewRepository.findByReviewIsbnOrderByReviewDate(bookIsbn);
        //빌드
        for(ReviewEntity reviewEntity : reviewEntityList){
            ReviewDto.RespBookReviewDto respBookReviewDto = ReviewDto.RespBookReviewDto.builder()
                    .userName(reviewEntity.getReviewFkUserId().getUserName())
                    .reviewStar(reviewEntity.getReviewStar())
                    .reviewComment(reviewEntity.getReviewComment())
                    .build();
            respBookReviewDtoList.add(respBookReviewDto);
        }
        return respBookReviewDtoList;
    }

    public void setScrap(LibraryDto.ReqLibrary reqLibrary){
        //DAO 전송을 위해 엔티티화 시키는 중
        LibraryEntity libraryEntity = LibraryEntity.builder()
                .mybookIsbn(reqLibrary.getMybookIsbn())
                .mybookDate(LocalDateTime.now())
                .mybookImgurl(reqLibrary.getMybookImgurl())
                .mybookTitle(reqLibrary.getMybookTitle())
                .mybookAuthor(reqLibrary.getMybookAuthor())
                .mybookDesc(reqLibrary.getMybookDesc())
                .build();
        libraryRepository.save(libraryEntity);
    }

    public Boolean isScraped(int isbn, String userId){
        //조회
        Optional<UserEntity> optionalUserEntity = userRepository.findById(userId);
        UserEntity userEntity = optionalUserEntity.orElse(null);
        List<LibraryEntity> libraryEntityList=libraryRepository
                .findByLibraryFkUserIdAndMybookIsbn(userEntity, isbn);
        if(libraryEntityList.isEmpty()) return false;
        else return true;
    }

    public void cancelScraped(int isbn, String userId){
        //조회
        Optional<UserEntity> optionalUserEntity = userRepository.findById(userId);
        UserEntity userEntity = optionalUserEntity.orElse(null);
        //삭제
        libraryRepository.deleteByLibraryFkUserIdAndMybookIsbn(userEntity,isbn);
    }

    public Boolean setReview(ReviewDto.ReqBookDto reqBookDto){
        //조회
        Optional<UserEntity> optionalUserEntity = userRepository.findById(reqBookDto.getUserName());
        UserEntity userEntity = optionalUserEntity.orElse(null);
        //변환
        ReviewEntity reviewEntity = ReviewEntity.builder()
                .reviewStar(reqBookDto.getReviewStar())
                .reviewComment(reqBookDto.getReviewComment())
                .reviewIsbn(reqBookDto.getReviewIsbn())
                .reviewDate(LocalDateTime.now())
                .reviewFkUserId(userEntity)
                .build();
        if(reviewRepository.save(reviewEntity)!=null) return true;
        else  return false;
    }
}
