package com.kh.board.mapper;

import com.kh.board.entity.Board;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> findAll();
}
