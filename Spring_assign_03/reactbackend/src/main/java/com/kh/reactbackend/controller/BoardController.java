package com.kh.reactbackend.controller;

import com.kh.reactbackend.dto.BoardDto;
import com.kh.reactbackend.service.BoardService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<List<BoardDto>> getBoards() {
        return null;
    }

}
