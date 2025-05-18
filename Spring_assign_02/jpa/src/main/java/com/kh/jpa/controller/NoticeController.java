package com.kh.jpa.controller;

import com.kh.jpa.dto.NoticeDto;
import com.kh.jpa.service.MemberService;
import com.kh.jpa.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notices")
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;
    private final MemberService memberService;

    //공지등록
    @PostMapping("/{userId}")
    public ResponseEntity<String> addNotice(@RequestBody NoticeDto.Create createDto, @PathVariable String userId) {
        String noticeNo = noticeService.createNotice(createDto, userId).toString();
        //return new ResponseEntity<String>(userId,HttpStatus.OK);
        return ResponseEntity.ok(noticeNo); //위와 동일한 역할
    }

    //공지조회
    @GetMapping("/{noticeNo}")
    public ResponseEntity<NoticeDto.Response> getNotice(@PathVariable String noticeNo) {
        return ResponseEntity.ok(noticeService.findNotice(noticeNo));
    }

    //공지수정
    @PutMapping("{noticeNo}")
    public ResponseEntity<NoticeDto.Response> updateNotice(
            @PathVariable String noticeNo,
            @RequestBody NoticeDto.Update updateDto) {
        return ResponseEntity.ok(noticeService.updateNotice(noticeNo, updateDto));
    }

    //공지삭제
    @DeleteMapping("{noticeNo}")
    public ResponseEntity<Void> deleteNotice(@PathVariable String noticeNo) {
        noticeService.deleteNotice(noticeNo);
        return ResponseEntity.ok().build();
    }
}
