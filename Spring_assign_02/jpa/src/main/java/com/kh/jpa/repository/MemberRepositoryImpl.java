package com.kh.jpa.repository;

import com.kh.jpa.entity.Member;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberRepositoryImpl implements MemberRepository {

    @PersistenceContext //EntityManager를 주입
    private EntityManager em;

    @Override
    public void save(Member member) {
        em.persist(member); // 영속상태가 됨.
    }

    @Override
    public Optional<Member> findOne(String userId) {
        return Optional.ofNullable(em.find(Member.class, userId));
    }

    @Override
    public void delete(Member member) {
        em.remove(member);
    }

    @Override
    public List<Member> findAll() {
        //JPQL : 엔티티기반 쿼리를 전달하는 방법
        //별칭을 반드시 붙여야함
        return em.createQuery("select m from Member m", Member.class).getResultList();
    }

    @Override
    public List<Member> findByName(String name) {
        String query = "select m from Member m where m.userName LIKE :username"; // %이름%
        return em.createQuery(query, Member.class)
                .setParameter("username", "%" + name + "%")
                .getResultList();
    }
}

