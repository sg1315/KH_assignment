package com.kh.jpa.service;

import com.kh.jpa.dto.NoticeDto;

import java.util.List;

public interface NoticeService {
    Long createNotice(NoticeDto.Create createDto, String userId);
    NoticeDto.Response findNotice(String noticeNo);
    NoticeDto.Response updateNotice(String noticeNo, NoticeDto.Update updateDto);
    void deleteNotice(String noticeNo);
    List<NoticeDto.Response> findAllNotice();
    List<NoticeDto.Response> findByTitle(String title);
}
