package com.kh.reactbackend.controller;

import com.kh.reactbackend.dto.ReplyDto;
import com.kh.reactbackend.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/replys")
@RequiredArgsConstructor
public class ReplyController {

    private final ReplyService replyService;

    @PostMapping
    public ResponseEntity<String> createReply(@RequestBody ReplyDto.Create createDto) {
        Long ReplyNo = replyService.createReply(createDto);

        return ResponseEntity.ok(ReplyNo.toString());
    }

    @GetMapping("/{boardNo}")
    public ResponseEntity<List<ReplyDto.Response>> getReplies(@PathVariable Long boardNo) {
        return ResponseEntity.ok(replyService.findAllReplies(boardNo));
    }
}
