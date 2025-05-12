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
    public Board findOne(Long boardId) {
        return boardMapper.findOne(boardId);
    }

    @Override
    public int save(Board board) { return boardMapper.save(board); }

    @Override
    public int delete(Long boardId) {
        return boardMapper.delete(boardId);
    }

    @Override
    public Long update(Board board) {
        boardMapper.update(board);
        return board.getBoardId();
    }
}
