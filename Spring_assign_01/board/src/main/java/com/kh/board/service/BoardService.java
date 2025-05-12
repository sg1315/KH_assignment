package com.kh.board.service;

import com.kh.board.entity.Board;
import java.util.List;

public interface BoardService {
    List<Board> findAll();
    Board findOne(Long boardId);
    int save(Board board);
    int delete(Long boardId);
    Long update(Board board);
}
