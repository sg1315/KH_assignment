package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Board;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class BoardRepositoryImpl implements BoardRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Long save(Board board) {
        em.persist(board);
        return board.getBoardNo();
    }

    @Override
    public List<Board> findAllBoards() {
        return em.createQuery("select b from Board b", Board.class).getResultList();
    }

    @Override
    public Optional<Board> findBoardById(Long boardNo) {
        return Optional.ofNullable(em.find(Board.class, boardNo));
    }

    @Override
    public void deleteBoard(Long boardNo) {
        em.remove(em.find(Board.class, boardNo));
    }
}
