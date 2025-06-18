package com.kh.reactbackend.controller;

import com.kh.reactbackend.dto.BoardDto;
import com.kh.reactbackend.dto.PageResponse;
import com.kh.reactbackend.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping
    public ResponseEntity<String> createBoard(@RequestBody BoardDto.Create createDto) {
        Long BoardNo = boardService.createBoard(createDto);

        return ResponseEntity.ok(BoardNo.toString());
    }

    @GetMapping
    public ResponseEntity<List<BoardDto.Response>> getAllBoards() {
        return ResponseEntity.ok(boardService.findAllBoards());
    }

    @GetMapping("/{boardNo}")
    public ResponseEntity<BoardDto.Response> getBoard(@PathVariable Long boardNo) {
        return ResponseEntity.ok(boardService.findBoardById(boardNo));
    }

    @PatchMapping("/{boardNo}")
    public ResponseEntity<BoardDto.Response> updateBoard(@PathVariable Long boardNo, @RequestBody BoardDto.Update updateDto) {
        return ResponseEntity.ok(boardService.updateBoard(boardNo, updateDto));
    }

    @DeleteMapping("/{boardNo}")
    public ResponseEntity<String> deleteBoard(@PathVariable Long boardNo) {
        boardService.deleteBoard(boardNo);
        return ResponseEntity.ok().build();
    }

}
