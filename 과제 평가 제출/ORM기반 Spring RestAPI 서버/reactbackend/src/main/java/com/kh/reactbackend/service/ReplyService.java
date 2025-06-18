package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.ReplyDto;
import com.kh.reactbackend.entity.Reply;

import java.util.List;

public interface ReplyService {
    Long createReply(ReplyDto.Create createDto);
    List<ReplyDto.Response> findAllReplies(Long boardNo);
}
