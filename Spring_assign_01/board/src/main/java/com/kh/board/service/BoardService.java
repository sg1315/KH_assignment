package com.kh.board.service;

import com.kh.board.entity.Board;
import java.util.List;

public interface BoardService {
    List<Board> findAll();
    Board getBoardById(Long boardId);
    int deleteBoard(Long boardId);
}
