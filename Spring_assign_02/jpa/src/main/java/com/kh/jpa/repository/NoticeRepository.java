package com.kh.jpa.repository;

import com.kh.jpa.entity.Notice;

import java.util.List;
import java.util.Optional;

public interface NoticeRepository {
    void save(Notice notice);
    Optional<Notice> findOne(String noticeNo);
    void delete(Notice notice);
    List<Notice> findAll();
    List<Notice> findByTitle(String title);
}
