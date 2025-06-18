package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Reply;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ReplyRepositoryImpl implements ReplyRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Long save(Reply reply) {
        em.persist(reply);
        return reply.getReplyNo();
    }

    @Override
    public List<Reply> findAllReplies(Long boardNo) {
        String query = ("select r from Reply r where r.board.boardNo = :boardNo");
        return em.createQuery(query, Reply.class)
                .setParameter("boardNo", boardNo)
                .getResultList();
    }
}
