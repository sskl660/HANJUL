package com.hanzul_v2.service;

import com.hanzul_v2.domain.book.BookDto;
import com.hanzul_v2.domain.book.ReviewDto;
import com.hanzul_v2.domain.book.ReviewEntity;
import com.hanzul_v2.domain.book.TmpbooksEntity;
import com.hanzul_v2.domain.library.LibraryDto;
import com.hanzul_v2.domain.library.LibraryEntity;
import com.hanzul_v2.domain.user.UserEntity;
import com.hanzul_v2.repository.LibraryRepository;
import com.hanzul_v2.repository.ReviewRepository;
import com.hanzul_v2.repository.TmpbooksRepository;
import com.hanzul_v2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
    @Autowired
    private TmpbooksRepository tmpbooksRepository;



    public List<BookDto> giveDump(){
        List<TmpbooksEntity> tmpbooksEntityList =tmpbooksRepository.findTop100ByOrderByImgUrl();
        List<BookDto> bookDtoList =new ArrayList<>();
        for(int i=0;i<20;i++){
//            int idx= (int)(Math.random()*20);
            int idx=i;
            BookDto bookDto= BookDto.builder()
                    .isbn(tmpbooksEntityList.get(idx).getIsbn())
                    .imgUrl(tmpbooksEntityList.get(idx).getImgUrl())
                    .author(tmpbooksEntityList.get(idx).getAuthor())
                    .title(tmpbooksEntityList.get(idx).getTitle())
                    .description(tmpbooksEntityList.get(idx).getDescription())
                    .avgStar(tmpbooksEntityList.get(idx).getAvgStar())
                    .publisher(tmpbooksEntityList.get(i).getPublisher())
                    .build();
            bookDtoList.add(bookDto);
        }
        return bookDtoList;
    }

    public BookDto getBookDetail(String bookIsbn){
        //조회
        TmpbooksEntity tmpbooksEntity = tmpbooksRepository.findById(bookIsbn).orElse(null);
        //빌드
        BookDto resBookDto=BookDto.builder()
                .isbn(tmpbooksEntity.getIsbn())
                .imgUrl(tmpbooksEntity.getImgUrl())
                .title(tmpbooksEntity.getTitle())
                .author(tmpbooksEntity.getAuthor())
                .description(tmpbooksEntity.getDescription())
                .publisher(tmpbooksEntity.getPublisher())
                .avgStar(tmpbooksEntity.getAvgStar())
                .build();
        return resBookDto;

    }

    public List<ReviewDto.RespBookReviewDto> getBookReviews(String bookIsbn){
        //응답
        List<ReviewDto.RespBookReviewDto> respBookReviewDtoList=new ArrayList<>();
        //조회
        List<ReviewEntity> reviewEntityList= reviewRepository.findByReviewIsbnOrderByReviewDateDesc(bookIsbn);
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
        //유저정보
        Optional<UserEntity> optionalUserEntity = userRepository.findById(reqLibrary.getUserId());
        UserEntity userEntity = optionalUserEntity.orElse(null);
        //책정보
        TmpbooksEntity tmpbooksEntity = tmpbooksRepository.findById(reqLibrary.getMybookIsbn()).orElse(null);
        //엔티티화
        LibraryEntity libraryEntity = LibraryEntity.builder()
                .mybookIsbn(tmpbooksEntity.getIsbn())
                .mybookDate(LocalDateTime.now())
                .mybookImgurl(tmpbooksEntity.getImgUrl())
                .mybookTitle(tmpbooksEntity.getTitle())
                .mybookAuthor(tmpbooksEntity.getAuthor())
                .mybookDesc(tmpbooksEntity.getDescription())
                .libraryFkUserId(userEntity)
                .build();
        libraryRepository.save(libraryEntity);
    }

    public Boolean isScraped(String isbn, String userId){
        //조회
        Optional<UserEntity> optionalUserEntity = userRepository.findById(userId);
        UserEntity userEntity = optionalUserEntity.orElse(null);
        List<LibraryEntity> libraryEntityList=libraryRepository
                .findByLibraryFkUserIdAndMybookIsbn(userEntity, isbn);
        if(libraryEntityList.isEmpty()) return false;
        else return true;
    }

    public void cancelScraped(String isbn, String userId){
        //조회
        Optional<UserEntity> optionalUserEntity = userRepository.findById(userId);
        UserEntity userEntity = optionalUserEntity.orElse(null);
        //삭제
        libraryRepository.deleteByLibraryFkUserIdAndMybookIsbn(userEntity,isbn);
    }

    public Boolean setReview(ReviewDto.ReqBookDto reqBookDto){
        //조회
        Optional<UserEntity> optionalUserEntity = userRepository.findById(reqBookDto.getUserId());
        UserEntity userEntity = optionalUserEntity.orElse(null);
        System.out.println(userEntity.toString());
        //변환
        ReviewEntity reviewEntity = ReviewEntity.builder()
                .reviewStar(reqBookDto.getReviewStar())
                .reviewComment(reqBookDto.getReviewComment())
                .reviewIsbn(reqBookDto.getReviewIsbn())
                .reviewDate(LocalDateTime.now())
                .reviewFkUserId(userEntity)
                .build();
        if(reviewRepository.save(reviewEntity)!=null){
            //별점 평균내기
            List<ReviewEntity> reviewEntityList = reviewRepository.findByReviewIsbnOrderByReviewDateDesc(reqBookDto.getReviewIsbn());
            double  avg=0;//반올림을 위해선 더블
            for(ReviewEntity review : reviewEntityList ){
                avg+=review.getReviewStar();
                System.out.println(avg);
            }
            avg=Math.round(avg/reviewEntityList.size());
            System.out.println(avg);
            Optional<TmpbooksEntity> tmpbooksEntity = tmpbooksRepository.findById(reqBookDto.getReviewIsbn());
            TmpbooksEntity updatedTmpbooksEntity = tmpbooksEntity.orElse(null);
            updatedTmpbooksEntity.setAvgStar((int)avg);
            System.out.println(updatedTmpbooksEntity.getAvgStar());
            tmpbooksRepository.save(updatedTmpbooksEntity);
            return true;
        }
        else  return false;
    }

    @Transactional
    public Integer removeReview(String isbn, String userId) {
        Optional<UserEntity> userEntity = userRepository.findById(userId);
        return reviewRepository.deleteByReviewIsbnAndReviewFkUserId(isbn, userEntity.orElse(null));
    }

    @Transactional
    public Integer removeAllReview(String isbn) {
//        Optional<UserEntity> userEntity = userRepository.findById(isbn);
//        Boolean aBoolean = reviewRepository.deleteByReviewIsbnAndReviewFkUserId(isbn, userEntity.orElse(null));
        return reviewRepository.deleteAllByReviewIsbn(isbn);

    }

}
