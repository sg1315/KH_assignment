package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.BoardDto;
import com.kh.reactbackend.entity.Board;

public interface BoardService {
    public Long createBoard(BoardDto.Create createDto);
}
