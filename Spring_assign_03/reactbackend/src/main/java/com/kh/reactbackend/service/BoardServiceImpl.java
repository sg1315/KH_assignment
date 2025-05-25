package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.BoardDto;
import com.kh.reactbackend.entity.Board;
import com.kh.reactbackend.entity.Category;
import com.kh.reactbackend.entity.Member;
import com.kh.reactbackend.repository.BoardRepository;
import com.kh.reactbackend.repository.CategoryRepository;
import com.kh.reactbackend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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


    @Override
    public List<BoardDto.Response> findAllBoards() {
        return boardRepository.findAllBoards().stream()
                .map(BoardDto.Response::toSimpleDto)
                .collect(Collectors.toList());
    }

    @Override
    public BoardDto.Response findBoardById(Long boardNo) {
        return boardRepository.findBoardById(boardNo)
                .map(BoardDto.Response::toSimpleDto)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다."));
    }

    @Override
    public BoardDto.Response updateBoard(Long boardNo, BoardDto.Update updateDto) {
        Board board = boardRepository.findBoardById(boardNo)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다."));

        String categoryName = updateDto.getCategory();
        Category category = categoryRepository.findByCategoryName(categoryName)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리입니다."));

        board.changeCategory(category);
        board.changeTitle(updateDto.getBoard_title());
        board.changeContent(updateDto.getBoard_content());


        return BoardDto.Response.toSimpleDto(board);
    }

    @Override
    public void deleteBoard(Long boardNo) {
        Board board = boardRepository.findBoardById(boardNo)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다."));

        boardRepository.deleteBoard(boardNo);
    }
}
