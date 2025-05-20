package com.kh.jpa.controller;

import com.kh.jpa.dto.NoticeDto;
import com.kh.jpa.service.MemberService;
import com.kh.jpa.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notices")
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;

    //공지 등록
    @PostMapping()
    public ResponseEntity<String> addNotice(@RequestBody NoticeDto.Create createDto, @RequestParam String userId) {
        String noticeNo = noticeService.createNotice(createDto, userId).toString();
        //return new ResponseEntity<String>(userId,HttpStatus.OK);
        return ResponseEntity.ok(noticeNo); //위와 동일한 역할
    }

    //공지 조회
    @GetMapping("/{noticeNo}")
    public ResponseEntity<NoticeDto.Response> getNotice(@PathVariable String noticeNo) {
        return ResponseEntity.ok(noticeService.findNotice(noticeNo));
    }

    //전체 공지 조회
    @GetMapping
    public ResponseEntity<List<NoticeDto.Response>> getAllNotices() {
        return ResponseEntity.ok(noticeService.findAllNotice());
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

    //제목으로 공지 검색
    @GetMapping("/search/title")
    public ResponseEntity<List<NoticeDto.Response>> getAllNoticesByTitle(@RequestParam String title) {
        return ResponseEntity.ok(noticeService.findByTitle(title));
    }
}
