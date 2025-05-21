package com.kh.jpa.controller;

import com.kh.jpa.dto.BoardDto;
import com.kh.jpa.dto.PageResponse;
import com.kh.jpa.entity.Board;
import com.kh.jpa.service.BoardService;
import com.kh.jpa.utils.Template;
import jakarta.persistence.PrePersist;
import jakarta.servlet.http.HttpSession;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    
    //게시글 전체 조회
    /*
        page 보고자하는 페이지 번호
        size 몇개씩 가지고 올것인지
        sort 정렬 기준 : 속성, 방향(boardTite, desc)
     */
    @GetMapping
    public ResponseEntity<PageResponse<BoardDto.Response>> getBoards(
            @PageableDefault(size = 5, sort = "createDate", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok(new PageResponse<>(boardService.getBoardList(pageable)));
    }

    //게시글 조회
    @GetMapping("/{boardNo}")
    public ResponseEntity<BoardDto.Response> getBoard(@PathVariable Long boardNo) {
        return ResponseEntity.ok(boardService.getBoardDetail(boardNo));
    }

    //게시글 등록
    @PostMapping
    public ResponseEntity<Long> addBoard(@ModelAttribute BoardDto.Create createDto) throws Exception {
        Long BoardNo = boardService.createBoard(createDto);
        return ResponseEntity.ok(BoardNo);
    }

    //게시글 삭제
    @DeleteMapping("/{boardNo}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long boardNo) {
        boardService.deleteBoard(boardNo);
        return ResponseEntity.ok().build();
    }

    //게시글 삭제
    @PatchMapping("/{boardNo}")
    public ResponseEntity<BoardDto.Response> updateBoard(
            @PathVariable Long boardNo,
            @ModelAttribute BoardDto.Update updateBoard) throws IOException {

        return ResponseEntity.ok(boardService.updateBoard(boardNo, updateBoard));
    }

}
