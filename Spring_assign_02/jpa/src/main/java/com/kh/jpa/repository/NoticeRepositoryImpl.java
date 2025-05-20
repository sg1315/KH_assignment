package com.kh.jpa.repository;

import com.kh.jpa.entity.Notice;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class NoticeRepositoryImpl implements NoticeRepository {

    @PersistenceContext //EntityManager를 주입
    private EntityManager em;

    @Override
    public void save(Notice notice) { em.persist(notice); }

    @Override
    public Optional<Notice> findOne(String noticeNo) { return Optional.ofNullable(em.find(Notice.class, noticeNo)); }

    @Override
    public void delete(Notice notice) { em.remove(notice); }

    @Override
    public List<Notice> findAll() {
        return em.createQuery("select m from Notice m", Notice.class).getResultList();
    }

    @Override
    public List<Notice> findByTitle(String title) {
        String query = "select n from Notice n where n.noticeTitle Like :title";
        return em.createQuery(query, Notice.class)
                .setParameter("title", "%" + title + "%")
                .getResultList();

    }
}
