package com.kh.jpa.repository;

import com.kh.jpa.entity.Notice;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

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


}
