package com.kh.reactbackend.repository;

import com.kh.reactbackend.entity.Member;

import java.util.Optional;

public interface MemberRepository {

    void save(Member member);
    Optional<Member> findOne(String userId);
    void delete(Member member);
}
