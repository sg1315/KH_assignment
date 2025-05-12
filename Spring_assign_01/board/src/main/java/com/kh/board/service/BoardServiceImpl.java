package com.kh.board.service;

import com.kh.board.controller.dto.response.BoardResponse;
import com.kh.board.entity.Board;
import com.kh.board.mapper.BoardMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

    private final BoardMapper boardMapper;

    @Override
    public List<Board> findAll() { return boardMapper.findAll(); }

    @Override
    public Board getBoardById(Long boardId) {
        return boardMapper.selectBoardById(boardId);
    }

    @Override
    public int deleteBoard(Long boardId) {
        return boardMapper.deleteBoard(boardId);
    }
}
