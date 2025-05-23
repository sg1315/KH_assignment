package com.kh.jpa.repository;

import com.kh.jpa.entity.Board;
import com.kh.jpa.enums.CommonEnums;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardRepositoryV2 extends JpaRepository<Board, Long> {
    Page<Board> findByStatus(CommonEnums.Status status, Pageable pageable);
    Optional<Board> findById(Long boardNo);
    Long save(Board board);
    void delete(Board board);
}
