package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Board;

import java.util.List;
import java.util.Optional;

public interface BoardRepository {
    Long save(Board board);
    List<Board> findAllBoards();
    Optional<Board> findBoardById(Long boardNo);
    void deleteBoard(Long boardNo);
}
