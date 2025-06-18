package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Reply;

import java.util.List;

public interface ReplyRepository {
    Long save(Reply reply);
    List<Reply> findAllReplies(Long boardNo);
}
