package com.kh.jpa.repository;

import com.kh.jpa.entity.Member;

import java.util.Optional;

public interface MemberRepository {
    void save(Member member);
    Optional<Member> findOne(String userId);
    void delete(Member member);
}
