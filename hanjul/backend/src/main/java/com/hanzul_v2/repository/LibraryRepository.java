package com.hanzul_v2.repository;

import com.hanzul_v2.domain.library.LibraryEntity;
import com.hanzul_v2.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface LibraryRepository extends JpaRepository<LibraryEntity, Long> {

    List<LibraryEntity> findAllByLibraryFkUserIdOrderByMybookDateDesc(UserEntity userEntity);
    List<LibraryEntity> findByLibraryFkUserIdAndMybookIsbn(UserEntity userEntity,String isbn);
    @Transactional
    void deleteByLibraryFkUserIdAndMybookIsbn(UserEntity userEntity, String isbn);
}
