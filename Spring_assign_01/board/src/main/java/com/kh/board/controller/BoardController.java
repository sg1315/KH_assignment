package com.kh.board.controller;

import com.kh.board.controller.dto.response.BoardResponse;
import com.kh.board.entity.Board;
import com.kh.board.mapper.BoardMapper;
import com.kh.board.service.BoardService;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;

    //게시글목록을 가져오는 api
    @GetMapping
    public ResponseEntity<List<BoardResponse.SimpleDTO>> getBoardList() {
        List<Board> boardList = boardService.findAll();

        List<BoardResponse.SimpleDTO> result = new ArrayList<>();
        for (Board board : boardList) {
            result.add(BoardResponse.SimpleDTO.formEntity(board));
        }
        System.out.println(result);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{boardId}")
    public ResponseEntity<BoardResponse.DetailDTO> getBoard(@PathVariable Long boardId) {
        Board board = boardService.getBoardById(boardId);
        if (board == null) {
            return ResponseEntity.notFound().build();
        }
        BoardResponse.DetailDTO dto = BoardResponse.DetailDTO.formEntity(board);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/api/{boardId}")
    public ResponseEntity<?> deleteBoard(@PathVariable Long boardId) {
        System.out.println(boardId);
        boardService.deleteBoard(boardId);
        return ResponseEntity.ok("삭제 완료");
    }

}
