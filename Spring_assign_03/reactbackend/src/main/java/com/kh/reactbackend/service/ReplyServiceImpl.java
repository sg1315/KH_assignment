package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.ReplyDto;
import com.kh.reactbackend.entity.Board;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.entity.Reply;
import com.kh.reactbackend.repository.BoardRepository;
import com.kh.reactbackend.repository.MemberRepository;
import com.kh.reactbackend.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ReplyServiceImpl implements ReplyService {

    private final ReplyRepository replyRepository;
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    @Override
    public Long createReply(ReplyDto.Create createDto) {
        Member member = memberRepository.findOne(createDto.getReply_writer())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));

        Board board = boardRepository.findBoardById(createDto.getRef_bno())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다."));

        Reply reply = createDto.toEntity();
        reply.changeBoard(board);
        reply.changeMember(member);

        return replyRepository.save(reply);
    }

    @Override
    public List<ReplyDto.Response> findAllReplies(Long boardNo) {
        return replyRepository.findAllReplies(boardNo).stream()
                .map(ReplyDto.Response::toSimpleDto)
                .collect(Collectors.toList());
    }
}
