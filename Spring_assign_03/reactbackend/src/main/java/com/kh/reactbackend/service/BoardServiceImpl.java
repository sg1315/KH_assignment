package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.BoardDto;
import com.kh.reactbackend.entity.Board;
import com.kh.reactbackend.entity.Category;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.repository.BoardRepository;
import com.kh.reactbackend.repository.CategoryRepository;
import com.kh.reactbackend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class BoardServiceImpl implements BoardService{

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;
    private final CategoryRepository categoryRepository;


    @Override
    public Long createBoard(BoardDto.Create createDto) {

        Member member = memberRepository.findOne(createDto.getBoard_writer())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));


        String categoryName = createDto.getCategory();
        Category category = categoryRepository.findByCategoryName(categoryName)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리입니다."));


        Board board = createDto.toEntity();
        board.changeMember(member);
        board.changeCategory(category);



        return boardRepository.save(board);
    }
}
