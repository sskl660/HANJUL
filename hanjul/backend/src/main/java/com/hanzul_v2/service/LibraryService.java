package com.hanzul_v2.service;

import com.hanzul_v2.domain.library.LibraryDto;
import com.hanzul_v2.domain.library.LibraryEntity;
import com.hanzul_v2.domain.user.UserEntity;
import com.hanzul_v2.repository.LibraryRepository;
import com.hanzul_v2.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class LibraryService {

    @Autowired
    private LibraryRepository libraryRepository;
    @Autowired
    private UserRepository userRepository;


    public List<LibraryDto.RespLibrary> getMybooks(String userId){
        //유저 정보 부르기
        Optional<UserEntity> userEntity= userRepository.findById(userId);
        //응답할 dto 리스트
        List<LibraryDto.RespLibrary> respLibraryList =new ArrayList<>();
        //DB에서 값 가져오기
        List<LibraryEntity> libraryEntities= libraryRepository
                .findAllByLibraryFkUserIdOrderByMybookDateDesc(
                        userEntity.orElse(null));
        //빌드해서 응답 dto리스트에 넣기
        for(LibraryEntity libraryEntity : libraryEntities){
            LibraryDto.RespLibrary respLibrary = LibraryDto.RespLibrary.builder()
                    .mybookTitle(libraryEntity.getMybookTitle())
                    .mybookAuthor(libraryEntity.getMybookAuthor())
                    .mybookIsbn(libraryEntity.getMybookIsbn())
                    .mybookImgurl(libraryEntity.getMybookImgurl())
                    .build();
            respLibraryList.add(respLibrary);
        }

        return respLibraryList;
    }
}
