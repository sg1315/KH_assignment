package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Board;
import jakarta.persistence.EntityManager;

public class BoardRepositoryImpl implements BoardRepository {

    private EntityManager em;

    @Override
    public void save(Board board) {
        em.persist(board);
    }
}
