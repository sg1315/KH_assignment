package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.BoardDto;
import com.kh.reactbackend.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BoardService {
    public Long createBoard(BoardDto.Create createDto);
    List<BoardDto.Response> findAllBoards();
    BoardDto.Response findBoardById(Long boardNo);
    BoardDto.Response updateBoard(Long boardNo, BoardDto.Update updateDto);
    void deleteBoard(Long boardNo);
}
